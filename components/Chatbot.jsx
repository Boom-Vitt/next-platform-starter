'use client';

import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const chatDisplayRef = useRef(null);

    const n8nWebhookUrl = 'https://your-n8n-webhook-url.com/placeholder'; // Placeholder URL

    // Automatically scroll to the bottom of the chat display when new messages are added
    useEffect(() => {
        if (chatDisplayRef.current) {
            chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const newUserMessage = { sender: 'user', text: message };
        setChatHistory(prevChat => [...prevChat, newUserMessage]);
        setMessage('');
        setIsLoading(true);

        // Simple text-based loading animation
        const loadingTexts = ["Thinking...", "Processing...", "Almost there..."];
        let loadingTextIndex = 0;
        const loadingInterval = setInterval(() => {
            setChatHistory(prevChat => {
                const lastMessage = prevChat[prevChat.length - 1];
                if (lastMessage && lastMessage.sender === 'bot' && lastMessage.isLoadingText) {
                    return prevChat.slice(0, -1).concat({ sender: 'bot', text: loadingTexts[loadingTextIndex % loadingTexts.length], isLoadingText: true });
                }
                return prevChat;
            });
            loadingTextIndex++;
        }, 1500);


        try {
            // Add initial "Thinking..." message from bot
            setChatHistory(prevChat => [...prevChat, { sender: 'bot', text: loadingTexts[0], isLoadingText: true }]);

            const response = await fetch(n8nWebhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: newUserMessage.text }),
            });

            clearInterval(loadingInterval); // Stop loading animation
            // Remove the loading text message
            setChatHistory(prevChat => prevChat.filter(msg => !msg.isLoadingText));

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            // Assuming the n8n webhook returns a JSON with a "response" field
            // Adjust this based on the actual n8n workflow response structure
            const botResponse = data.reply || data.response || (data.data && data.data.reply) || 'Sorry, I could not understand that.';
            setChatHistory(prevChat => [...prevChat, { sender: 'bot', text: botResponse }]);

        } catch (error) {
            clearInterval(loadingInterval);
            setChatHistory(prevChat => prevChat.filter(msg => !msg.isLoadingText));
            console.error('Error sending message to n8n webhook:', error);
            setChatHistory(prevChat => [...prevChat, { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col p-4 border border-gray-300 chatbot-panel">
            <div className="flex-grow overflow-y-auto mb-4 pr-2 chat-display" ref={chatDisplayRef}>
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`mb-2 ${chat.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block px-3 py-2 rounded-lg ${chat.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                            {chat.text}
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                    className="flex-grow border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type a message..."
                    disabled={isLoading}
                />
                <button
                    onClick={handleSendMessage}
                    disabled={isLoading}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 disabled:bg-blue-300"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;

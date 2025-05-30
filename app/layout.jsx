import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Chih-Hsuan Chen Portfolio',
        default: 'Chih-Hsuan Chen Portfolio'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                <div className="flex flex-col min-h-screen"> {/* Removed px-6 sm:px-12 bg-noise */}
                    {/* max-w-5xl mx-auto is handled by 'container' class in page.jsx now if needed, or can be added here if a global max-width is desired outside of main content */}
                    <div className="flex flex-col w-full grow">
                        {/* Header can be re-added here if needed later */}
                        <main className="grow">{children}</main>
                        {/* Footer can be re-added here if needed later */}
                    </div>
                </div>
            </body>
        </html>
    );
}

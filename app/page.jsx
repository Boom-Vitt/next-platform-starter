import Chatbot from '../components/Chatbot'; // Import the Chatbot component

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold">Chih-Hsuan Chen</h1>
                <p className="text-xl text-gray-600">chihhsuan.chen.1220@gmail.com | +886-978-060-980 | Kaohsiung, Taiwan | <a href="https://www.linkedin.com/in/chih-hsuan-chen-51a83215a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/chenchihhsuan" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </header>

            <section id="professional-summary" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Summary</h2>
                <p>With a Master’s degree in Electrical Engineering, specializing in brainwave analysis and machine learning, I have developed a strong foundation in software engineering and data analysis. My experience includes creating a full-stack website for hearing screening tests at EarEssence Co., Ltd., and developing machine learning models for EEG data analysis during my academic research. I am passionate about leveraging technology to solve real-world problems and am eager to contribute to innovative projects in a dynamic environment.</p>
            </section>

            <section id="core-technical-skills" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Core Technical Skills</h2>
                <ul className="list-disc list-inside">
                    <li><strong>Programming Languages:</strong> Python, JavaScript, HTML, CSS, C, C++, MATLAB, Verilog</li>
                    <li><strong>Frameworks & Libraries:</strong> React.js, Next.js, Node.js, Express.js, Flask, TensorFlow, Keras, Scikit-learn, NumPy, Pandas, Matplotlib, Seaborn</li>
                    <li><strong>Databases:</strong> MySQL, MongoDB, Firebase</li>
                    <li><strong>Cloud & DevOps:</strong> AWS (S3, EC2, Lambda), Docker, Git, CI/CD</li>
                    <li><strong>Others:</strong> Machine Learning, Deep Learning, Data Analysis, Signal Processing, Agile Development, RESTful APIs</li>
                </ul>
            </section>

            <section id="professional-experience" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Experience</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">EarEssence Co., Ltd.</h3>
                    <p className="italic text-gray-600">Software Engineer | Kaohsiung, Taiwan | Jul. 2023 – Present</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Developed and deployed a full-stack website for hearing screening tests using Next.js, Node.js, and MySQL.</li>
                        <li>Implemented user authentication, data storage, and result visualization features.</li>
                        <li>Collaborated with audiologists to ensure the accuracy and usability of the screening tool.</li>
                        <li>Contributed to the improvement of hearing healthcare accessibility through technology.</li>
                    </ul>
                    <div className="mt-2">
                        <h4 className="font-semibold">Company Projects:</h4>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Hearing Screening Website:</strong> Led the development of a comprehensive online platform for hearing assessments. Managed the project lifecycle from requirement gathering to deployment.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Brain Computer Interface Lab</h3>
                    <p className="italic text-gray-600">Research Assistant | Kaohsiung, Taiwan | Aug. 2021 – Jun. 2023</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Conducted research on brainwave (EEG) data analysis for emotion recognition using machine learning techniques.</li>
                        <li>Developed and trained deep learning models (CNN, RNN) to classify emotions based on EEG signals.</li>
                        <li>Published research findings in peer-reviewed journals and presented at international conferences.</li>
                        <li>Collaborated with a multidisciplinary team of researchers and engineers.</li>
                    </ul>
                     <div className="mt-2">
                        <h4 className="font-semibold">Company Projects:</h4>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Emotion Recognition from EEG:</strong> Developed a novel deep learning model for classifying emotions from EEG data, achieving state-of-the-art accuracy.</li>
                            <li><strong>Driver Drowsiness Detection:</strong> Contributed to a project on detecting driver drowsiness using EEG signals and machine learning algorithms.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="internships" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Internships</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">XYZ Tech Solutions</h3>
                    <p className="italic text-gray-600">Software Engineer Intern | Taipei, Taiwan | Jun. 2020 – Aug. 2020</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Assisted in the development of a web application using React.js and Node.js.</li>
                        <li>Participated in code reviews and agile development processes.</li>
                        <li>Gained experience in software testing and debugging.</li>
                    </ul>
                </div>
            </section>

            <section id="education" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">National Kaohsiung University of Science and Technology</h3>
                    <p className="italic text-gray-600">Master of Science in Electrical Engineering | Kaohsiung, Taiwan | Sep. 2021 – Jun. 2023</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Thesis: Emotion Recognition based on EEG using Deep Learning</li>
                        <li>Relevant Coursework: Machine Learning, Deep Learning, Digital Signal Processing, Biomedical Engineering</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">National Kaohsiung University of Science and Technology</h3>
                    <p className="italic text-gray-600">Bachelor of Science in Electrical Engineering | Kaohsiung, Taiwan | Sep. 2017 – Jun. 2021</p>
                     <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Relevant Coursework: Data Structures, Algorithms, Computer Networks, Embedded Systems</li>
                    </ul>
                </div>
            </section>

            <section id="certifications" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Certifications</h2>
                <ul className="list-disc list-inside">
                    <li>AWS Certified Solutions Architect – Associate</li>
                    <li>TensorFlow Developer Certificate</li>
                </ul>
            </section>

            <Chatbot /> {/* Add the Chatbot component here */}
        </div>
    );
}

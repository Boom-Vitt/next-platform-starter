import Chatbot from '../components/Chatbot'; // Import the Chatbot component

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold">VITTAVAT SOOTAWEE (BOOM)</h1>
                <p className="text-2xl text-blue-700 font-semibold my-2">AI & FULL‑STACK ENGINEER | MOBILE & CLOUD SPECIALIST</p>
                <div className="text-md text-gray-600">
                    <p>Phone: (+66) 92-279-9930</p>
                    <p>Email: vittavat.sootawee@gmail.com</p>
                    <p>Address: Bangkok, Thailand</p>
                    <p>
                        <a href="https://www.linkedin.com/in/vittavat-sootawee/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">LinkedIn</a> |
                        <a href="https://github.com/boomchanot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"> GitHub</a> |
                        <a href="https://boomchanot.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"> Portfolio</a>
                    </p>
                </div>
            </header>

            <section id="professional-summary" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Summary</h2>
                <p className="text-lg">
                    A highly motivated and results-oriented AI and Full-Stack Engineer with a Master’s degree in Computer Science, specializing in AI and data-driven mobile applications. Proven ability to lead projects, develop innovative solutions, and contribute to team success. Seeking a challenging role to leverage expertise in AI, cloud computing, and mobile development to drive technological advancements. Currently enhancing skills through a Google Advanced Data Analytics Professional Certificate.
                </p>
            </section>

            <section id="core-technical-skills" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Core Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Languages & Frameworks</h3>
                        <ul className="list-disc list-inside">
                            <li>Python (NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow, Keras, Flask, FastAPI)</li>
                            <li>JavaScript (React, React Native, Next.js, Node.js, Express.js, Vue.js, Angular)</li>
                            <li>HTML, CSS, Tailwind CSS, Bootstrap</li>
                            <li>PHP (Laravel), C#, C++, Java, Dart (Flutter), Swift (iOS), Kotlin (Android)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">AI & Data Science</h3>
                        <ul className="list-disc list-inside">
                            <li>Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI</li>
                            <li>Data Analysis, Data Visualization, Statistical Modeling, Big Data Technologies</li>
                            <li>Scrum, Agile Methodologies</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Cloud & DevOps</h3>
                        <ul className="list-disc list-inside">
                            <li>AWS (EC2, S3, RDS, Lambda, API Gateway, Amplify, CloudFront, Route53, IAM, VPC, CloudWatch, CodeCommit, CodePipeline, CloudFormation, ECR, ECS, EKS, SageMaker, Bedrock)</li>
                            <li>Google Cloud Platform (GCP), Firebase, Docker, Kubernetes, CI/CD, Git, GitHub Actions, GitLab CI</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Databases</h3>
                        <ul className="list-disc list-inside">
                            <li>MySQL, PostgreSQL, MongoDB, NoSQL, MariaDB, SQL Server, Oracle, DynamoDB</li>
                        </ul>
                    </div>
                    <div className="mt-4 md:col-span-2"> {/* Make 'Other' span full width on medium screens if needed or keep as is */}
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Other</h3>
                        <ul className="list-disc list-inside">
                            <li>Project Management, Microservices, API Design, UI/UX, Mobile Development (iOS & Android)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="professional-experience" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Experience</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold">EarEssence Co., Ltd.</h3>
                    <p className="italic text-gray-600">AI Full Stack Engineer | Bangkok, Thailand | May 2023 – Present</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Spearheaded the &quot;Map Analytics Platform,&quot; enhancing business decision-making by integrating heatmaps and location based data analytics using Python, Flask, React, and AWS.</li>
                        <li>Developed &quot;EduBuddy (MU Chat),&quot; an AI chatbot for Mahidol University, using Node.js, Python, LangChain, and AWS, improving student engagement and support.</li>
                        <li>Created an &quot;AI Agents Course Platform&quot; with Next.js, Node.js, and AWS, focusing on scalable AI model deployment and LLM integration.</li>
                        <li>Engineered the &quot;CRA Landing Website&quot; using Next.js and AWS, resulting in a 30% increase in user engagement.</li>
                        <li>Built the &quot;Salayte Hashery Mobile App&quot; with React Native and AWS, streamlining operations for a local business.</li>
                    </ul>
                    <div className="mt-4">
                        <h4 className="font-semibold">Company Projects:</h4>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Map Analytics Platform:</strong> Python, Flask, React, AWS (EC2, S3, RDS).</li>
                            <li>
                                <strong>EduBuddy (MU Chat):</strong> Node.js, Python, LangChain, RAG, Vector DB, AWS (Lambda, API Gateway, S3, DynamoDB).
                                <a href="https://edubuddy.mahidol.ac.th" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-1">[Link]</a>
                            </li>
                            <li><strong>AI Agents Course Platform:</strong> Next.js, Node.js, Python, LangChain, AWS (EC2, S3, Lambda, API Gateway).</li>
                            <li><strong>CRA Landing Website:</strong> Next.js, AWS (Amplify, CloudFront, S3).</li>
                            <li><strong>Salayte Hashery Mobile App:</strong> React Native, AWS (Amplify, DynamoDB, Lambda).</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-xl font-semibold">Brain Computer Interface Lab</h3>
                    <p className="italic text-gray-600">Researcher | Bangkok, Thailand | Jan 2022 – Apr 2023</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Led research focusing on EEG data analysis for emotion recognition, utilizing Python, Scikit-learn, TensorFlow, and Keras.</li>
                        <li>Published findings in international journals and presented at conferences, contributing to advancements in BCI technology.</li>
                    </ul>
                </div>
            </section>

            <section id="internships" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Internships</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Solutions Consulting Co., Ltd.</h3>
                    <p className="italic text-gray-600">Full Stack Developer | Bangkok, Thailand | Jun 2021 – Dec 2021</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Developed and maintained web applications using PHP (Laravel), JavaScript, and MySQL.</li>
                        <li>Contributed to UI/UX design and database management, enhancing application functionality.</li>
                    </ul>
                </div>
            </section>

            <section id="education" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Mahidol University</h3>
                    <p className="italic text-gray-600">Master of Science in Computer Science | Bangkok, Thailand | Aug 2021 – May 2023</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>GPA: 3.80</li>
                        <li>Focus: Artificial Intelligence, Data-Driven Mobile Applications</li>
                        <li>Senior Project: AI-driven mobile application for personalized learning.</li>
                        <li>Scholarships: Full scholarship recipient for academic excellence.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Mahidol University</h3>
                    <p className="italic text-gray-600">Bachelor of Science in ICT (Computer Science Track) | Bangkok, Thailand | Aug 2017 – May 2021</p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>GPA: 3.50</li>
                        <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Mobile Application Development.</li>
                    </ul>
                </div>
            </section>

            <section id="certifications" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Certifications</h2>
                <ul className="list-disc list-inside">
                    <li>Google Advanced Data Analytics Professional Certificate (Coursera, In Progress)</li>
                    <li>AWS Certified Cloud Practitioner (Amazon Web Services, 2023)</li>
                    <li>TOEIC (900/990, 2023)</li>
                </ul>
            </section>

            <Chatbot /> {/* Add the Chatbot component here */}
        </div>
    );
}

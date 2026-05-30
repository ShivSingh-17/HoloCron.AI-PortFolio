"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 px-10 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-widest text-white">
          HoloCron<span className="text-jediBlue">.AI</span>
        </div>
        <ul className="flex gap-10">
          {["Home", "About", "Skills", "Experience", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-jediBlue transition-colors font-medium tracking-wide text-2xl"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="w-full bg-transparent overflow-hidden relative z-10">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between pt-[100px] pb-10 px-6 lg:px-20"
        >
          {/* Left Column (60%) */}
          <motion.div
            className="w-full lg:w-[60%] flex flex-col items-start justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-4"
            >
              Hi, I'm <br />
              <span className="text-jediBlue">Shiv Prakash Singh</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl lg:text-3xl text-gray-400 mb-10 tracking-tight font-medium"
            >
              AI Engineer & Full-Stack Developer
            </motion.p>

            <motion.button
              variants={itemVariants}
              className="bg-sithRed text-white px-8 py-4 text-xl font-bold rounded-lg mb-10 transition-all hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(210,4,45,0.6)]"
            >
              Contact Me
            </motion.button>

            <motion.div variants={itemVariants} className="flex gap-6">
              <a
                href="https://github.com/ShivSingh-17"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-600 rounded-full hover:border-[#007BFF] hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all text-white font-medium tracking-wide"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shiv-prakash-singh-624091267/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-600 rounded-full hover:border-[#007BFF] hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all text-white font-medium tracking-wide"
              >
                LinkedIn
              </a>
              <a
                href="mailto:shiva.singh170304@gmail.com"
                className="px-6 py-2 border border-gray-600 rounded-full hover:border-[#007BFF] hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] transition-all text-white font-medium tracking-wide"
              >
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column (40%) */}
          <motion.div
            className="w-full lg:w-[40%] flex justify-center items-center mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
              className="rounded-[20px] p-1 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_40px_10px_rgba(0,123,255,0.15)] inline-block"
            >
              <div className="rounded-[16px] overflow-hidden bg-black/50 flex items-center justify-center">
                <Image
                  src="/hero-portrait.png"
                  alt="Shiv Prakash Singh - AI Engineer"
                  width={600}
                  height={750}
                  className="w-auto h-auto max-h-[75vh] object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  priority
                />
              </div>
            </Tilt>
          </motion.div>
        </section>

        {/* SECTION 1: ABOUT */}
        <section
          id="about"
          className="min-h-screen relative flex items-center justify-center border-none outline-none m-0 p-0 block"
        >
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Image
              src="/about-bg.png"
              alt="About Background"
              width={800}
              height={800}
              className="w-auto h-auto max-w-[40vw] max-h-[80vh] object-contain"
            />
          </motion.div>
          <div className="relative z-10 w-full flex flex-col items-start justify-center pl-[5%] lg:pl-[10%] pr-[5%] lg:pr-0 py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold tracking-tighter text-white mb-12"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 lg:p-12 w-full lg:w-[50vw] max-w-4xl text-left shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <p className="text-gray-200 text-xl leading-relaxed mb-8">
                I am an innovative Full Stack AI Engineer. My expertise spans building complex multi-agent LLM pipelines, fine-tuning local models, and designing robust full-stack architectures. Beyond deploying computer vision solutions like YOLOv8, I actively hone my analytical problem-solving skills through rigorous competitive programming and data structures practice in Python and Java. I am driven by a passion to bridge cutting-edge AI research with scalable, real-world applications.
              </p>
              <div className="border-t border-white/10 pt-8 mt-8">
                <h3 className="text-jediBlue font-semibold text-2xl mb-3">Education</h3>
                <p className="text-white font-medium text-xl">B.Tech in Computer Science and Engineering</p>
                <p className="text-gray-400 text-lg">Rungta College of Engineering and Technology, Bhilai (2022 - 2026)</p>
                <p className="text-jediBlue font-bold mt-2 text-lg">CGPA: 7.5</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: SKILLS */}
        <section
          id="skills"
          className="min-h-screen relative flex items-center justify-center border-none outline-none m-0 p-0 block"
        >
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute left-[5%] top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Image
              src="/skills-bg.png"
              alt="Skills Background"
              width={800}
              height={800}
              className="w-auto h-auto max-w-[40vw] max-h-[80vh] object-contain"
            />
          </motion.div>
          <div className="relative z-10 w-full flex flex-col items-end justify-center pr-[5%] lg:pr-[10%] pl-[5%] lg:pl-0 py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold tracking-tighter text-white mb-12 text-right"
            >
              The Jedi Arsenal
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-[65vw] max-w-6xl">
              {[
                { title: "Languages", skills: "Python, TypeScript, JavaScript, Java, SQL" },
                { title: "Agentic AI & LLMs", skills: "LangChain, LlamaIndex, CrewAI, AutoGen, Hugging Face" },
                { title: "Core AI Engineering", skills: "RAG, Multi-Agent Architectures, Fine-Tuning, Prompt Engineering" },
                { title: "Full Stack & APIs", skills: "React, Next.js, FastAPI, Flask, Streamlit" },
                { title: "Databases & Vector Stores", skills: "Supabase, PostgreSQL, MongoDB, Pinecone, ChromaDB" },
                { title: "Tools & MLOps", skills: "AWS, Docker, Git/GitHub, Claude Code, Postman, CI/CD" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#007BFF] hover:shadow-[0_0_20px_rgba(0,123,255,0.2)] transition-all cursor-default shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{skill.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{skill.skills}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: EXPERIENCE */}
        <section
          id="experience"
          className="min-h-screen relative flex items-center justify-center border-none outline-none m-0 p-0 block"
        >
          <motion.div
            animate={{ y: [-25, 25, -25] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Image
              src="/experience-bg.png"
              alt="Experience Background"
              width={800}
              height={800}
              className="w-auto h-auto max-w-[40vw] max-h-[80vh] object-contain"
            />
          </motion.div>
          <div className="relative z-10 w-full flex flex-col items-start justify-center pl-[5%] lg:pl-[10%] pr-[5%] lg:pr-0 py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold tracking-tighter text-white mb-16"
            >
              The Galactic Timeline
            </motion.h2>

            <div className="relative ml-4 md:ml-8 pl-10 border-l border-white/10 space-y-16 w-full lg:w-[50vw] max-w-4xl">
              <div className="absolute top-0 bottom-0 left-[-2px] w-1 bg-[#007BFF] shadow-[0_0_15px_#007BFF] rounded-full"></div>

              {[
                { role: "Intern Full Stack - AI Engineer", company: "Simplifying Skills", date: "April 2026 – May 2026 (Onsite)", desc: "Maintained and scaled existing ed-tech products by rapidly debugging core issues and seamlessly integrating new AI functionalities for an improved end-user experience." },
                { role: "Intern Full Stack - AI Engineer", company: "CAMai.in", date: "Dec 2025 – March 2026 (Onsite)", desc: "Architected and developed AI system architectures and multi-ML models to drive intelligent application features." },
                { role: "AI-ML Intern", company: "Edunet", date: "Jan 2025 - April 2025 (Remote)", desc: "Worked on a Gen AI product based on Fashion. Trained a Neural Network using TensorFlow and utilized Hugging Face APIs for workflow pipelines." }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-[#007BFF] hover:shadow-[0_0_30px_rgba(0,123,255,0.15)] transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute w-5 h-5 bg-jediBlue rounded-full -left-[51px] top-12 shadow-[0_0_15px_#007BFF] border-[3px] border-black"></div>

                  <h3 className="text-3xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-jediBlue font-semibold text-xl mb-3">{exp.company}</h4>
                  <span className="text-sm text-gray-400 block mb-6 tracking-widest uppercase font-medium">{exp.date}</span>
                  <p className="text-gray-200 text-lg leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECTS */}
        <section
          id="projects"
          className="min-h-screen relative flex items-center justify-center border-none outline-none m-0 p-0"
        >
          <motion.div
            animate={{ y: [25, -25, 25] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
            className="absolute left-[5%] top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Image
              src="/projects-bg.png"
              alt="Projects Background"
              width={800}
              height={800}
              className="w-auto h-auto max-w-[40vw] max-h-[80vh] object-contain"
            />
          </motion.div>
          <div className="relative z-10 w-full flex flex-col items-end justify-center pr-[5%] lg:pr-[10%] pl-[5%] lg:pl-0 py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold tracking-tighter text-white mb-16 text-right"
            >
              The Archives
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full lg:w-[65vw] max-w-7xl">
              {[
                {
                  title: "Object Detection using YOLOv8",
                  tech: "Python, PyTorch, OpenCV",
                  desc: "Developed a real-time object detection system using the YOLOv8 framework, enabling detection on images, videos, and live webcam feeds.",
                  link: "#"
                },
                {
                  title: "AI-Powered ATS",
                  tech: "React Router v7, TypeScript, Tailwind, Puter.js",
                  desc: "Implemented a smart AI evaluation system that compares uploaded resumes against specific job listings to generate an ATS score and custom feedback.",
                  link: "#"
                },
                {
                  title: "CAMai Safety System",
                  tech: "React, Next.js, Python, AWS, OpenCV",
                  desc: "A comprehensive AI-powered safety monitoring system for factory environments, featuring real-time detection and monitoring capabilities.",
                  link: "#"
                },
                {
                  title: "AI-Based Code Generator",
                  tech: "Python, Gemini API, Flask",
                  desc: "Developed an AI-powered code generation tool that uses natural-language prompts to automatically generate code snippets across multiple languages.",
                  link: "#"
                }
              ].map((project, index) => (
                <Tilt
                  key={index}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                  glareBorderRadius="24px"
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  className="h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full min-h-[350px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:border-sithRed/50 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                      <p className="text-sithRed text-base font-mono mb-6 tracking-wide">{project.tech}</p>
                      <p className="text-gray-200 text-lg leading-relaxed mb-10">{project.desc}</p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block self-start bg-[#D2042D] hover:bg-red-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition-colors shadow-[0_0_20px_rgba(210,4,45,0.4)] hover:shadow-[0_0_30px_rgba(210,4,45,0.7)]"
                    >
                      View on GitHub
                    </a>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

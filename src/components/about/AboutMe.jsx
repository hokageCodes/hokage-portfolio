/* eslint-disable react/no-unescaped-entities */
// About.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Sample tech stack icons - replace with your own image URLs
const techStack = [
  { name: "HTML5", image: "https://via.placeholder.com/24" },
  { name: "CSS3", image: "https://via.placeholder.com/24" },
  { name: "JavaScript (ES6)", image: "https://via.placeholder.com/24" },
  { name: "React.js", image: "https://via.placeholder.com/24" },
  { name: "Firebase", image: "https://via.placeholder.com/24" },
  { name: "Node.js", image: "https://via.placeholder.com/24" },
  { name: "Express", image: "https://via.placeholder.com/24" },
  { name: "Git/GitHub", image: "https://via.placeholder.com/24" },
  { name: "Postman", image: "https://via.placeholder.com/24" },
  { name: "WordPress", image: "https://via.placeholder.com/24" },
  { name: "Figma", image: "https://via.placeholder.com/24" },
  { name: "MS Clipchamp Video Editor", image: "https://via.placeholder.com/24" },
];

export default function About() {
  return (
    <section className="bg-gray-900 text-textColor py-12 px-6 md:px-16 lg:px-32 flex justify-center items-center">
      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-5xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        
        {/* Profile Image */}
        <motion.div
          className="w-64 h-64 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="https://via.placeholder.com/200" // Replace with your actual image URL
            alt="Profile"
            className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-blue-500"
          />
        </motion.div>

        {/* About Content */}
        <div className="space-y-6 lg:max-w-lg">
          
          {/* Heading */}
          <motion.h2
            className="text-4xl font-semibold mb-4 border-b-4 border-textAccent inline-block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About Me
          </motion.h2>

          {/* Bio Section */}
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hi, I'm Busayo, a passionate self-taught front-end developer from Nigeria on my journey to become a full-stack developer. I build fun and scalable web applications, focusing on detail and continuous learning.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            My goal is to create <span className="text-textAccent font-semibold">efficient</span>, <span className="text-textAccent font-semibold">accessible</span>, and <span className="text-textAccent font-semibold">creative solutions</span> for various users.
          </motion.p>

          {/* Hobbies Section */}
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Outside of programming, I enjoy quiet spaces, watching anime, and talking about my love for Ribena. I’m also into fast cars and video games.
          </motion.p>

          {/* Tools and Technologies */}
          <div>
            <motion.h3
              className="text-2xl font-semibold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Technologies & Tools
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 gap-4 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <img src={tech.image} alt={tech.name} className="w-6 h-6" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

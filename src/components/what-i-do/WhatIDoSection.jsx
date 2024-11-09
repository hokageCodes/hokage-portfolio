import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhatIDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="bg-gray-900 py-16 px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <motion.div
        className="max-w-4xl mx-auto text-left md:text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Heading with Underline Slide-In Animation */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-white relative inline-block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I am a{' '}
          <span className="text-textAccent font-bold relative inline-block">
            skilled developer
            <motion.svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 200 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: -200 }}
              animate={isInView ? { x: 0 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <path
                d="M0,5 Q50,10 200,5"
                stroke="#7e92d9"
                strokeWidth="1.5"
              />
            </motion.svg>
          </span>{' '}
          with expertise in creating web solutions that{' '}
          <span className="relative text-textAccent font-bold inline-block">
            work beautifully
            <motion.svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 200 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: -200 }}
              animate={isInView ? { x: 0 } : {}}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <path
                d="M0,5 Q50,10 200,5"
                stroke="#7e92d9"
                strokeWidth="1.5"
              />
            </motion.svg>
          </span>
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-8 mt-12 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5, staggerChildren: 0.2 }}
        >
          {/* Web Design Card */}
          <motion.div
            className="flex-1 p-6 bg-white border border-gray-300 rounded-xl shadow-lg text-left hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/assets/web.jpg"
              alt="Web Design"
              className="w-32 h-32 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Web Design
            </h3>
            <p className="text-md text-gray-600 leading-relaxed">
              Crafting visually appealing, user-centered designs with a focus on aesthetics and functionality for a seamless user experience.
            </p>
          </motion.div>

          {/* Web Development Card */}
          <motion.div
            className="flex-1 p-6 bg-white border border-gray-300 rounded-xl shadow-lg text-left hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/assets/dev.svg"
              alt="Web Development"
              className="w-32 h-32 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold text-black mb-2">
              Web Development
            </h3>
            <p className="text-md text-gray-600 leading-relaxed">
              Building robust, scalable, and efficient web applications that bring designs to life, ensuring fast and smooth performance.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatIDo;

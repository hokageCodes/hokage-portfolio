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
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-white relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          I am a{' '}
          <span className="text-textAccent font-bold relative">
            skilled developer
            <motion.div
              className="absolute -bottom-2 left-0 h-1 w-full bg-textAccent"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "left" }}
            />
          </span>{' '}
          with expertise in crafting digital solutions that{' '}
          <span className="text-textAccent font-bold relative">
            work beautifully
            <motion.div
              className="absolute -bottom-2 left-0 h-1 w-full bg-textAccent"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 1.3,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "left" }}
            />
          </span>
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-8 mt-12 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {["Web Design", "Web Development"].map((title) => (
            <motion.div
              key={title}
              className="flex-1 p-6 bg-white border border-gray-300 rounded-xl shadow-lg text-left hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 12 } },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)" }}
            >
              <img
                src={`/assets/${title}.jpg`}
                alt={title}
                className="w-32 h-32 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                {title}
              </h3>
              <p className="text-md text-gray-600 leading-relaxed">
                {title === "Web Design"
                  ? "Crafting visually appealing, user-centered designs with a focus on aesthetics and functionality for a seamless user experience."
                  : "Building robust, scalable, and efficient web applications that bring designs to life, ensuring fast and smooth performance."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatIDo;

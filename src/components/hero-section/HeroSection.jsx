import { motion, useViewportScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollY } = useViewportScroll();

  // Parallax and other scroll effects
  const yParallaxGreeting = useTransform(scrollY, [0, 300], [0, -50]);
  const yParallaxName = useTransform(scrollY, [0, 300], [0, -20]);
  const yParallaxSubheader = useTransform(scrollY, [0, 300], [0, -10]);
  const opacityCTA = useTransform(scrollY, [0, 300], [1, 0.5]);
  const rotateCTA = useTransform(scrollY, [0, 300], [0, 5]);
  const fadeOutMouse = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      <div className="text-left md:text-center">
        
        {/* Greeting Message */}
        <motion.p
          style={{ y: yParallaxGreeting }}
          className="text-lg text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi there!👋
        </motion.p>
        
        {/* Main Header */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-4"
          style={{ y: yParallaxName }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I am{' '}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
            Busayo Ogunde
          </span>.
        </motion.h1>

        {/* Subheader */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-300 mt-4"
          style={{ y: yParallaxSubheader }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I develop efficient and scalable digital solutions
        </motion.h2>

        {/* Additional Text */}
        <motion.p
          className="text-lg text-gray-400 mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I tell computers &#34;DO THIS!!&#34;, and they refuse. Then I cry for a very long time{' '}
          <span role="img" aria-label="crying emoji">😭</span>
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-8 px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-blue-500 transition duration-300"
          style={{ opacity: opacityCTA, rotate: rotateCTA }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          REACH OUT
        </motion.button>
      </div>

      {/* Mouse Indicator */}
      <motion.div
        className="absolute bottom-4 left-2/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity: fadeOutMouse }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <img src="/assets/mouse1-line.svg" alt="Scroll Down" className="w-16" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

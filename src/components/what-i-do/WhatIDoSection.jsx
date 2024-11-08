const WhatIDo = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto text-left md:text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 text-black relative inline-block text-white">
          I am a{' '}
          <span className="text-textAccent font-bold relative inline-block">
            skilled developer
            <svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 200 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,5 Q50,10 200,5" // Smooth curve for underline
                stroke="#7e92d9" // Accent color from config
                strokeWidth="1.5"
              />
            </svg>
          </span>{' '}
          with expertise in creating web solutions that{' '}
          <span className="relative text-textAccent font-bold inline-block">
            work beautifully
            <svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 200 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,5 Q50,10 200,5" // Smooth curve for underline
                stroke="#7e92d9" // Accent color from config
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mt-12 justify-center">
          {/* Web Design Card */}
          <div className="flex-1 p-6 bg-white border border-gray-300 rounded-xl shadow-lg text-left">
            <img src="/assets/web.jpg" alt="Web Design" className="w-32 h-32 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-black mb-2">Web Design</h3>
            <p className="text-md text-gray-600 leading-relaxed">
              Crafting visually appealing, user-centered designs with a focus on aesthetics and functionality for a seamless user experience.
            </p>
          </div>

          {/* Web Development Card */}
          <div className="flex-1 p-6 bg-white border border-gray-300 rounded-xl shadow-lg text-left">
            <img src="/assets/dev.svg" alt="Web Development" className="w-32 h-32 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-black mb-2">Web Development</h3>
            <p className="text-md text-gray-600 leading-relaxed">
              Building robust, scalable, and efficient web applications that bring designs to life, ensuring fast and smooth performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

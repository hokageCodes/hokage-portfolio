const HeroSection = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-8">
      <div className="text-left md:text-center">
        <p className="text-lg text-gray-400">Hi there!👋</p>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
          I am{' '}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
            Busayo Ogunde
          </span>.
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mt-4">
          I develop efficient and scalable digital solutions
        </h2>
        
        <p className="text-lg text-gray-400 mt-6">
          I tell computers &#34;DO THIS!!&#34;, and they refuse. Then I cry for a very long time{' '}
          <span role="img" aria-label="crying emoji">😭</span>
        </p>
        
        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-md hover:from-indigo-500 hover:to-blue-500 transition duration-300">
          REACH OUT
        </button>
      </div>

        {/* Mouse Indicator */}
            <div className="absolute bottom-4 left-2/2 transform -translate-x-1/2 animate-bounce">
                <img src="/assets/mouse1-line.svg" alt="Scroll Down" className="w-16" />
            </div>
    </section>
  );
};

export default HeroSection;



const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-cover"
      style={{
        backgroundImage: "url('/cover_bg.jpeg')",
        backgroundPosition: "center 75%",
      }}
      id="home"
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Playfair_Display']">
            Capturing Moments That Last Forever
          </h1>
          <p className="text-xl text-white mb-8 font-light">
            Professional photography that tells your unique story through a minimalist and emotive
            approach.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-white text-primary px-8 py-3 font-medium rounded-lg whitespace-nowrap hover:bg-white/90 transition-all"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 font-medium rounded-lg whitespace-nowrap hover:bg-white/10 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center text-white">
          <i className="ri-arrow-down-line ri-lg"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;

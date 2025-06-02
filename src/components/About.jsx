const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <img src="/about_img.jpeg" alt="Aditya Raul" className="w-full h-auto object-cover" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6 font-['Playfair_Display']">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              I'm Aditya Raul, a hobbyist photographer capturing life's most precious moments. My
              journey began with a simple phone camera gifted by maternal uncle, which sparked a
              hobby for visual storytelling.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My approach to photography is minimalist yet emotive, focusing on the subtle interplay
              between light, shadow, and subject. I believe that the most powerful images are those
              that evoke genuine emotion and capture authentic moments.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              When I'm not behind the camera, you'll find me exploring remote landscapes, coding,
              developing software, or enjoying quiet moments with a cup of coffee and a good book.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "ri-graduation-cap-line",
                    text: "B.E in Electronics & Telecommunication",
                  },
                  {
                    icon: "ri-map-pin-line",
                    text: "Navi Mumbai, Maharashtra, India",
                  },
                  {
                    icon: "ri-briefcase-line",
                    text: "Web & App developer",
                  },
                  {
                    icon: "ri-translate-2",
                    text: "English, Hindi, Marathi",
                  },
                ].map((fact, idx) => (
                  <div className="flex items-start" key={idx}>
                    <div className="w-6 h-6 flex items-center justify-center mr-2 text-black">
                      <i className={fact.icon}></i>
                    </div>
                    <p className="text-secondary">{fact.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

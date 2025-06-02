const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">James Winters</h3>
            <p className="text-gray-400 mb-6">
              Capturing moments that tell your unique story through a minimalist and emotive
              approach.
            </p>
            <div className="flex space-x-4">
              {["instagram-line", "facebook-line", "twitter-x-line"].map((icon, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`ri-${icon}`} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Portfolio", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Portrait Photography",
                "Wedding Photography",
                "Commercial Photography",
                "Photography Workshops",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates and special offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border-none rounded-l focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-r-button whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2025 James Winters Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

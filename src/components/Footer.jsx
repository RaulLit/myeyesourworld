const Footer = () => {
    const platforms = [
      { label: "instagram", href: "https://www.instagram.com/myeyes.ourworld/" },
      { label: "twitter-x", href: "https://x.com/adityakraul" },
      { label: "linkedin", href: "https://www.linkedin.com/in/adityakraul/" },
    ];

    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-around items-center mb-12">
            {/* Brand */}
            <div className="w-72">
              <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Aditya Raul</h3>
              <p className="text-gray-400 mb-6">
                Capturing moments that tell your unique story through a minimalist and emotive
                approach.
              </p>
              <div className="flex space-x-4">
                {platforms.map((platform, idx) => (
                  <a
                    key={idx}
                    href={`${platform.href}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className={`ri-${platform.label}-line`} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-72">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Portfolio", "About", "Contact"].map((item) => (
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
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2025 Aditya Raul Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;

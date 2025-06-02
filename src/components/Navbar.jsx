import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-['Playfair_Display'] font-bold tracking-wide">
          Aditya Raul
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/myeyes.ourworld/"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-primary transition-colors"
          >
            <i className="ri-instagram-line ri-lg" />
          </a>
          {/* <a
            href="#"
            className="w-10 h-10 flex items-center justify-center cursor-pointer hover:text-primary transition-colors"
          >
            <i className="ri-twitter-x-line ri-lg" />
          </a> */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={toggleMobileMenu}
          >
            <i className={`ri-${mobileOpen ? "close" : "menu"}-line ri-lg`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white absolute w-full left-0 top-full shadow-lg py-4 px-12">
          <nav className="flex flex-col space-y-4">
            <a
              href="#portfolio"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

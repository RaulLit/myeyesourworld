import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ImageModal from "./components/ImageModal";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import imageData from "./ImageData.json";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const images = imageData.images; // import if externalized

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const showPrevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const showNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="bg-white text-primary font-['Work_Sans']">
      <Navbar />
      <Hero />
      <Portfolio onImageClick={openModal} />
      <ImageModal
        isOpen={isModalOpen}
        image={images.find((img) => img.id === currentImageIndex)}
        onClose={closeModal}
        onPrev={showPrevImage}
        onNext={showNextImage}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

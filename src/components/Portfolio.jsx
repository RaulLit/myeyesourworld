import { useState } from "react";
import imageData from "../ImageData.json";

const categories = ["All", "Landscape", "Nature"];

const Portfolio = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? imageData.images
      : imageData.images.filter((img) => img.category === activeCategory.toLowerCase());

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-['Playfair_Display']">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my most cherished works, each telling a unique story through light,
            composition, and emotion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-btn px-6 py-2 border border-gray-300 rounded-lg cursor-pointer hover:border-black whitespace-nowrap transition-all ${
                activeCategory === cat ? "active" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="rounded-lg overflow-hidden cursor-pointer relative mb-3"
              onClick={() => onImageClick(img.id)}
            >
              <img
                src={`/photography/${img.id}.${img.type}`}
                alt={img.alt}
                className="w-full h-auto object-cover object-top break-inside-avoid"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-white text-xl font-bold">{img.date}</p>
                <p className="text-white text-xs mb-1">{img.category.toUpperCase()}</p>
                <p className="text-white text-sm">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

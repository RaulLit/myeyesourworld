import { useEffect, useState } from "react";

const ImageModal = ({ isOpen, image, onClose, onPrev, onNext }) => {
  const [zoomed, setZoomed] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  // Reset zoom when image or modal changes
  useEffect(() => {
    setZoomed(false);
  }, [image, isOpen]);

  const handleMouseMove = (e) => {
    if (!zoomed) return;

    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const xPercent = (offsetX / rect.width) * 100;
    const yPercent = (offsetY / rect.height) * 100;

    setCoords({ x: xPercent, y: yPercent });
  };

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={(e) => {
        if (e.target.id === "modal-backdrop") onClose();
      }}
      id="modal-backdrop"
    >
      {/* Close button */}
      <button className="absolute top-6 right-6 text-white cursor-pointer" onClick={onClose}>
        <div className="w-10 h-10 flex items-center justify-center">
          <i className="ri-close-line ri-2x" />
        </div>
      </button>

      {/* Previous button */}
      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white  cursor-pointer"
        onClick={onPrev}
      >
        <div className="w-12 h-12 flex items-center justify-center">
          <i className="ri-arrow-left-line ri-2x" />
        </div>
      </button>

      {/* Image */}
      <div className="max-w-5xl max-h-[80vh]">
        <img
          src={`/photography/${image.id}.${image.type}`}
          alt={image.alt}
          className={`max-w-full max-h-[80vh] object-contain cursor-zoom-in transition-transform duration-300 ease-in-out ${
            zoomed ? "cursor-zoom-out" : ""
          }`}
          onClick={() => setZoomed(!zoomed)}
          onMouseMove={handleMouseMove}
          style={
            zoomed
              ? {
                  transformOrigin: `${coords.x}% ${coords.y}%`,
                  transform: `scale(2)`,
                }
              : {
                  transform: `scale(1)`,
                  transformOrigin: "center center",
                }
          }
        />
      </div>

      {/* Next button */}
      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
        onClick={onNext}
      >
        <div className="w-12 h-12 flex items-center justify-center">
          <i className="ri-arrow-right-line ri-2x" />
        </div>
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-white">
        <p className="text-white text-xl font-bold">{image.category.toUpperCase()}</p>
        <p className="text-white text-xs mb-1">{image.alt}</p>
      </div>
    </div>
  );
};

export default ImageModal;

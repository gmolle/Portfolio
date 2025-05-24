import { useEffect, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [translateOffset, setTranslateOffset] = useState(0);

  // Validate project.images
  const images = Array.isArray(project?.images)
    ? project.images.filter(
        (img) => img && img.src && typeof img.caption === "string"
      )
    : [];
  const imageCount = images.length;

  // Create display array with multiple sets of images for infinite loop
  const cloneCount = imageCount > 1 ? 3 : 1; // 3 sets for infinite loop, 1 for single/no images
  const displayImages =
    imageCount > 0
      ? Array(cloneCount)
          .fill()
          .flatMap(() => images)
      : [];
  const displayImageCount = displayImages.length;

  // Start in the middle set of images
  const initialOffset = imageCount > 1 ? imageCount : 0;
  const [displayIndex, setDisplayIndex] = useState(initialOffset);

  const nextImage = () => {
    if ((isTransitioning && !isFullscreen) || imageCount <= 1) return;
    if (!isFullscreen) setIsTransitioning(true);
    setDisplayIndex((prev) => prev + 1);
    setCurrentImageIndex((prev) => (prev + 1) % imageCount);
  };

  const prevImage = () => {
    if ((isTransitioning && !isFullscreen) || imageCount <= 1) return;
    if (!isFullscreen) setIsTransitioning(true);
    setDisplayIndex((prev) => prev - 1);
    setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const goToImage = (index) => {
    if (
      index === currentImageIndex ||
      isTransitioning ||
      imageCount <= 1 ||
      index < 0 ||
      index >= imageCount
    ) {
      return;
    }

    const currentDisplayMod = displayIndex % imageCount;
    let delta = index - currentDisplayMod;

    // Wrap around directionally if shorter
    if (delta > imageCount / 2) delta -= imageCount;
    if (delta < -imageCount / 2) delta += imageCount;

    setIsTransitioning(true);
    setDisplayIndex((prev) => prev + delta);
    setCurrentImageIndex(index);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    const virtualIndex = displayIndex % imageCount;

    if (displayIndex < imageCount) {
      // Too far left → jump to middle set
      setDisplayIndex(initialOffset + virtualIndex);
    } else if (displayIndex >= imageCount * 2) {
      // Too far right → jump to middle set
      setDisplayIndex(initialOffset + virtualIndex);
    }
  };

  // Scroll locking
  useEffect(() => {
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  // ESC key handling
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        isFullscreen ? setIsFullscreen(false) : onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, isFullscreen]);

  useEffect(() => {
    if (!isFullscreen && imageCount > 1) {
      // Reset display index when exiting fullscreen to realign the sliding carousel
      const newDisplayIndex = initialOffset + currentImageIndex;
      setDisplayIndex(newDisplayIndex);
    }
  }, [isFullscreen, currentImageIndex, imageCount, initialOffset]);

  const ArrowButton = ({ onClick, direction }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute ${
        direction === "left" ? "left-2" : "right-2"
      } top-1/2 transform -translate-y-1/2 
        bg-indigo-600 text-white p-2 rounded-full 
        hover:bg-indigo-700 transition-all duration-200 
        cursor-pointer z-10 ${
          isTransitioning ? "opacity-50 cursor-not-allowed" : ""
        }`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} image`}
      disabled={isTransitioning}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );

  const Dots = () => (
    <div className="flex justify-center mt-4 space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => goToImage(index)}
          className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
            index === currentImageIndex
              ? "bg-indigo-600"
              : "bg-gray-300 hover:bg-gray-400"
          } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
          aria-label={`Go to image ${index + 1}`}
          disabled={isTransitioning}
        />
      ))}
    </div>
  );

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 overflow-y-auto font-manrope"
      onClick={onClose}
    >
      <div
        className="bg-white m-4 rounded-xl shadow-2xl max-w-2xl w-full p-8 relative transform transition-all duration-300 scale-95 sm:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          {project.name}
        </h2>
        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Screenshots
          </h3>
          {imageCount > 0 ? (
            <div className="relative">
              <div className="relative w-full overflow-hidden rounded-lg">
                <div className="w-full h-64 sm:h-80 relative">
                  {/* Slider container */}
                  <div
                    className="flex h-full"
                    style={{
                      transform: `translateX(-${
                        displayIndex * 100 + translateOffset
                      }%)`,
                      transition: isTransitioning
                        ? "transform 0.5s ease-in-out"
                        : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                  >
                    {displayImages.map((image, index) => (
                      <div key={index} className="min-w-full h-full">
                        <img
                          src={image.src}
                          alt={`${project.name} screenshot ${
                            (index % imageCount) + 1
                          }`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {imageCount > 1 && (
                    <>
                      <ArrowButton direction="left" onClick={prevImage} />
                      <ArrowButton direction="right" onClick={nextImage} />
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500 text-center italic">
                  {images[currentImageIndex]?.caption || "No caption available"}
                </p>
              </div>

              {imageCount > 1 && <Dots />}
              <div className="flex justify-end mt-3">
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
                >
                  View Fullscreen
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No screenshots available.</p>
          )}
        </div>

        <div className="flex gap-4">
          <a
            href={project.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
          >
            View Deployed
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          >
            View Code
          </a>
        </div>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center z-[9999] before:absolute before:inset-0 before:bg-black before:opacity-80"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full max-w-8xl mx-auto bg-black px-4 py-8 flex items-center justify-center">
            {imageCount > 1 && (
              <>
                <ArrowButton
                  direction="left"
                  onClick={prevImage}
                  className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 hidden lg:flex"
                />
                <ArrowButton
                  direction="right"
                  onClick={nextImage}
                  className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 hidden lg:flex"
                />
              </>
            )}
            <div className="flex flex-col items-center">
              <img
                src={images[currentImageIndex]?.src || ""}
                alt="Fullscreen"
                className="max-h-[85vh] max-w-full object-contain"
              />
              <p className="mt-2 text-sm text-gray-400 text-center italic">
                {images[currentImageIndex]?.caption || "No caption available"}
              </p>
            </div>
          </div>
          {imageCount > 1 && (
            <div className="absolute bottom-10 flex justify-center space-x-2">
              <Dots />
            </div>
          )}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white bg-black p-2 rounded cursor-pointer"
            aria-label="Close fullscreen"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;

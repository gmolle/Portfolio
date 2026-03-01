import { useState } from "react";

export default function ProjectGallery({ project }) {
  const images = Array.isArray(project?.images)
    ? project.images.filter(
        (img) => img && img.src && typeof img.caption === "string"
      )
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = images.length;

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % imageCount);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount);

  if (imageCount === 0) {
    return <p className="text-gray-500">No screenshots available.</p>;
  }

  const current = images[currentIndex];

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-200/80">
        <div className="aspect-video w-full flex items-center justify-center min-h-[280px]">
          <img
            src={current.src}
            alt={current.caption}
            className="max-h-[75vh] w-full object-contain"
          />
        </div>
        {imageCount > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-500 text-center italic">
        {current.caption}
      </p>
      {imageCount > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === currentIndex ? "bg-indigo-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

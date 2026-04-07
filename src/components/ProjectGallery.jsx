import { useState, useMemo, useEffect, useRef, useCallback } from "react";

export default function ProjectGallery({ project }) {
  const images = Array.isArray(project?.images)
    ? project.images.filter(
        (img) => img && img.src && typeof img.caption === "string",
      )
    : [];

  const imageCount = images.length;
  const useInfinite = imageCount >= 2;

  const extendedSlides = useMemo(() => {
    if (!useInfinite) return images;
    return [images[imageCount - 1], ...images, images[0]];
  }, [images, imageCount, useInfinite]);

  const extendedCount = extendedSlides.length;

  const [slideIndex, setSlideIndex] = useState(() => (useInfinite ? 1 : 0));
  const [enableTransition, setEnableTransition] = useState(true);
  const slideIndexRef = useRef(slideIndex);
  const ignoreTransitionEndRef = useRef(false);

  useEffect(() => {
    slideIndexRef.current = slideIndex;
  }, [slideIndex]);

  useEffect(() => {
    setSlideIndex(useInfinite ? 1 : 0);
    setEnableTransition(true);
  }, [project?.slug, useInfinite]);

  const logicalIndex = useMemo(() => {
    if (!useInfinite) return slideIndex;
    if (slideIndex === 0) return imageCount - 1;
    if (slideIndex === extendedCount - 1) return 0;
    return slideIndex - 1;
  }, [slideIndex, useInfinite, imageCount, extendedCount]);

  const current = images[logicalIndex] ?? images[0];

  const slidePercent = (slideIndex * 100) / extendedCount;

  const finishWrap = useCallback(() => {
    if (ignoreTransitionEndRef.current) return;
    const i = slideIndexRef.current;
    if (i === extendedCount - 1) {
      setEnableTransition(false);
      setSlideIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    } else if (i === 0) {
      setEnableTransition(false);
      setSlideIndex(imageCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }
  }, [extendedCount, imageCount]);

  const scheduleTransition = useCallback((fn) => {
    ignoreTransitionEndRef.current = true;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fn();
        ignoreTransitionEndRef.current = false;
      });
    });
  }, []);

  const advanceFromFirstClone = useCallback(() => {
    const target = Math.min(2, extendedCount - 2);
    setEnableTransition(false);
    setSlideIndex(1);
    scheduleTransition(() => {
      setEnableTransition(true);
      setSlideIndex(target);
    });
  }, [extendedCount, scheduleTransition]);

  const retreatFromLastClone = useCallback(() => {
    const target = Math.max(imageCount - 1, 1);
    setEnableTransition(false);
    setSlideIndex(imageCount);
    scheduleTransition(() => {
      setEnableTransition(true);
      setSlideIndex(target);
    });
  }, [imageCount, scheduleTransition]);

  useEffect(() => {
    if (!useInfinite) return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (slideIndex === extendedCount - 1) {
      setSlideIndex(1);
    } else if (slideIndex === 0) {
      setSlideIndex(imageCount);
    }
  }, [slideIndex, useInfinite, extendedCount, imageCount]);

  const handleTransitionEnd = (e) => {
    if (!useInfinite || e.propertyName !== "transform") return;
    if (ignoreTransitionEndRef.current) return;
    const i = slideIndexRef.current;
    if (i === extendedCount - 1 || i === 0) {
      finishWrap();
    }
  };

  const goToLogical = (logical) => {
    const k = ((logical % imageCount) + imageCount) % imageCount;
    if (useInfinite) setSlideIndex(k + 1);
    else setSlideIndex(k);
  };

  const next = () => {
    if (!useInfinite) {
      setSlideIndex((p) => (p + 1) % imageCount);
      return;
    }
    const p = slideIndexRef.current;
    if (p >= extendedCount - 1) {
      if (p > extendedCount - 1) {
        setEnableTransition(false);
        setSlideIndex(1);
        scheduleTransition(() => setEnableTransition(true));
      } else {
        advanceFromFirstClone();
      }
      return;
    }
    setSlideIndex((prev) => Math.min(prev + 1, extendedCount - 1));
  };

  const prev = () => {
    if (!useInfinite) {
      setSlideIndex((p) => (p - 1 + imageCount) % imageCount);
      return;
    }
    const p = slideIndexRef.current;
    if (p <= 0) {
      if (p < 0) {
        setEnableTransition(false);
        setSlideIndex(imageCount);
        scheduleTransition(() => setEnableTransition(true));
      } else {
        retreatFromLastClone();
      }
      return;
    }
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  if (imageCount === 0) {
    return <p className="text-gray-500">No screenshots available.</p>;
  }

  const trackTransitionClass = enableTransition
    ? "transition-[transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none"
    : "";

  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-950 border border-gray-200/80">
        <div className="aspect-video w-full min-h-[280px]">
          <div
            className={`flex h-full ${trackTransitionClass}`}
            style={{
              width: `${extendedCount * 100}%`,
              transform: `translateX(-${slidePercent}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="h-full min-h-[280px] shrink-0 overflow-hidden bg-gray-950"
                style={{ width: `${100 / extendedCount}%` }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover object-center select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        {imageCount > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors z-10 shadow-md"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors z-10 shadow-md"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>
      <p className="mt-3 text-sm text-gray-500 text-center italic min-h-[1.25rem] transition-opacity duration-300">
        {current?.caption}
      </p>
      {imageCount > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToLogical(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === logicalIndex
                  ? "bg-indigo-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

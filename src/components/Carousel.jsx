import React, { useState, useEffect, useRef, useCallback } from "react";
import "./carousel.css";

const Carousel = ({ images, autoPlayInterval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const slideRef = useRef();
  const intervalRef = useRef();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Autoplay setup
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [next]);

  const startAutoPlay = () => {
    stopAutoPlay(); // clear dulu biar tidak double
    intervalRef.current = setInterval(next, autoPlayInterval);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Swipe gesture
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      next();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prev();
    }
    startAutoPlay(); // restart autoplay setelah swipe
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
        ref={slideRef}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="carousel-slide"
            loading="lazy"
          />
        ))}
      </div>
      <button className="carousel-button left" onClick={() => { prev(); startAutoPlay(); }}>
        ❮
      </button>
      <button className="carousel-button right" onClick={() => { next(); startAutoPlay(); }}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;

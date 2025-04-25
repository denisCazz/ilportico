"use client";
import { FiCoffee, FiDroplet, FiAperture } from "react-icons/fi";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    { src: "/images/cocktail1.avif", label: "Signature Cocktail", icon: <FiAperture /> },
    { src: "/images/cocktail2.avif", label: "Fresh Mix", icon: <FiDroplet /> },
    { src: "/images/cocktail3.avif", label: "Classic Drink", icon: <FiCoffee /> }
  ];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 500);
    }
  };

  return (
    <div>
      {/* Slider solo su mobile */}
      <div className="block lg:hidden w-full h-[60vh] sm:h-[80vh] md:h-[90vh] relative overflow-hidden rounded-3xl shadow-2xl">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              sizes="100vw"
              quality={100}
              priority={index === current}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
                transform: "translate3d(0, 0, 0)"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 text-yellow-400 p-3 rounded-full z-20 hover:bg-yellow-400 hover:text-black shadow-lg transition"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 text-yellow-400 p-3 rounded-full z-20 hover:bg-yellow-400 hover:text-black shadow-lg transition"
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) setCurrent(index);
              }}
              className={`h-3 w-3 rounded-full border-2 border-yellow-400 transition-all duration-200 ${
                index === current ? "bg-yellow-400 scale-110 shadow" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Collage solo su desktop */}
      <div className="collage-hero mt-4">
        {images.map((img, idx) => (
          <div className="collage-img-wrapper" key={img.src}>
            <Image src={img.src} alt={img.label} width={900} height={700} className="collage-img" />
            <span className="collage-img-label">
              {img.icon}
              {img.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

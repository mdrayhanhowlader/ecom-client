"use client";
import React, { useEffect, useState } from "react";
import LeftArrow from "./icons/LeftArrow";
import RightArrow from "./icons/RightArrow";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/2632670/pexels-photo-2632670.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/289262/pexels-photo-289262.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1700769/pexels-photo-1700769.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-96 md:w-4/5 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${index === currentIndex ? "bg-gray-700" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
        onClick={prevSlide}
      >
        <LeftArrow />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
        onClick={nextSlide}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default Slider;

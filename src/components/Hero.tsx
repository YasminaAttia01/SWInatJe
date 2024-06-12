"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
const images = [
  "/images/hero-bg-1.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
];
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const nextImage = () => {
    setCurrentImage((currentImage) => (currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (currentImage) => (currentImage - 1 + images.length) % images.length
    );
  };
  return (
    <section
      className="min-h-[100vh] w-full bg-cover bg-no-repeat bg-center relative z-0 flex items-end justify-center py-32 "
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute z-1 inset-0 bg-black opacity-60"></div>
      <div className="w-full flex items-center justify-between gap-10 sm:px-20 relative z-2">
        <ChevronLeft
          onClick={prevImage}
          size={50}
          color="white"
          className="cursor-pointer hover:scale-105 app-transition"
        />{" "}
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-balance">
            Association <span className="font-black text-primary">INAT</span>
            <br />
            Junior Entreprise <br />
            Leader de son écosystème
          </h1>
          <CustomButton
            href="/demander-devis"
            type="link"
            label="Demander un Devis"
          />
        </div>
        <ChevronRight
          onClick={nextImage}
          size={50}
          color="white"
          className="cursor-pointer hover:scale-105 app-transition"
        />
      </div>
    </section>
  );
};

export default Hero;

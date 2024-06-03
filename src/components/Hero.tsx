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
      className="min-h-[100vh] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center gap-20 "
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <ChevronLeft
        onClick={prevImage}
        size={50}
        color="white"
        className="cursor-pointer hover:scale-105 app-transition"
      />
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-extrabold text-balance">
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
    </section>
  );
};

export default Hero;

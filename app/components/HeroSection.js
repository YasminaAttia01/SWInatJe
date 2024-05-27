'use client'
import React, { useState, useEffect } from "react";

import Link from "next/link";


const images = [
  '/images/hero_background.jpg', 
  '/images/hero_background2.jpg', 
  '/images/hero_background4.jpg', 

];  

const HeroSection = () => {

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
    setCurrentImage((currentImage) => (currentImage - 1 + images.length) % images.length);
  };


  return (
    <main className="relative flex  w-full flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center gap-20 px-32 py-20">
    <div className="absolute  w-full inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      {/* Black opacity overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
      
      
                  <button onClick={prevImage} className="absolute left-0 z-20 p-4 focus:outline-none">
        <span className="text-white text-3xl">❮</span>
      </button>
      <button onClick={nextImage} className="absolute right-0 z-20 p-4 focus:outline-none">
        <span className="text-white text-3xl">❯</span>
      </button>
      <div className="relative flex flex-col items-center justify-center w-full mt-20 lg:mt-0 px-20">

      <div className="flex flex-col gap-8 z-10 mt-[25rem] mb-8">
          <h1 className="text-white font-bold text-5xl lg:text-5xl text-center">
            Association <span className="text-yellow-500">INAT</span> 
            <br /> Junior Entreprise
            <br /> Leader de son ecosystème
          </h1>
        </div>
        
        <div className="flex items-center justify-center w-full ">
          <Link href="/devis">
            <div className="flex items-center justify-center bg-yellow-500 bg-opacity-90 rounded-2xl drop-shadow-lg px-14 lg:px-10 py-4 hover:scale-105 app_transition select-none cursor-pointer">
              <span className="font-extrabold text-2xl lg:text-xl text-white truncate">
                Demander un devis
              </span>
            </div>
          </Link>
        </div>
        </div>
    </main>
  );
};

export default HeroSection;

"use client"

import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const gallery_images = [
    '/images/image3.jpg',
    '/images/gallery_image2.jpg',
    '/images/image4.jpg',
    '/images/image1.jpg',
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % gallery_images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + gallery_images.length) % gallery_images.length
    );
  };

  // Fonction pour passer à la diapositive suivante automatiquement
  const autoPlay = () => {
    handleNextSlide();
  };

  // Utilisation de useEffect pour démarrer le défilement automatique à la montée du composant
  useEffect(() => {
    const intervalId = setInterval(autoPlay, 5000); // Changez 3000ms (3 secondes) selon vos besoins

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [currentSlide]); // Assurez-vous de mettre à jour l'intervalle chaque fois que currentSlide change

  return (
    <div className="w-full bg-white flex flex-col justify-start items-center py-14 overflow-x-hidden">
      <h1 className="text-5xl lg:text-7xl font-bold text-primary text-center">
        Qui Sommes nous ?
      </h1>
      <hr className="border-t-4 border-primary w-1/3 my-6" />
      <p className="w-4/5 md:w-3/5 text-lg md:text-3xl italic text-secondary text-center  ">
        Melkart Junior Entreprise est la junior entreprise de l’école nationale
        d’ingénieurs de Carthage fondée en 2012, gérée par des étudiants et qui
        fonctionne sur le modèle d’une entreprise estudiantine. Elle permet aux
        étudiants d’acquérir une expérience professionnelle pendant leur cursus
        à travers la réalisation de prestations de service pour des clients
        externes.
      </p>
    <div className="relative" style={{ height: '60vh', marginTop:'20px' }}>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[60vh] flex overflow-hidden relative m-auto">
        <Carousel selectedItem={currentSlide} onChange={setCurrentSlide} showThumbs={false} showStatus={false}>
          {gallery_images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`gallery-image${index}`}
              className={index === currentSlide ? 'animate-fadeIn' : 'hidden'}
              style={{ maxHeight: '600px', maxWidth: '50%' }} 
              />
          ))}
        </Carousel>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {gallery_images.map((_, index) => (
          <div
            className={
              index === currentSlide
                
              
            }
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
   </div>
  );
};

export default AboutSection;

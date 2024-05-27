'use client'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const gallery_images = [
    '/images/forum/_DSC3596.jpg',
    //'/images/forum/_DSC3523.jpg',
    //'/images/forum/_DSC3586.jpg',
    '/images/forum/_DSC3703.jpg',
    '/images/forum/_DSC3726.jpg',
    '/images/forum/_DSC3736.jpg',
    '/images/forum/_DSC3740.jpg',
    '/images/forum/_DSC3760.jpg',
    '/images/forum/_DSC3838.jpg',
    '/images/forum/DSC_5236.jpg',
    '/images/forum/DSC_5238.jpg',
    '/images/forum/DSC_5240.jpg',
    '/images/forum/DSC_5243.jpg',
    '/images/forum/DSC_5247.jpg',
    '/images/forum/DSC_5250.jpg',
    '/images/forum/DSC_5254.jpg',
    '/images/forum/DSC_5257.jpg',
    '/images/forum/DSC_5259.jpg',
    '/images/forum/DSC_5277.jpg',
    '/images/forum/DSC_5314.jpg',
    '/images/forum/DSC_5316.jpg',
    '/images/forum/DSC_5320.jpg',
    '/images/forum/DSC_5324.jpg',
    '/images/forum/DSC_5330.jpg',
    '/images/forum/DSC_5332.jpg',
    '/images/forum/DSC_5335.jpg',
    '/images/forum/DSC_5338.jpg',
    '/images/forum/DSC_5344.jpg',
    '/images/forum/DSC_5349.jpg',
    '/images/forum/DSC_5373.jpg',
    '/images/forum/DSC_5378.jpg',
    '/images/forum/DSC_5379.jpg',
    '/images/forum/DSC_5385.jpg',
    '/images/forum/DSC_5389.jpg',
    '/images/forum/DSC_5394.jpg',
    '/images/forum/DSC_5400.jpg',
    '/images/forum/DSC_5409.jpg',
    '/images/forum/DSC_5418.jpg',
    '/images/forum/DSC_5425.jpg',
    '/images/forum/DSC_5549.jpg',
  ];

  const chunkSize = 4; // Number of images per slide
  const chunkedImages = gallery_images.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // Start a new chunk
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % chunkedImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + chunkedImages.length) % chunkedImages.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="w-full bg-custom flex flex-col justify-start items-center py-14 overflow-x-hidden">
      <h1 className="text-xl  f1c420-text lg:text-2xl font-bold text-center">
      Notre Galerie 
      </h1>
      <div className="relative" style={{ height: '30vh', marginTop: '20px' }}>
        <div className="w-full h-[60vh] flex overflow-hidden relative m-auto">
          <Carousel selectedItem={currentSlide} onChange={setCurrentSlide} showThumbs={false} showStatus={false}>
            {chunkedImages.map((chunk, index) => (
              <div key={index} className="flex justify-center items-center space-x-4">
                {chunk.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`gallery-image-${index}-${i}`}
                    style={{ maxHeight: '300px', maxWidth: '20%' }} 
                  />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        <div className="relative flex justify-center p-2">
          {chunkedImages.map((_, index) => (
            <div
              key={index}
              className={index === currentSlide ? "active-dot" : "inactive-dot"}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

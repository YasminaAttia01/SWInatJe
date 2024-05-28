'use client';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryImages = [
    '/images/forum/_DSC3596.jpg',
    '/images/forum/_DSC3623.jpg',
    '/images/forum/_DSC3686.jpg',
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

  // Divide images into chunks if necessary, each chunk can be a separate slide if you prefer grouping
  const chunkSize = 3; // Adjust based on how many images you want per view if needed
  const chunkedImages = galleryImages.reduce((resultArray, item, index) => {
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
    setCurrentSlide((prevSlide) => (prevSlide - 1 + chunkedImages.length) % chunkedImages.length);
  };

  return (
    <div className="w-full bg-custom flex flex-col justify-center items-center py-14">
      <h1 className="text-xl lg:text-2xl font-bold text-center mb-5 f1c420-text "  style={{ fontSize: '25px' }}>
        Notre Galerie
      </h1>
      <Carousel 
        selectedItem={currentSlide} 
        onChange={setCurrentSlide} 
        showThumbs={false} 
        showStatus={false}
        showArrows={true}
        useKeyboardArrows
        autoPlay={false}
        swipeable
        emulateTouch
        dynamicHeight={false}
        className="w-full custom-carousel"
      >
        {chunkedImages.map((chunk, index) => (
          <div key={index} className="flex justify-center items-center space-x-4 mb-6">
            {chunk.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`gallery-image-${index}-${i}`}
                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} 
              />
            ))}
          </div>
        ))}
        
      </Carousel>
     
    </div>
  );
};

export default Gallery;

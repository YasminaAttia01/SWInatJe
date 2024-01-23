import React from 'react';
import Marquee from "react-fast-marquee";

const PartnersSection = () => {
  const partners = [
    "/images/partners/Asset1.png",
    "/images/partners/Asset2.png",
    "/images/partners/Asset3.png",
    "/images/partners/Asset4.png",
    "/images/partners/Asset5.png",
    "/images/partners/Asset6.png",
    "/images/partners/Asset7.png",
    "/images/partners/Asset8.png",
    "/images/partners/Asset9.png",
    "/images/partners/Asset10.png",
    "/images/partners/Asset11.png",
  ];

  return (
    <div className="w-full bg-primary flex items-center justify-center flex-col gap-10 md:gap-20 py-20 shadow-2xl">
      <h1 className="text-5xl lg:text-7xl font-bold text-white text-center">
        Nos Partenaires
      </h1>
      <div className="flex items-center justify-start gap- overflow-hidden">
        <Marquee direction="left" speed={50}>
          {partners.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`partner-${index}`}
              style={{ width: '90%' }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PartnersSection;

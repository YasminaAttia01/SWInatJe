import React from 'react';
import Marquee from "react-fast-marquee";

const PartnersSection = () => {
  const partners = [
    "/images/partners/apbs-logo.jpg",
    "/images/partners/bayer_copy.png",
    "/images/partners/boud.png",
    "/images/partners/cot.png",
    "/images/partners/gid.png",
    "/images/partners/GIPP.png",
    "/images/partners/ingc.png",
    "/images/partners/innovinat.png",
    "/images/partners/INSTM.png",
    "/images/partners/lbm.png",
    "/images/partners/LOGO.JPG",
    "/images/partners/logo1.jpg",
    "/images/partners/mabrouka.png",
    "/images/partners/mdim.png",
    "/images/partners/maz.png",
    "/images/partners/poul.png",
    "/images/partners/Rayenfood.png",
    "/images/partners/asal.jpeg",
    "/images/partners/sadira.png",
    "/images/partners/sag.png",
    "/images/partners/sanlucar.jfif",
    "/images/partners/scet.png",
    "/images/partners/sfbt.png",
    "/images/partners/sna.png",
    "/images/partners/sonalika.png",
    "/images/partners/Sosem.png",
    "/images/partners/stb.png",
    "/images/partners/téléchargement5.png",
    "/images/partners/téléchargement.jpg",
    "/images/partners/telecom.png",
    "/images/partners/UPTUN.png",
    "/images/partners/vit.png",
    "/images/partners/woocommerce_placeholder_img.png",
  ];

  return (
    <div className="w-full bg-primary flex items-center justify-center flex-col gap-10 md:gap-20 py-20 shadow-2xl">
      <h1 className="text-5xl lg:text-7xl font-bold text-white text-center">
      Ceux qui nous ont fait confiance :
      </h1>
      <div className="flex items-center justify-start gap- overflow-hidden">
        <Marquee direction="left" speed={50}>
          {partners.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`partner-${index}`}
              style={{ width: '100%' }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PartnersSection;

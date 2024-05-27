import React from "react";
import Image from "next/image"; // Use Next.js Image component for optimized images

const ServiceCard = ({ service }) => {
  return (
    <div className="relative flex flex-col  text-left bg-white rounded-lg shadow-md ">
      <div className="relative mb-4">
        <Image className="rounded-tl-lg rounded-tr-lg shadow-md " src={service.image} alt={service.title} width={500} height={300} />
        <div className="absolute   top-[9rem] right-5 w-16 h-16 bg-yellow-500 flex items-center justify-center rounded-md mb-4">
        <Image src={service.icon} alt="Icon" width={40} height={40} />
      </div>
      </div>
      <h2 className="text-xl px-10 font-bold mb-2 py-2">{service.title}</h2>
      <p className="px-10 text-left leading-[30px] pb-6">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
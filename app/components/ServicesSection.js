import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
const ServicesSection = () => {
  const services = [
    {
      icon: "/icons/web.svg",
      title: "Développement Web",
      description:
        "Notre expertise se trouve dans le développement web, en concevant des sites web sur mesure qui capturent l'essence de votre entreprise.",
    },
    {
      icon: "/icons/mobile.svg",
      title: "Développement Mobile",
      description:
        "On réalise des projets de développement mobile en concrétisant vos idées à travers des applications intuitives et percutantes.",
    },
    {
      icon: "/icons/desktop.svg",
      title: "Développement Desktop",
      description:
        "On fait du développement desktop pour créer des logiciels puissants qui répondent à vos exigences métier.",
    },
  ];
  return (
    <main className="relative z-0 -top-[5vh] w-full flex flex-col items-center gap-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-36 px-8 sm:px-16 md:px-32">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </main>
  );
};

export default ServicesSection;

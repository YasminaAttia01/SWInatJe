import React from "react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
const ServicesSection = () => {
  const services = [
    {
      image: "/images/service1.jpg",
      icon: "/icons/service11.png",
      title: "Cultures Hors Sol",
      description:
        "Les cultures hors sol sont une méthode de production végétale réalisée dans un environnement contrôlé. Cette approche favorise un rendement optimal des cultures et aide ainsi à optimiser l'eau et l'espace.",
    },
    {
      image: "/images/service2.jpg",
      icon: "/icons/service22.png",
      title: "Les Études",
      description:
        "La prestation d'études fait référence à une série d'analyses et d'évaluations systématiques menées pour recueillir, examiner et interpréter des informations spécifiques afin de prendre des décisions éclairées.",
    },
    {
      image: "/images/service3.jpg",
      icon: "/icons/service33.png",
      title: "Système Composteur",
      description:
        "C'est la pratique de décomposer des matières organiques biodégradables à l'intérieur d'un récipient spécialement conçu afin de créer un environnement contrôlé pour le processus de décomposition aérobie.",
    },
  ];
  return (
<main className="relative top-[5vh] w-full flex flex-col items-center  bg-cover bg-center bg-no-repeat py-5" style={{ backgroundImage: "url('/images/background_services.png')" }}>
<h3 className="f1c420-text" style={{ fontSize: '25px', textAlign: 'center' }}>
        Nos Prestations
      </h3>
      <h1 className="font-extrabold text-4xl leading-[57.6px] text-center text-custom pb-5" style={{ fontFamily: "'Montserrat', cursive", color: 'black',  textAlign: 'center' }}>
        Ce Que Nous Offrons
      </h1>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 py-5 gap-x-12 gap-y-36 px-8 sm:px-16 md:px-32">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </main>
  );
};

export default ServicesSection;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Covered_By_Your_Grace } from "next/font/google";
import CustomButton from "./CustomButton";
import SectionTitle from "./SectionTitle";

const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const prestations = [
  {
    title: "Cultures Hors Sol",
    description:
      "Les cultures hors sol sont une méthode de production végétale réalisée dans un environnement contrôlé. Cette approche favorise un rendement optimal des cultures et aide ainsi à optimiser l'eau et l'espace.",
    image: "/images/service-1.png",
    icon: "/icons/vertical-farming.png",
  },
  {
    title: "Les Études",
    description:
      "La prestation d'études fait référence à une série d'analyses et d'évaluations systématiques menées pour recueillir, examiner et interpréter des informations spécifiques afin de prendre des décisions éclairées.",
    image: "/images/service-2.png",
    icon: "/icons/smart-farm.png",
  },
  {
    title: "Système Composteur",
    description:
      "C’est la pratique de décomposer des matières organiques biodégradables à l'intérieur d'un récipient spécialement conçu afin de créer un environnement contrôlé pour le processus de décomposition aérobie.",
    image: "/images/service-3.png",

    icon: "/icons/seed-bag.png",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full bg-light-bg bg-bottom bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/section-bg.png')" }}
    >
      <div className="flex flex-col items-center justify-center gap-14 w-8/12 py-20">
        <SectionTitle subtitle="Nos Prestations" title="Ce Que Nous Offrons" />
        <div className="flex flex-wrap items-center justify-center gap-10 ">
          {prestations.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[370px]  bg-white flex flex-col gap-8 rounded-xl overflow-hidden pb-4"
              >
                <div
                  className="h-[260px] relative w-full"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute -bottom-8 right-5 w-20 h-20 bg-primary rounded-xl flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-12 h-12 mx-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-4">
                  <h3 className="font-extrabold text-2xl">{item.title}</h3>
                  <p className="font-medium text-grey text-sm leading-8 ">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

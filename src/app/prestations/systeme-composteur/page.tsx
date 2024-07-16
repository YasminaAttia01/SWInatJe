"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CustomHeader from "@/components/CustomHeader";
import SectionTitle from "@/components/SectionTitle";

interface ImagePaths {
  [key: string]: string[];
}

interface CurrentImages {
  palette: number;
  polyethylene: number;
  rotary: number;
}

const imagePaths: ImagePaths = {
  palette: [
    "/images/systeme-composteur-1.jpg",
    "/images/systeme-composteur-1.jpg",
  ],
  polyethylene: [
    "/images/systeme-composteur-2.jpg",
    "/images/systeme-composteur-3.jpg",
  ],
  rotary: [
    "/images/composteur.jpg",
    "/images/composteur.jpg",
  ],
};

const compostingSystemNames = {
  palette: "En Palette",
  polyethylene: "En Polyéthylène",
  rotary: "Rotatif",
};

const Page: React.FC = () => {
  const [currentImages, setCurrentImages] = useState<CurrentImages>({
    palette: 0,
    polyethylene: 0,
    rotary: 0,
  });

  const handleMouseEnter = (type: keyof CurrentImages) => {
    setCurrentImages((prevImages) => ({
      ...prevImages,
      [type]: (prevImages[type] + 1) % imagePaths[type].length,
    }));
  };

  return (
    <main className="flex flex-col overflow-x-hidden min-h-[100vh] gap-10 items-center">
      <CustomHeader
        backgroundImage="/images/cultures-hors-sol.png"
        title="Le Système Composteur"
        paragraph="En Palette | En Polyéthylène | Rotatif"
        prestationHeader
      />

      <div className="flex flex-col gap-4 sm:gap-10 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <div className="flex flex-col gap-4">
          <SectionTitle
            title="Le Système Composteur"
            subtitle="Définition et Principe de Fonctionnement"
            align="start"
          />
          <p className="text-grey font-medium text-justify">
            Le compostage en conteneur se réfère à la pratique de décomposer des
            matières organiques biodégradables à l'intérieur d'un récipient
            spécialement conçu, généralement hermétique, afin de créer un
            environnement contrôlé pour le processus de décomposition aérobie.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 justify-between gap-4 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        {Object.entries(imagePaths).map(([type, paths]) => (
          <div
            key={type}
            className="group relative flex flex-col gap-4 justify-center items-center rounded-3xl overflow-hidden"
            onMouseEnter={() => handleMouseEnter(type as keyof CurrentImages)}
          >
            <img
              src={paths[currentImages[type as keyof CurrentImages]]}
              alt={`Système Composteur ${type}`}
              className="object-cover h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            <span className="absolute bottom-5 font-bold text-lg text-white text-center truncate">
              {
                compostingSystemNames[
                type as keyof typeof compostingSystemNames
                ]
              }
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;

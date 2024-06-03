/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomHeader from "@/components/CustomHeader";
import SectionTitle from "@/components/SectionTitle";

const Page = () => {
  return (
    <main className="flex flex-col overflow-x-hidden min-h-[100vh] gap-10  items-center ">
      <CustomHeader
        backgroundImage="/images/cultures-hors-sol.png"
        title="Cultures Hors Sol"
        paragraph="Systéme Hydroponique | Mur Végétal | Bac à Potager"
        prestationHeader
      />

      {/* Section 1 */}
      <div className="flex flex-col gap-4 sm:gap-10 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <div className="flex flex-col gap-4">
          <SectionTitle
            title="Systéme Hydroponique"
            subtitle="Cultures Hors Sol"
            align="start"
          />
          <p className="text-grey font-medium text-justify">
            La culture hydroponique est une culture hors-sol ; les plantes sont
            cultivées sous serre Pour ce faire, la terre qui est habituellement
            utilisée est remplacée par un substrat stérile, à l'instar des
            billes d'argile ou de la laine de roche C'est au cultivateur même de
            faire en sorte que ce substrat contient les nutriments nécessaires
            pour réaliser une bonne culture L'eau devient alors indispensable
            pour obtenir une récolte, comme la solution nutritive à verser sur
            les racines Les différents types des systèmes hydroponiques :{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="relative flex flex-col gap-4 justify-center items-center rounded-3xl overflow-hidden">
            <img
              src="/images/cultures-hors-sol-1.png"
              alt="Systéme Hydroponique"
              className="object-cover h-full "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 "></div>
            <span className="absolute bottom-5 font-bold text-xl xl:text-2xl text-white text-center truncate">
              Système Hydroponique Table
            </span>
          </div>
          <div className="relative flex flex-col gap-4 justify-center items-center rounded-3xl overflow-hidden">
            <img
              src="/images/cultures-hors-sol-2.png"
              alt="Systéme Hydroponique"
              className="object-cover h-full "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 "></div>
            <span className="absolute bottom-5 font-bold text-xl xl:text-2xl text-white text-center truncate">
              Système Hydroponique Étagère
            </span>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full flex items-center justify-center bg-light py-10">
        <div className="flex flex-col gap-4 sm:gap-10 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
          <div className="flex flex-col gap-4">
            <SectionTitle
              title="Mur Végétal"
              subtitle="Cultures Hors Sol"
              align="start"
            />
            <p className="text-grey font-medium text-justify">
              Un mur végétal, également connu sous le nom de jardin vertical ou
              mur végétalisé, est un agencement architectural innovant où des
              plantes sont cultivées verticalement sur une structure fixe . Le
              mur végétal peut être installé à l'intérieur ou à l'extérieur des
              bâtiments, apportant des avantages tels que l'amélioration de la
              qualité de l'air, l'isolation thermique, la décoration esthétique
              et la contribution à la biodiversité urbaine.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className=" flex flex-col gap-4 justify-center items-center rounded-3xl overflow-hidden">
              <img
                src="/images/cultures-hors-sol-3.png"
                alt="Systéme Hydroponique"
                className="object-cover h-full "
              />
            </div>
            <div className=" flex flex-col gap-4 justify-center items-center rounded-3xl overflow-hidden">
              <img
                src="/images/cultures-hors-sol-4.png"
                alt="Systéme Hydroponique"
                className="object-cover h-full "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col gap-4 sm:gap-10 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <div className="flex flex-col gap-4">
          <SectionTitle
            title="Bac à Potager"
            subtitle="Cultures Hors Sol"
            align="start"
          />
          <p className="text-grey font-medium text-justify">
            C’est une structure réceptacle spécifiquement conçue pour la culture
            de plantes comestibles, adaptée aux espaces restreints ou urbains.
            Ce récipient, généralement rectangulaire et souvent en bois, en
            plastique ou en métal,contient un substrat de culture dans lequel
            les plantes sont cultivées :
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="relative flex flex-col gap-4 justify-center items-center rounded-3xl overflow-hidden">
            <img
              src="/images/cultures-hors-sol-5.png"
              alt="Systéme Hydroponique"
              className="object-cover h-full "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 "></div>
            <span className="absolute bottom-5 font-bold text-xl xl:text-2xl text-white text-center truncate">
              Bac à Potager à Fond
            </span>
          </div>
          <div className="relative flex flex-col gap-4 justify-center items-center rounded-3xl overflow-hidden">
            <img
              src="/images/cultures-hors-sol-6.png"
              alt="Systéme Hydroponique"
              className="object-cover h-full "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 "></div>
            <span className="absolute bottom-5 font-bold text-xl xl:text-2xl text-white text-center truncate">
              Bac à Potager à Support
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;

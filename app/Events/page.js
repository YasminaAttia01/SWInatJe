import React from "react";
import Link from "next/link";
import PartnersSection from "../components/PartnersSection";
import HeroSection from "../components/HeroSection";

const EventsPage = () => {
  const image = '/images/DSC_5549.jpg';
  return (
    <div>
      <div className="relative flex w-full flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center gap-20 px-32 py-20">
        <div className="absolute w-full inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        

        <div className="relative flex flex-col items-center justify-center w-full mt-20 lg:mt-0 px-20">

      <div className="flex flex-col gap-8 z-10 mt-[25rem] mb-8">
          <h1 className="text-white font-bold text-5xl lg:text-5xl text-center">
            Nos Evénements <span className="text-yellow-500"></span> 
            <br /> 
            <br />
          </h1>
        </div> </div>


        
      </div>

      <div className="bg-white p-20">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start">
      <div className="lg:col-span-2">
        <h3 className="f1c420-text" style={{ fontSize: '30px', textAlign: 'left' }}>
          Forum de l’emplois et des stages
        </h3>
        <br />
        <p className="text-gray-600 mb-4 leading-8 text-lg">
          La 11e édition de l'événement phare annuel orchestré par l'INAT Junior entreprise promet une expérience exceptionnelle lors du Forum de l'emploi et des stages, qui a eu lieu le 29 novembre 2023, où un salon d'exposition a offert aux entreprises la possibilité de mettre en avant leurs activités et services devant un public d'étudiants en pleine formation en ingénierie agronomes. Cet événement a été agrémenté de conférences sous forme de panels, centrées sur la thématique: 'Regards croisés - Anticiper pour une gestion durable des ressources naturelles'. L’événement a eu un très grand succès dans l’écosystème agricole ou nous avons accueillit plus que 36 stands.
        </p>
      </div>
      <div className="lg:col-span-1 flex items-start justify-end">
        <div style={{ width: '800px', height: '300px', overflow: 'hidden' }}>
          <img 
            src="/images/DSC_5378.jpg" 
            alt="Event photo" 
            className="w-full h-full object-cover shadow-md" 
          />
        </div>
      </div>
    </div>
  </div>
</div>






      <main className="overflow-hidden">
        <div className="min-h-screen bg-hero bg-cover bg-no-repeat bg-center bg-white flex flex-col items-center justify-center gap-10 md:gap-20 py-20">
          <h1 className="text-5xl md:text-8xl font-bold text-white text-center"></h1>
          <hr className="border-t-4 border-white w-1/4 pb-8" />
        </div>
        <PartnersSection />
      </main>
    </div>
  );
};

export default EventsPage;

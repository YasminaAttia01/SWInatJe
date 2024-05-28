import React from "react";
import Link from "next/link";

const SysComposteurPage = () => {
  const image = '/images/pallet-compost-bins-2.jpg.jpg';
  return (
    <div>
      <div className="relative flex w-full flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center gap-20 px-32 py-20">
        <div className="absolute w-full inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full mt-10 lg:mt-0 px-20">
          <div className="flex flex-col gap-8 z-10 mt-[15rem] mb-8">
            <h1 className="text-yellow-500 font-bold text-5xl lg:text-5xl text-center ">
            Le Système Composteur             </h1>
            <p className="text-white text-center">En Palette | En Polyéthylène | Rotatif</p>
            <div className="flex items-center justify-center w-full ">
          <Link href="/devis">
            <div className="flex items-center justify-center bg-yellow-500 bg-opacity-90 rounded-2xl drop-shadow-lg px-14 lg:px-10 py-4 hover:scale-105 app_transition select-none cursor-pointer">
              <span className="font-extrabold text-2xl lg:text-xl text-white truncate">
              Lançons un projet ensemble
              </span>
            </div>
          </Link>
        </div>
          </div>
        </div>
      </div>


      <div className="bg-white p-20">
      
        
        <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center py-4 gap-7">
      <div className="w-1/4 bg-yellow-500 h-0.5"></div>
        <h2 className="text-3xl font-bold underline" style={{ fontFamily: 'Typo Grotesk', color:'#DAA520' }}>Le Compostage</h2>
        <div className="w-1/4 bg-yellow-500 h-0.5"></div>
      </div>
        <p className="text-black mb-4 leading-10 text-lg bg-custom text-center py-4" >
      Le compostage en conteneur se réfère à la pratique de décomposer des matières organiques biodégradables à l'intérieur d'un récipient spécialement conçu, généralement hermétique, afin de créer un environnement contrôlé pour le processus de décomposition aérobie.
        </p>


        <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="flex flex-col items-center text-center">
      <img 
        src="/images/syscom.jpg" 
        alt="Système composteur en palette" 
        className="w-full h-96 object-cover rounded-lg shadow-md" 
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-700">
        Système composteur en palette
      </h3>
    </div>

    <div className="flex flex-col items-center text-center">
      <img 
        src="/images/sysPoly.jpg" 
        alt="Système composteur en polyéthylène" 
        className="w-full h-96 object-cover rounded-lg shadow-md"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-700">
        Système composteur en polyéthylène
      </h3>
    </div>

    <div className="flex flex-col items-center text-center">
      <img 
        src="/images/composteur.jpg" 
        alt="Composteur rotatif" 
        className="w-full h-96 object-cover rounded-lg shadow-md"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-700">
        Composteur rotatif
      </h3>
    </div>
  </div>
</div>

</div>

      <main className="overflow-hidden">
      </main>
    </div>
    </div>
    
  );
};

export default SysComposteurPage;

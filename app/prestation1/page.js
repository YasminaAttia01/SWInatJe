import React from "react";
import Link from "next/link";
import Image from "next/image";

const Prestation1 = () => {
  return (
    <>
      <div className="relative flex w-full flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center gap-20 px-32 py-40 ">
        <div className="absolute w-full inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(images/prestation1.jpg)` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        

        <div className="flex flex-col lg:items-center justify-center gap-8 z-10 mt-[20rem] mb-1  items-center w-full mt-20 lg:mt-10 py-20 ">
          <h1 className="text-white text-yellow-500 font-extrabold text-5xl lg:text-5xl text-center">
          Cultures hors sol
          </h1>
          <p className="text-xl text-white mt-2">Système Hydroponique | Mur végétal | Bac à palanger</p>
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
     
     

      <div className="z-10 w-full text-center p-10 bg-white">
      <div className="flex items-center justify-center py-4 gap-7">
      <div className="w-1/4 bg-yellow-500 h-0.5"></div>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Typo Grotesk', color:'#DAA520' }}>Système Hydroponique</h2>
        <div className="w-1/4 bg-yellow-500 h-0.5"></div>
      </div>
        <p className="text-gray-600 mt-5 px-10 pb-5">
          La culture hydroponique est une culture hors-sol; les plantes sont cultivées sous serre. Pour ce faire, la terre qui est habituellement utilisée est remplacée par un substrat stérile, à l'instar des billes d'argile ou de la laine de roche. C'est au cultivateur même de faire en sorte que ce substrat contient les nutriments nécessaires pour réaliser une bonne culture. L'eau devient alors indispensable pour obtenir une récolte, comme la solution nutritive à verser sur les racines. Les différents types des systèmes hydroponiques :
        </p>
        <div className="mt-6 grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center ">
            <Image src="/images/service1.jpg" alt="Système hydroponique table" layout="responsive" width={400} height={250} className="rounded-lg "/>
            <h3 className="font-semibold mt-2" style={{ color:'#DAA520' }}>Système hydroponique table</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/pres11.png" alt="Système hydroponique étagère " layout="responsive" width={400} height={250} className="rounded-lg "/>
            <h3 className="font-semibold mt-2" style={{ color:'#DAA520' }}>Système hydroponique étagère</h3>
          </div>
        </div>
      </div>





      <div className="z-10 w-full text-center p-10 bg-yellow-50">
      <div className="flex items-center justify-center py-4 gap-7">
      <div className="w-1/4 bg-yellow-500 h-0.5"></div>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Typo Grotesk', color:'#DAA520' }}>Mur végétal</h2>
        <div className="w-1/4 bg-yellow-500 h-0.5"></div>
      </div>
        <p className="text-gray-600 mt-5 px-10 pb-5">
        Un mur végétal, également connu sous le nom de jardin vertical ou mur végétalisé, est un agencement architectural innovant où des plantes sont cultivées verticalement sur une structure fixe . Le mur végétal peut être installé à l'intérieur ou à l'extérieur des bâtiments, apportant des avantages tels que l'amélioration de la qualité de l'air, l'isolation thermique, la décoration esthétique et la contribution à la biodiversité urbaine.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center ">
            <Image src="/images/pres22.png" alt="Système hydroponique table" layout="responsive" width={400} height={250} className="rounded-lg "/>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/pres222.png" alt="Système hydroponique étagère " layout="responsive" width={400} height={250} className="rounded-lg "/>
          </div>
        </div>
      </div>



      <div className="z-10 w-full text-center p-10 bg-white">
      <div className="flex items-center justify-center py-4 gap-7">
      <div className="w-1/4 bg-yellow-500 h-0.5"></div>
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Typo Grotesk', color:'#DAA520' }}>Bac à potager</h2>
        <div className="w-1/4 bg-yellow-500 h-0.5"></div>
      </div>
        <p className="text-gray-600 mt-5 px-10 pb-5">
        C’est une structure réceptacle spécifiquement conçue pour la culture de plantes comestibles, adaptée aux espaces restreints ou urbains.
Ce récipient, généralement rectangulaire et souvent en bois, en plastique ou en métal,contient un substrat de culture dans lequel les plantes sont cultivées :
        </p>
        <div className="mt-6 grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center ">
            <Image src="/images/pres33.png" alt="Système hydroponique table" layout="responsive" width={400} height={250} className="rounded-lg "/>
            <h3 className="font-semibold mt-2" style={{ color:'#DAA520' }}>Bac à potager à fond</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/pres333.png" alt="Système hydroponique étagère " layout="responsive" width={400} height={250} className="rounded-lg "/>
            <h3 className="font-semibold mt-2" style={{ color:'#DAA520' }}>Bac à potager à support</h3>
          </div>
        </div>
      </div>
</>
  );
};

export default Prestation1;

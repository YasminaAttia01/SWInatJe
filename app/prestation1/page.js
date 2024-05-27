import React from "react";
import Link from "next/link";
import Image from "next/image";

const Prestation1 = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full text-center p-10 bg-green-600 text-white">
        <h1 className="text-4xl font-bold">Cultures hors sol</h1>
        <p className="text-xl mt-2">Système Hydroponique | Mur végétal | Bac à palanger</p>
        <div className="mt-4">
          <Link href="/projects" legacyBehavior>
            <a className="bg-white text-green-600 font-bold py-2 px-4 rounded hover:bg-gray-200">
              Lançons un projet ensemble
            </a>
          </Link>
          <Link href="/learn-more" legacyBehavior>
            <a className="ml-4 text-sm underline">
              En savoir plus
            </a>
          </Link>
        </div>
        <Image src="/path/to/hero-image.jpg" alt="Hero Image" layout="fill" objectFit="cover" className="opacity-50"/>
      </div>

      {/* Systeme Hydroponique Section */}
      <div className="p-10">
        <h2 className="text-3xl font-bold text-gray-800">Système Hydroponique</h2>
        <p className="text-gray-600 mt-4">
          La culture hydroponique est une culture hors-sol ; les plantes sont cultivées sous serre.
          Pour ce faire, la terre qui est habituellement utilisée est remplacée par un substrat stérile, à l'instar des billes d'argile ou de la laine de roche.
          C'est au cultivateur même de faire en sorte que ce substrat contient les nutriments nécessaires pour réaliser une bonne culture.
          L'eau devient alors indispensable pour obtenir une récolte, comme la solution nutritive à verser sur les racines.
          Les différents types des systèmes hydroponiques :
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <Image src="/path/to/hydroponic-table.jpg" alt="Système hydroponique table" width={400} height={250} className="rounded-lg"/>
            <h3 className="font-semibold mt-2">Système hydroponique table</h3>
          </div>
          <div>
            <Image src="/path/to/hydroponic-shelves.jpg" alt="Système hydroponique étagère" width={400} height={250} className="rounded-lg"/>
            <h3 className="font-semibold mt-2">Système hydroponique étagère</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prestation1;

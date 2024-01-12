import React from "react";

import Link from "next/link";

const HeroSection = () => {
  return (
    <main className="flex min-h-[110vh] w-full flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center gap-20 px-32 bg-hero bg-cover bg-no-repeat bg-center  bg-primary">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-8">
          <h1 className="text-white font-bold text-6xl lg:text-7xl text-center lg:text-start">
            Melkart Junior
            <br /> Entreprise
          </h1>
          <h2 className="text-white font-semibold text-2xl lg:text-4xl text-center lg:text-start">
            Making IT happen
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <Link href="/devis">
          <div className="flex items-center justify-center bg-white bg-opacity-50 rounded-full drop-shadow-lg px-16 lg:px-16 py-4 hover:scale-105 app_transition select-none cursor-pointer">
            <span className="font-extrabold text-2xl lg:text-4xl text-white truncate">
              Demander <br />
              un devis ici
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HeroSection;

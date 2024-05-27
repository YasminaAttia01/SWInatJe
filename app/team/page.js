import React from "react";
import Link from "next/link";
import PartnersSection from "../components/PartnersSection";
const EquipePage = () => {
  

  return (
    <main className="overflow-hidden">
      <div className="min-h-screen bg-hero bg-cover bg-no-repeat bg-center  bg-white flex flex-col items-center justify-center gap-10 md:gap-20 py-20 ">
        <h1 className=" text-5xl md:text-8xl font-bold text-white text-center">
          Notre Équipe
        </h1>
        <hr className="border-t-4 border-white w-1/4 pb-8" />
      </div>
      <PartnersSection />
      
    </main>
  );
};

export default EquipePage;










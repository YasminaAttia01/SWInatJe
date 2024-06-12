"use client";
import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "./SectionTitle";
import Chiffres from "@/models/Chiffres";

const NumbersSection = () => {
  const [chiffres, setChiffres] = useState<Chiffres>({
    _id: "",
    projetsLivres: "50",
    collaborateurs: "45",
    EditionForum: "11",
    TauxStatisfaction: "80",
    TauxEmployabilite: "100",
    ActionsRSE: "20",
  });

  useEffect(() => {
    const fetchChiffres = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/chiffres/all`
        );
        if (res.data[0]) {
          setChiffres(res.data[0]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };
    fetchChiffres();
  }, []);

  return (
    <section className="flex flex-row items-center justify-center bg-light py-16 px-10 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto gap-10">
        <div className="flex flex-col gap-8 mx-auto ">
          <SectionTitle
            subtitle="Nos Chiffres"
            title="INAT Junior<br/> Entreprise<br/>  en Chiffres"
            align="start"
          />
          <p className="text-grey leading-8 font-medium text-balance max-w-96">
            Découvrez les indicateurs essentiels de l&apos;INAT Junior
            Entreprise, témoignant de notre croissance, de notre engagement et
            de notre détermination.
          </p>
          <CustomButton
            label="Demander un Devis"
            type="link"
            href="/demander-devis"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-7xl sm:text-8xl font-bold text-primary">
                {chiffres.projetsLivres}+
              </h1>
              <p className="text-black  font-bold text-start">
                Nombre de <br />
                Projets livrés
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-7xl sm:text-8xl font-bold text-primary">
                {chiffres.collaborateurs}+
              </h1>
              <p className="text-black  font-bold text-start">
                Nombre de <br />
                collaborateurs
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-7xl sm:text-8xl font-bold text-primary">
                {chiffres.EditionForum}
              </h1>
              <p className="text-black  font-bold text-start">
                Nombre d&apos;éditions
                <br /> du forum
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-7xl sm:text-8xl font-bold text-primary">
                {chiffres.TauxStatisfaction}%
              </h1>
              <p className="text-black  font-bold text-start">
                Taux de
                <br /> satisfaction
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-7xl sm:text-8xl font-bold text-primary">
                {chiffres.ActionsRSE}+
              </h1>
              <p className="text-black  font-bold text-start">
                Actions
                <br /> RSE
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-7xl sm:text-8xl font-bold text-primary">
                {chiffres.TauxEmployabilite}%
              </h1>
              <p className="text-black  font-bold text-start">
                Taux
                <br /> Employabilité
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

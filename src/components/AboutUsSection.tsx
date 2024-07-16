/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Covered_By_Your_Grace } from "next/font/google";
import CustomButton from "./CustomButton";
import SectionTitle from "./SectionTitle";

const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const AboutUsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-14 w-8/12 py-20">
      <div className="flex flex-col  gap-8 ">
        <SectionTitle
          subtitle="A Propos Nous"
          title="Explorons Notre Identité"
          align="start"
        />

        <p className="text-grey font-medium max-w-96 text-justify">
          Il s&apos;agit d&apos;une association à vocation non lucrative qui est
          établie au sein de l&apos;Institut National Agronomique de Tunisie
          (INAT) depuis 2012 et qui opère sous la supervision de la
          Confédération Tunisienne des Juniors Entreprises (JET). Notre
          association fonctionne sous la direction conjointe d&apos;étudiants
          encadrés à la fois par des ingénieurs de l&apos;INAT et par
          d&apos;anciens membres de l&apos;INAT Junior Entreprise, garantissant
          ainsi une gestion équilibrée et experte.
        </p>
        <CustomButton
          href="/demander-devis"
          label="Demander un Devis"
          type="link"
        />
      </div>
      <div className="hidden w-full sm:flex flex-row gap-4">
        <div className="flex w-full flex-col gap-4">
          <div
            className="h-[270px] w-full rounded-bl-3xl overflow-hidden bg-black "
            style={{
              backgroundImage: "url('/images/aboutus-1.jpg')",
              backgroundSize: "cover",
            }}
          />


        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;

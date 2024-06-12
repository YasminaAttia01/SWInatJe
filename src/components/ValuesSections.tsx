/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Covered_By_Your_Grace } from "next/font/google";
import CustomButton from "./CustomButton";
import SectionTitle from "./SectionTitle";

const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const values = [
  {
    label: "Confidentialité",
    icon: "icons/secure-shield.png",
  },
  {
    label: "Engagement",
    icon: "icons/handshake.png",
  },
  {
    label: "Innovation",
    icon: "icons/innovation.png",
  },
  {
    label: "Diversité",
    icon: "icons/diversity.png",
  },
  {
    label: "Professionnalisme",
    icon: "icons/medal.png",
  },
  {
    label: "Responsabilité",
    icon: "icons/social-responsibility.png",
  },
];

const ValuesSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-10 mx-auto py-20">
      <div className="relative z-[1] rounded-2xl hidden xl:flex w-4/12">
        <div className="absolute z-[2] rounded-full -left-40 top-20 bg-primary h-96 w-96" />
        <div className="h-full z-[3] rounded-3xl overflow-hidden">
          <img
            src="/images/values.jpg"
            alt="values"
            className="h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <SectionTitle
          subtitle="Nos Valeurs"
          title="Ce Que Nous <br/> Croyons"
          align="start"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="min-w-fit flex flex-col items-center gap-4 bg-primary rounded-xl py-8"
            >
              <img src={value.icon} alt={value.label} className="w-20" />
              <h3 className="text-white font-bold text-lg">{value.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

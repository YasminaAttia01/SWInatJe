import React from "react";
import CustomHeader from "@/components/CustomHeader";
import { Covered_By_Your_Grace } from "next/font/google";

const cards = [
  {
    title: "Étude Marché",
    paragraph: `C’est une analyse méthodique des caractéristiques, tendances et besoins d'un marché donné pour éclairer les décisions commerciales.`,
    image: "/images/etudes-1.jpg",
  },
  {
    title: "Étude Technico-Économique",
    paragraph: `C’est une investigation approfondie des aspects techniques et opérationnels d'un projet, visant à déterminer sa faisabilité technique et élaborer des plans concrets pour sa réalisation.`,
    image: "/images/etudes-2.jpg",
  },
  {
    title: "Étude de Faisabilité",
    paragraph: `Il s’agit d’une évaluation méthodique des effets potentiels, positifs et négatifs, d'une action ou d'un projet agricole.`,
    image: "/images/etudes-3.jpg",
  },
];

const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <main className="flex flex-col overflow-x-hidden  gap-10  items-center ">
      <CustomHeader
        backgroundImage="/images/etudes.png"
        title="Les Études"
        paragraph="Étude Marché | Étude Technico-Économique | Étude de Faisabilité"
        prestationHeader
      />

      <div className="w-8/12 grid grid-cols-1 xl:grid-cols-3 gap-8 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col min-w-fit px-4 lg:px-12 py-6 gap-4 text-center lg:text-start text-white rounded-xl relative overflow-hidden cursor-pointer "
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/80  group-hover:bg-primary/80 " />

            <h2
              className={`${covered_By_Your_Grace.className} text-3xl relative group-hover:text-white`}
            >
              {card.title}
            </h2>
            <p
              className="min-w-[260px] leading-8 font-medium w-full relative z-10"
              dangerouslySetInnerHTML={{ __html: card.paragraph }}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;

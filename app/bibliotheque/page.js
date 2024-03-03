import Head from 'next/head';

export default function Bibliothèque() {
  
  const data = [
    {
      title: "Etats Financiers Melkart 2022-2023",
      description:
        "Ce document représente les états financiers arrétés au 31/05/2023",
      image: "/images/etatfinanciers.jpg",
      lien:"/pdfs/ETATS-FINANCIERS-MELKART-22-23.pdf"
    },
    {
      title: "Politique Qualité",
      description: "Ce document représente la politique qualité",
      image: "/images/politiqueQualite.jpg",
      lien:"/pdfs/MJE23_POL_Qu_01.pdf"
    },
    
    
  ];

  return (
    <main className="pt-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 items-center justify-center text-white py-20 text-center ">
          <h1 className="font-bold text-5xl">Bibliothèque</h1>
          <p className="font-light text-xl">
            
          </p>
        </div>
        <div className="bg-white min-h-screen py-20 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-start gap-12">
          {data.map((item, index) => (
            <a href={item.lien} key={index} target="_blank" rel="noopener noreferrer">
            <div
              className="rounded-lg border-2 border-primary flex flex-col sm:flex-row container mx-auto p-4 sm:p-8 gap-8 items-start hover:scale-[1.01] app_transition"
            >
              <div className="bg-white flex items-center gap-8">
                <div className="w-full sm:w-1/3 overflow-hidden rounded-lg mb-4 sm:mb-0">
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                </div>
                <div className="w-full sm:w-2/3 gap-4">
                  <h1 className="font-bold text-3xl text-primary mb-3 sm:mb-4">{item.title}</h1>
                  <p className="text-lg text-secondary">{item.description}</p>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

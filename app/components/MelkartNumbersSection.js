import Link from "next/link";


const MelkartNumbersSection = () => {
  const melkartNumbers = [
    {
      number: "50+",
      title: "Projets Livrés",
    },
    {
      number: "45+",
      title: "Collaborateurs",
    },
    {
      number: "11",
      title: "Éditions du forum",
    },
    {
      number: "80%",
      title: "Taux de satisfaction",
    },
    {
      number: "20+",
      title: "Actions RSE",
    },
    {
      number: "100%",
      title: "Taux Employabilité",
    },
  ];

  return (
    <div className="w-full bg-yellow-50 flex flex-row items-center justify-center py-20 px-40">
      <div className="flex flex-col items-start justify-start text-start">
         <h3 className="f1c420-text" style={{ fontSize: '25px', textAlign: 'left' }}>
        Chiffres
      </h3>
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
        INAT Junior Entreprise en Chiffres
      </h1>
      <p className="text-gray-600 mt-4 mb-5 max-w-2xl">
        Découvrez les indicateurs essentiels de notre Junior Entreprise, témoignant de notre croissance, de notre engagement et de notre détermination.
      </p>
      <div className="flex items-center justify-start w-full ">
      <Link href="/devis">
            <div className="flex items-center justify-center bg-yellow-500 bg-opacity-90 rounded-xl drop-shadow-lg  px-3 sm:px-4 py-1 sm:py-2 hover:scale-105 app_transition select-none cursor-pointer">
              <span className=" text-md sm:text-md  text-white truncate">
                Demander un devis
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 px-5">
        {melkartNumbers.map((value, index) => (
          <div key={index} className="flex flex-row items-center p-4 gap-1">
            <h4 className="text-5xl lg:text-6xl font-bold text-yellow-500">
              {value.number}
            </h4>
            <span className="text-md lg:text-lg text-black font-semibold mt-2 text-center">
              {value.title}
            </span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MelkartNumbersSection;

const MelkartNumbersSection = () => {
  const melkartNumbers = [
    {
      icon: "/icons/projets.svg",
      number: "+30",
      title: "Projets",
    },
    {
      icon: "/icons/satisfaction.svg",
      number: "+80%",
      title: "Satisfaction",
    },
    {
      icon: "/icons/sponsors.svg",
      number: "+50",
      title: "Sponsors",
    },
    {
      icon: "/icons/melkartiens.svg",
      number: "+60",
      title: "Melkartiens",
    },
  ];
  return (
    <div className="w-full bg-white flex items-center justfiy-center flex-col gap-10 md:gap-20 py-20 shadow-2xl">
      <h1 className="text-5xl lg:text-7xl font-bold text-primary text-center">
        La Melkart En Chiffres
      </h1>
      <div className="flex flex-wrap justify-center gap-y-10">
        {melkartNumbers.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-1/4 min-w-[320px] justify-center`}
          >
            <div className=" drop-shadow-xl h-36 w-36 flex items-center justify-center">
              <img src={value.icon} alt={value.title} />
            </div>
            <h4 className="text-primary text-center mt-4 font-bold text-6xl">
              {value.number}
            </h4>
            <span className="text-primary text-center font-bold text-3xl">
              {value.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MelkartNumbersSection;

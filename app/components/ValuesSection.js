const ValuesSection = () => {
  const values = [
    {
      icon: "/icons/respect.svg",
      title: "Respect",
    },
    {
      icon: "/icons/professionnalisme.svg",
      title: "Professionnalisme",
    },
    {
      icon: "/icons/responsabilité.svg",
      title: "Responsabilité",
    },
    {
      icon: "/icons/engagement.svg",
      title: "Engagement",
    },
    {
      icon: "/icons/integrité.svg",
      title: "Intégrité",
    },
  ];
  return (
    <div className="w-full bg-primary flex items-center justfiy-center flex-col gap-10 md:gap-20 py-20 shadow-2xl">
      <h1 className="text-5xl lg:text-7xl font-bold text-white text-center">
        Nos Valeurs
      </h1>
      <div className="flex flex-wrap justify-center gap-y-10">
        {values.map((value, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-1/3 min-w-[320px] justify-center`}
          >
            <div className="bg-primary rounded-full border-2 border-tertiary drop-shadow-xl h-36 w-36 flex items-center justify-center">
              <img src={value.icon} alt={value.title} />
            </div>
            <span className="text-white text-center mt-4 font-bold text-3xl">
              {value.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;

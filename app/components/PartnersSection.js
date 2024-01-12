const PartnersSection = () => {
  const partners = [
    "images/partners/Asset1.png",
    "images/partners/Asset2.png",
    "images/partners/Asset3.png",
    "images/partners/Asset4.png",
    "images/partners/Asset5.png",
    "images/partners/Asset6.png",
    "images/partners/Asset7.png",
    "images/partners/Asset8.png",
    "images/partners/Asset9.png",
    "images/partners/Asset10.png",
    "images/partners/Asset11.png",
  ];
  return (
    <div className="w-full bg-primary flex items-center justfiy-center flex-col gap-10 md:gap-20 py-20 shadow-2xl">
      <h1 className="text-5xl lg:text-7xl font-bold text-white text-center">
        Nos Partenaires
      </h1>
      <div className="flex flex-wrap  items-center justify-center gap-8">
        {partners.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={image} alt={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;

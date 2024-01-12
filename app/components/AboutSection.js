const AboutSection = () => {
  const gallery_images = [
    "/images/gallery_image3.png",
    "/images/gallery_image2.png",
    "/images/gallery_image1.png",
  ];
  return (
    <div className="w-full bg-white flex flex-col justify-start items-center py-14 overflow-x-hidden">
      <h1 className="text-5xl lg:text-7xl font-bold text-primary text-center">
        Qui Sommes nous ?
      </h1>
      <hr className="border-t-4 border-primary w-1/3 my-6" />
      <p className="w-4/5 md:w-3/5 text-lg md:text-3xl italic text-secondary text-center  ">
        Melkart Junior Entreprise est la junior entreprise de l’école nationale
        d’ingénieurs de Carthage fondée en 2012, gérée par des étudiants et qui
        fonctionne sur le modèle d’une entreprise estudiantine. Elle permet aux
        étudiants d’acquérir une expérience professionnelle pendant leur cursus
        à travers la réalisation de prestations de service pour des clients
        externes.
      </p>
      <div className="mt-8   flex gap-10 overflow-y-hidden h-[30vh] md:h-[50vh] carousel">
        {gallery_images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery-image${index}`}
            className="w-auto h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
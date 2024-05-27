import Image from "next/image";

const ValuesSection = () => {
  const values = [
    {
      icon: "/icons/confidentialite.png",
      title: "Confidentialité",
    },
    {
      icon: "/icons/engagement.png",
      title: "Engagement",
    },
    {
      icon: "/icons/innovation.png",
      title: "Innovation",
    },
    {
      icon: "/icons/diversite.png",
      title: "Diversité",
    },
    {
      icon: "/icons/professionnalisme.png",
      title: "Professionnalisme",
    },
    {
      icon: "/icons/responsabilite.png",
      title: "Responsabilité",
    },
    
    
  ];

  return (
    <div className="flex w-full bg-white items-center justify-center py-20 px-10 shadow-xl">
    {/* Left Section with Image */}
    <div className="flex-1 flex justify-center items-center">
      <div className="relative max-w-lg">
        <div className="absolute -left-24 top-0 w-72 h-72 bg-yellow-500 rounded-full filter z-[0]"></div>
        <Image src="/images/hero_background.jpg" alt="Group Photo" width={400} height={400} layout="responsive" className="relative z-10 rounded-lg shadow-lg" />
      </div>
    </div>

    {/* Right Section with Values */}
    <div className="flex-1 flex flex-col items-start">
    <h3 className="f1c420-text" style={{ fontSize: '25px', textAlign: 'left' }}>
        Nos Valeurs
      </h3>
      <h2 className="text-4xl font-extrabold mb-4 ">Explorons Nos Valeurs</h2>
      <div className="grid grid-cols-3 gap-4">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-yellow-500 rounded-lg shadow-md w-40 h-50">
            <Image src={value.icon} alt={value.title} width={64} height={64} className="mb-2"/>
            <span className="text-white font-semibold text-sm">{value.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default ValuesSection;

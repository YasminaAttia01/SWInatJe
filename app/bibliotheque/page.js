import Head from 'next/head';

export default function Bibliothèque() {

  const data = [
    {
      title: "Charte RSE Client",
      description: "Mandat 2023-2024",
      image: "/images/charte.jpg",
      lien: "/pdfs/CharteRSEClient.pdf",
      smallTitle: "30/12/2023"
    },
    {
      title: "Charte RSE Membre",
      description: "Mandat 2023-2024",
      image: "/images/charte.jpg",
      lien: "/pdfs/CharteRSEmembres.pdf",
      smallTitle: "30/12/2023"
    },
    {
      title: "Politique Qualite",
      description: "Mandat 2023-2024",
      image: "/images/politique.jpg",
      lien: "/pdfs/Politiquequalité.pdf",
      smallTitle: "23/02/2024"
    },
    {
      title: "Politique RSE",
      description: "Mandat 2023-2024",
      image: "/images/RSE.jpg",
      lien: "/pdfs/PolitiqueRSE.pdf",
      smallTitle: "21-05-2023"
    },
    {
      title: "INAT Magazine",
      description: "Mandat 2023-2024",
      image: "/images/alumni2.png",
      lien: "/pdfs/MagazineINATJE.pdf",
      smallTitle: "2023-2024"
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-custom">
       <div className="relative flex w-full flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center gap-20 px-32 py-20">
        <div className="absolute w-full inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(/images/ch3ir.png)` }}>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full mt-10 lg:mt-0 px-20">
          <div className="flex flex-col gap-8 z-10 mt-[5rem] mb-8">
            <h1 className="text-white font-bold text-5xl lg:text-5xl text-center">
              Bibliothèque
            </h1>
           
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-24 py-12 justify-center">
        {data.map((item, index) => (
          <a href={item.lien} key={index} target="_blank" rel="noopener noreferrer">
            <div className="relative bg-custom rounded-lg border-2 p-8 hover:shadow-xl app_transition w-full max-w-lg" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
              <div className="absolute bottom-4 left-4 bg-primary text-white p-2 rounded">
                <p>{item.smallTitle}</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <h1 className="font-bold text-3xl text-primary mb-2">{item.title}</h1>
              <p className="text-lg text-secondary">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

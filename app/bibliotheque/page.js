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
    }
  ];

  return (
    <main className="min-h-screen pt-20 overflow-hidden bg-white">
      <div className="min-h-[40vh] bg-agro bg-no-repeat bg-center flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-bold text-white text-center">Bibliothèques</h1>
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

import Head from 'next/head';

export default function Bibliothèque() {
  // Supposons que vous avez un tableau de données pour chaque cadre
  const data = [
    {
      title: "Dossier de Partenariat Mandat 2023-2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod bibendum. Curabitur id justo ut libero tristique tincidunt. Fusce consectetur augue ac dolor dignissim, vel lacinia ligula tincidunt. Sed ac mauris sit amet nunc malesuada fermentum. In hac habitasse platea dictumst. Integer in sapien vel justo pharetra ultrices. Quisque vitae vestibulum libero. Nullam euismod orci id cursus pharetra. Etiam id libero ac elit cursus tincidunt.",
      image: "/images/document.png",
    },
    {
      title: "Dossier de Partenariat Mandat 2023-2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod bibendum. Curabitur id justo ut libero tristique tincidunt. Fusce consectetur augue ac dolor dignissim, vel lacinia ligula tincidunt. Sed ac mauris sit amet nunc malesuada fermentum. In hac habitasse platea dictumst. Integer in sapien vel justo pharetra ultrices. Quisque vitae vestibulum libero. Nullam euismod orci id cursus pharetra. Etiam id libero ac elit cursus tincidunt.",
      image: "/images/document.png",
    },
    {
      title: "Dossier de Partenariat Mandat 2023-2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod bibendum. Curabitur id justo ut libero tristique tincidunt. Fusce consectetur augue ac dolor dignissim, vel lacinia ligula tincidunt. Sed ac mauris sit amet nunc malesuada fermentum. In hac habitasse platea dictumst. Integer in sapien vel justo pharetra ultrices. Quisque vitae vestibulum libero. Nullam euismod orci id cursus pharetra. Etiam id libero ac elit cursus tincidunt.",
      image: "/images/document.png",
    },
    // Ajoutez d'autres objets de données ici
  ];

  return (
    <main className="pt-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 items-center justify-center text-white py-20 text-center ">
          <h1 className="font-bold text-5xl">Bibliothèque</h1>
          <p className="font-light text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum euismod bibendum. Curabitur id justo ut
            libero tristique tincidunt !
          </p>
        </div>
        <div className="bg-white min-h-screen py-20 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-start gap-12">
          {data.map((item, index) => (
            <div
              key={index}
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
          ))}
        </div>
      </div>
    </main>
  );
}

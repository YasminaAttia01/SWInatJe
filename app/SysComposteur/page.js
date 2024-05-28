import React from "react";

const SysComposteurPage = () => {
  const image = '/images/pallet-compost-bins-2.jpg.jpg';
  return (
    <div>
      <div className="relative flex w-full flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center gap-20 px-32 py-20">
        <div className="absolute w-full inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full mt-10 lg:mt-0 px-20">
          <div className="flex flex-col gap-8 z-10 mt-[20rem] mb-8">
            <h1 className="text-yellow-500 font-bold text-5xl lg:text-5xl text-center underline">
            Le système composteur             </h1>
            <p className="text-white">en palette | en polyéthylène |  rotatif</p>
          </div>
        </div>
      </div>


      <div className="bg-white p-20">
      
        
        <div className="max-w-7xl mx-auto">
        <p className="text-black mb-4 leading-10 text-lg bg-custom" >
      Le compostage en conteneur se réfère à la pratique de décomposer des matières organiques biodégradables à l'intérieur d'un récipient spécialement conçu, généralement hermétique, afin de créer un environnement contrôlé pour le processus de décomposition aérobie.


              </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start">
            <div className="lg:col-span-2 bg-custom py-8 px-6 rounded-lg">
              <h3 className="f1c420-text underline" style={{ fontSize: '30px', textAlign: 'left' }}>
              Système composteur en palette              
              </h3>
              <br />
              
            </div>
            <div className="lg:col-span-1 flex items-start justify-end">
              <div style={{ width: '400px', height: '400px', overflow: 'hidden', borderRadius: '10px' }}>
                <img 
                  src="/images/syscom.jpg" 
                  alt="Event photo" 
                  className="w-full h-full object-cover shadow-md" 
                />
              </div>
            </div>
          </div>
          <hr className="my-10 border-t border-gray-300" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start">
          <div className="lg:col-span-2 bg-custom py-8 px-6 rounded-lg">
              <h3 className="f1c420-text underline" style={{ fontSize: '30px', textAlign: 'left' }}>
              Système composteur en polyéthylène               
              </h3>
              <br />
            </div>
            <div className="lg:col-span-1 flex items-start justify-end">
              <div style={{ width: '800px', height: '400px', overflow: 'hidden', borderRadius: '10px' }}>
                <img 
                  src="/images/sysPoly.jpg" 
                  alt="Event photo" 
                  className="w-full h-full object-cover shadow-md" 
                />
                <img 
                  src="/images/sysP2.jpg" 
                  alt="Event photo" 
                  className="w-full h-full object-cover shadow-md" 
                />
              </div>
            </div>
            
          </div>
          <hr className="my-10 border-t border-gray-300" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start">
            <div className="lg:col-span-2 bg-custom py-8 px-6 rounded-lg">
              <h3 className="f1c420-text underline" style={{ fontSize: '30px', textAlign: 'left' }}>
              Composteur rotatif               
              </h3>
              <br />
            </div>
            <div className="lg:col-span-1 flex items-start justify-end">
              <div style={{ width: '400px', height: '400px', overflow: 'hidden', borderRadius: '10px' }}>
                <img 
                  src="/images/rotat1.jpg" 
                  alt="Event photo" 
                  className="w-full h-full object-cover shadow-md" 
                />
                
              </div>
              <div className="lg:col-span-1 flex items-start justify-end">
              <div style={{ width: '800px', height: '400px', overflow: 'hidden', borderRadius: '10px' }}>
                <img 
                  src="/images/sysPoly.jpg" 
                  alt="Event photo" 
                  className="w-full h-full object-cover shadow-md" 
                />
                <img 
                  src="/images/sysP2.jpg" 
                  alt="Event photo" 
                  className="w-full h-full object-cover shadow-md" 
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <main className="overflow-hidden">
      </main>
    </div>
  );
};

export default SysComposteurPage;

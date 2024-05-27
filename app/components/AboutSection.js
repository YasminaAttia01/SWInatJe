"use client"
import Link from "next/link";


const AboutSection = () => {
 

  return (
    <div className="bg-white p-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 items-start">
        <div className="lg:col-span-1">
        <h3 className="f1c420-text" style={{ fontSize: '25px', textAlign: 'left' }}>
        A Propos Nous
      </h3>
          <h1 className="text-4xl font-extrabold mb-4">Explorons Notre Identité</h1>
          <p className="text-gray-600 mb-4 px-2 leading-[25.6px]">
            Il s'agit d'une association à vocation non lucrative qui est établie au sein de l'Institut National
            Agronomique de Tunisie (INAT) depuis 2012 et qui opère sous la supervision de la Confédération
            Tunisienne des Juniors Entreprises (CJET). Notre association fonctionne sous la direction conjointe
            d'étudiants encadrés à la fois par des ingénieurs de l'INAT et par d'anciens membres de l'INAT Junior
            Entreprise, garantissant ainsi une gestion équilibrée et experte.
          </p>
          <div className="flex items-center justify-start w-full ">
          <Link href="/devis">
            <div className="flex items-center justify-center bg-yellow-500 bg-opacity-90 rounded-xl drop-shadow-lg  px-3 sm:px-4 py-1 sm:py-2 hover:scale-105 app_transition select-none cursor-pointer">
              <span className=" text-sm sm:text-sm  text-white truncate">
                Demander un devis
              </span>
            </div>
          </Link>
        </div>
        </div>
        <div className="flex flex-row lg:col-span-2 items-start py-5">
  <div className="flex flex-col space-y-4 mr-4 w-1/2"> 
    <img src="/images/hero_background22.jpg" alt="Group photo" className=" shadow-md w-full object-cover aspect-auto" style={{ borderRadius:'20px  0 0 0'}} />
    <img src="/images/hero_background33.jpg" alt="Outdoor group" className=" shadow-md w-full object-cover aspect-auto" style={{ borderRadius:'0 0 0 20px'}} />
  </div>
  <img src="/images/hero_background44.jpg" alt="Event photo" className=" shadow-md w-1/2  h-full object-cover "  style={{ borderRadius:'0 20px 20px 0'}} />
</div>

</div>
    </div>
  </div>
   
  )}
export default AboutSection;

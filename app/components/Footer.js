import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-[40vh] flex flex-col items-center justify-center gap-5 overflow-x-hidden" style={{ backgroundColor: "#211902" }}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full px-4">
      {/* Partie gauche avec le logo */}
      <div className="max-w-[408px] w-full md:w-1/4 ml-3 mt-5">
          <img src="/logo/Logo 1.png" className="object-contain h-34" />
        </div>

        {/* Partie centrale avec les réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full md:w-1/4 md:ml-2">
          <p className="text-white text-left mb-2 text-sm">
            Cabinet de conseil spécialisé dans le domaine de l'agronomie. 
            <p>Depuis 2012.</p>
          </p>
          <div className="flex items-center justify-start gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/inat-junior-entreprise/"
            >
              <img src="/icons/linkedin.svg" className="h-5 md:h-7" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/inat_junior_entreprise/"
            >
              <img src="/icons/instagram.svg" className="h-5 md:h-7" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/INAT.Junior.Entreprise"
            >
              <img src="/icons/facebook.svg" className="h-5 md:h-7" />
            </a>
          </div>
        </div>


       {/* Partie "Explore" avec les liens */}
       <div className="flex flex-col items-start justify-center gap-2 w-full md:w-1/4 md:ml-14 md:mr-2 md:mt-6">
          <h3 className="text-white font-bold mb-1 rounded-full">Explore</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-2"></div>
          <div className="flex items-center gap-2">
            <img src="/logo/feuille.png" className="h-4 w-4" alt="Icon" />
            <a href="/prestations" className="text-white hover:text-gray-300 text-sm">Prestations</a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/logo/feuille.png" className="h-4 w-4" alt="Icon" />
            <a href="/evenements" className="text-white hover:text-gray-300 text-sm">Événements</a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/logo/feuille.png" className="h-4 w-4" alt="Icon" />
            <a href="/articles" className="text-white hover:text-gray-300 text-sm">Articles</a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/logo/feuille.png" className="h-4 w-4" alt="Icon" />
            <a href="/bibliotheque" className="text-white hover:text-gray-300 text-sm">Bibliothèque</a>
          </div>
        </div>

       {/* Partie droite avec les informations de contact */}
       <div className="flex flex-col items-start justify-center gap-2 w-full md:w-1/4 md:ml-5 md:mr-24 md:mt-4">
          <h3 className="text-white font-bold mb-1">Contact</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-2 rounded-full"></div>
          <div className="flex items-center gap-2 mb-1">
  <img src="/logo/tel.png" className="h-4 w-4" alt="Phone Icon" />
  <a href="tel:+21653471630" className="text-white text-sm">
  +216 53 471 630 | +216 55 414 262
  </a>
</div>
          <div className="flex items-center gap-2 mb-1">
  <img src="/logo/mail.png" className="h-4 w-4" alt="Email Icon" />
  <a href="mailto:contact1.inatje@gmail.com" className="text-white text-sm">
    contact1.inatje@gmail.com
  </a>
</div>
          <div className="flex items-center gap-2 mb-1">
            <img src="/logo/loc.png" className="h-5 w-5" alt="Location Icon" />
            <span className="text-white text-sm">
              Cité Mahrajen, Manzah1 INAT Tunis
            </span>
          </div>
        </div>
      </div>

      <span className="text-white text-center pb-4 text-sm">
        &copy; All Copyright 2024 INAT JE
      </span>
    </footer>
  );
};

export default Footer;

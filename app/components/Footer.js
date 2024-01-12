import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="min-h-[40vh] bg-secondary flex flex-col items-center justify-center gap-10 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center  ">
        <div className="max-w-[408px] w-full">
          <img src="/logo/logo_white.png" className="object-contain" />
        </div>
        <div className="flex flex-col px-4 md:px-0 items-center md:items-start justify-center gap-8">
          <Link target="_blank" href="tel:+21629619677">
            <div className="flex items-center  gap-2 md:gap-4">
              <img src="/icons/phone.svg" className="h-6 md:h-10" />
              <span className="text-white lg:text-2xl ">
                +216 29 619 677 | +216 92 631 204
              </span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="mailto:enicarthage.junior.entreprise@gmail.com"
          >
            <div className="flex items-center  gap-2 md:gap-4">
              <img src="/icons/mail.svg" className="h-6 md:h-10" />
              <span className="text-white lg:text-2xl ">
                enicarthage.junior.entreprise@gmail.com
              </span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/National+Engineering+School+of+Carthage/@36.851767,10.2085734,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd34d69e694547:0xe1e0376f3637688f!8m2!3d36.851767!4d10.2111483!16s%2Fg%2F1218dkmv?entry=ttu"
          >
            <div className="flex items-center  gap-2 md:gap-4">
              <img src="/icons/map.svg" className="h-6 md:h-10" />
              <span className="text-white lg:text-2xl ">
                45 Rue des Entrepreneurs 2035 Charguia II , 2035
              </span>
            </div>
          </Link>
          <div className="flex items-center  justify-center gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/melkart-je/?originalSubdomain=tn"
            >
              <img src="/icons/linkedin.svg" className="h-8 md:h-10" />
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/melkart_je/?hl=en"
            >
              <img src="/icons/instagram.svg" className="h-8 md:h-10" />
            </Link>

            <Link
              target="_blank"
              href="https://www.facebook.com/Enicarthage.Junior.Entreprise/?locale=fr_FR"
            >
              <img src="/icons/facebook.svg" className="h-8 md:h-10" />
            </Link>
          </div>
        </div>
      </div>
      <span className="text-white text-center pb-4">
        &copy; Copyright 2023 Melkart Junior Entreprise All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;

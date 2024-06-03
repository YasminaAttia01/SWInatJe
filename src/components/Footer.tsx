/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/company/inat-junior-entreprise/",
  },
  {
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/inat_junior_entreprise/",
  },
  {
    icon: "/icons/facebook.svg",
    link: "https://www.facebook.com/INAT.Junior.Entreprise",
  },
];

const links = [
  {
    label: "Demander un Devis",
    link: "/demander-devis",
  },
  {
    label: "Événements",
    link: "/evenements",
  },
  {
    label: "Bibliothèque",
    link: "/bibliotheque",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

const contact = [
  {
    label: "53 471 630 / 55 414 262",
    link: "tel:+21653471630",
    icon: "/icons/phone.svg",
  },
  {
    label: "contact1.inatje@gmail.com",
    link: "mailto:contact1.inatje@gmail.com",
    icon: "/icons/mail.svg",
  },
  {
    label: "Cité Mahrajen, Manzah1 INAT Tunis",
    link: "https://maps.app.goo.gl/vik8TZN9LFkL6nfy9",
    icon: "/icons/location.svg",
  },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-brown mt-12">
      {/* Lower Footer */}
      <div className="min-w-8/12 min-h-[40vh] flex flex-col lg:flex-row gap-10 lg:items-center lg:justify-between py-16 ">
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <div className="w-52 h-full">
            <img
              src="/logos/main.png"
              alt="logo"
              className="w-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-gray-300 text-left font-medium max-w-72 ">
              Cabinet de conseil spécialisé dans le domaine de l&apos;agronomie.
              <br />
              Depuis 2012.
            </p>
            <div className="flex items-start justify-start gap-4">
              {socialLinks.map((socialLink, index) => (
                <Link
                  key={index}
                  href={socialLink.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer p-4 bg-[#342802] rounded-full hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                >
                  <img src={socialLink.icon} alt="social" className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 lg:gap-40 items-start">
          <div className="flex flex-col  gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-bold rounded-full">Explore</h3>
              <div className="flex flex-row items-center gap-1">
                <div className="w-8 h-1 bg-yellow-500 rounded-full" />
                <div className="w-1 h-1 bg-yellow-500 rounded-full" />
              </div>
            </div>

            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src="/icons/leaf.svg" className="h-4 w-4" alt="Icon" />
                <Link
                  href={link.link}
                  className="text-gray-300   hover:text-primary text-sm"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-bold rounded-full">Contact</h3>
              <div className="flex flex-row items-center gap-1">
                <div className="w-12 h-1 bg-yellow-500 rounded-full" />
                <div className="w-1 h-1 bg-yellow-500 rounded-full" />
              </div>
            </div>

            {contact.map((contact, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={contact.icon} className="h-4 w-4" alt="Icon" />
                <Link
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-primary text-sm"
                >
                  {contact.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-brown-secondary w-full h-16 flex items-center justify-center text-grey font-semibold text-sm text-center">
        <span> &copy; All Copyright 2024 INAT JE</span>
      </div>
    </footer>
  );
};

export default Footer;

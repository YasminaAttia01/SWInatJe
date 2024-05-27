'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [showPrestationsList, setShowPrestationsList] = useState(false);
  const prestationsRef = useRef(null);

  useEffect(() => {
    // Handler to call on outside click
    function handleClickOutside(event) {
      if (prestationsRef.current && !prestationsRef.current.contains(event.target)) {
        setShowPrestationsList(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prestationsRef]);

  const navigationLinks = [
    { title: "Accueil", route: "/" },
    {
      title: "Nos Prestations",
      route: "#",
      prestations: [
        { name: "Cultures hors sol", route: "/prestation1" },
        { name: "Les études", route: "/prestation2" },
        { name: "le Systeme composteur", route: "/prestation3" }
      ],
    },
    { title: "Nos Evénements", route: "/Events" },
    { title: "Bibliothèque", route: "/bibliotheque" },
    { title: "Demander un devis", route: "/devis" },
    { title: "Contact", route: "/contact" },
  ];

  return (
    <nav className="w-full h-20 flex justify-between items-center text-black fixed z-[50] px-8 py-4 bg-custom bg-opacity-50 shadow-lg text-sm">
      <div className="flex h-20 justify-start items-center">
        <Link href="/" legacyBehavior>
          <a><img src="/logo/logo1.png" alt="INAT Logo" className="h-auto w-24" /></a>
        </Link>
      </div>

      <ul className="hidden lg:flex lg:justify-center lg:items-center lg:list-none">
        {navigationLinks.map((item) => (
          <li
            className="cursor-pointer mx-5 text-yellow-500 text-lg hover:text-secondary font-medium select-none relative"
            key={item.title}
            ref={item.title === "Nos Prestations" ? prestationsRef : null}
            onClick={() => item.prestations ? setShowPrestationsList(!showPrestationsList) : null}
          >
            <Link href={item.route} legacyBehavior>
              <a>{item.title}</a>
            </Link>
            {item.prestations && showPrestationsList && (
              <ul className="absolute top-20 left-0 bg-yellow-300 bg-opacity-20 w-40 mt-1 list-none p-2 rounded-lg">
                {item.prestations.map((prestation) => (
                  <li key={prestation.name} className="text-white hover:text-black">
                    <Link href={prestation.route} legacyBehavior>
                      <a>{prestation.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="lg:hidden flex items-center relative">
        <Menu
          onClick={() => setToggle(true)}
          className="w-[35px] h-[35px] text-white cursor-pointer"
        />
        {toggle && (
          <div className="fixed z-[5] w-full h-screen flex justify-end items-end bg-primary bg-opacity-90 backdrop-blur-sm px-4 py-4 pb-16 right-0 inset-y-0">
            <X
              className="w-[35px] h-[35px] text-white cursor-pointer"
              onClick={() => setToggle(false)}
            />
            <ul className="w-full flex flex-col m-0 p-0 list-none">
              {navigationLinks.map((item) => (
                <li className="m-4" key={item.title}>
                  <Link href={item.route} legacyBehavior>
                    <a className="text-white text-lg hover:text-secondary select-none" onClick={() => setToggle(false)}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

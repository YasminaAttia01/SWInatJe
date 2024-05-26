"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [showPrestationsList, setShowPrestationsList] = useState(false);

  const handleMouseEnter = () => {
    setShowPrestationsList(true);
  };

  const handleMouseLeave = () => {
    setShowPrestationsList(false);
  };

  const navigationLinks = [
    { title: "Accueil", route: "/" },
    {
      title: "Nos Prestations",
      route: "#",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      prestations: ["Prestation 1", "Prestation 2", "Prestation 3"],
    },
    { title: "Nos Événements", route: "/events" },
    { title: "Articles", route: "/inat-academy" },
    { title: "Bibliothèque", route: "/bibliotheque" },
    { title: "Demander un devis", route: "/devis" },
    { title: "Contact", route: "/contact" },
  ];

  return (
    <nav className="w-full h-20 flex justify-between items-center fixed z-[50] px-8 py-4 bg-transparent shadow-lg text-sm">
      <div className="flex h-20 justify-start items-center ">
        <Link href="/">
          <img
            src="/logo/logo 1.png"
            alt="MJE Logo"
            className="h-auto w-24 "
          />
        </Link>
      </div>

      <ul className="flex lg:hidden justify-center items-center list-none relative">
        {navigationLinks.map((item) => (
          <li
            className="cursor-pointer mx-5 app_transition text-white flex-col text-lg app_transition hover:text-secondary font-medium select-none relative"
            key={`link-${item.title}`}
            onMouseEnter={item.onMouseEnter}
            onMouseLeave={item.onMouseLeave}
          >
            <Link href={`${item.route}`}>{item.title}</Link>
            {item.title === "Nos Prestations" && showPrestationsList && (
              <ul className="absolute top-0 left-0 bg-yellow-300 bg-opacity-20 w-40 mt-2 list-none p-2 rounded-lg">
                {item.prestations.map((prestation, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-white hover:text-black"
                  >
                    {prestation}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex items-center relative">
        <ul className="flex justify-center items-center list-none">
          {navigationLinks.map((item) => (
            <li
              className="cursor-pointer mx-5 app_transition text-white flex-col text-lg app_transition hover:text-secondary font-medium select-none relative"
              key={`link-${item.title}`}
              onMouseEnter={item.onMouseEnter}
              onMouseLeave={item.onMouseLeave}
            >
              <Link href={`${item.route}`}>{item.title}</Link>
              {item.title === "Nos Prestations" && showPrestationsList && (
                <ul className="absolute top-0 left-0 bg-yellow-300 bg-opacity-20 w-40 mt-7 list-none p-2 rounded-lg">
                  {item.prestations.map((prestation, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-white hover:text-black"
                    >
                      {prestation}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <img
          src="/logo/Slogan.png"
          alt="Logo"
          className="h-auto w-24 ml-10"
        />
      </div>

      <div className="lg:hidden w-[35px] h-[35px] relative flex justify-center items-center ">
        {!toggle && (
          <Menu
            onClick={() => setToggle(true)}
            className="w-[100%] h-[100%] text-white"
          />
        )}

        {toggle && (
          <div className="lg:hidden  fixed z-[5] w-4/5  h-fit flex justify-end items-end flex-col bg-primary bg-opacity-90 backdrop-blur-sm px-4 py-4 pb-16 right-0 inset-y-0">
            <div className="w-[35px] h-[35px]  flex justify-center items-center rounded-full mx-4 my-2">
              <X
                className="w-[100%] h-[100%] text-white "
                onClick={() => setToggle(false)}
              />
            </div>

            <ul className="h-full w-full flex justify-start items-start flex-col m-0 p-0 list-none ">
              {navigationLinks.map((item) => (
                <li className="m-4" key={item.title}>
                  <a
                    className="text-white no-underline text-lg  app_transition hover:text-secondary select-none"
                    href={`${item.route}`}
                    onClick={() => {
                      setToggle(false);
                      item.onClick && item.onClick();
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigationLinks = [
    { title: "Accueil", route: "/" },
    { title: "Notre équipe", route: "/team" },
    { title: "Demander un devis", route: "/devis" },
    { title: "Bibliothèque", route: "/bibliotheque" },
    { title: "Contact", route: "/contact" },
  ];

  return (
    <nav className="w-full h-20 flex justify-between items-center fixed z-[50] px-8 py-4 bg-primary/90 bg-opacity-0 backdrop-blur-lg shadow-lg">
      <div className="flex h-20 justify-start items-center ">
        <Link href="/">
          <img
            src="/logo/logo_white.png"
            alt="MJE Logo"
            className="h-auto w-24 "
          />
        </Link>
      </div>
      <ul className="hidden lg:flex flex-1 justify-center items-center list-none">
        {navigationLinks.map((item) => (
          <li
            className=" cursor-pointer mx-5 app_transition text-white flex-col text-2xl app_transition hover:text-secondary font-medium select-none"
            key={`link-${item.title}`}
          >
            <Link href={`${item.route}`}>{item.title}</Link>
          </li>
        ))}
      </ul>

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
                    onClick={() => setToggle(false)}
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

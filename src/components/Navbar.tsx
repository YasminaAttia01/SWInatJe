/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPrestationsDropdown, setShowPrestationsDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowPrestationsDropdown(false);
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = useCallback(() => {
    setShowPrestationsDropdown((prev) => !prev);
  }, []);

  const navigationLinks = [
    { title: "Accueil", route: "/" },
    {
      title: "Nos Prestations",
      route: "#",
      dropdown: [
        { name: "Cultures Hors Sol", route: "/prestations/cultures-hors-sol" },
        { name: "Des Études", route: "/prestations/etudes" },
        {
          name: "Système Composteur",
          route: "/prestations/systeme-composteur",
        },
      ],
    },
    { title: "Nos Événements", route: "/evenements" },
    { title: "Bibliothèque", route: "/bibliotheque" },
    { title: "Demander un Devis", route: "/demander-devis" },
    { title: "Contact", route: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 px-8 py-4 flex h-20 transition-all duration-300 ease-in-out justify-between items-center ${
        isScrolled ? "bg-black bg-opacity-75 shadow-lg" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <img src="/logos/main.png" alt="INAT Logo" className="h-full w-24" />
      </Link>
      <div className="hidden lg:flex items-center space-x-10">
        {navigationLinks.map((link) => (
          <div className="relative" key={link.title}>
            {link.dropdown ? (
              <>
                <button
                  onClick={toggleDropdown}
                  className="text-white hover:text-yellow-500 font-medium app-transition truncate"
                  aria-haspopup="true"
                  aria-expanded={showPrestationsDropdown ? "true" : "false"}
                >
                  {link.title}
                </button>
                {showPrestationsDropdown && (
                  <ul
                    className="absolute bg-black text-white p-2 rounded-md shadow-lg mt-1 w-56"
                    ref={dropdownRef}
                  >
                    {link.dropdown.map((item) => (
                      <li key={item.name} className="hover:text-yellow-500 p-2">
                        <Link
                          onClick={() => setShowPrestationsDropdown(false)}
                          href={item.route}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={link.route}
                className="text-white hover:text-yellow-500 font-medium app-transition truncate"
              >
                {link.title}
              </Link>
            )}
          </div>
        ))}
      </div>
      <Link className="hidden lg:flex py-2" href="/">
        <img src="/logos/slogan.png" alt="INAT Slogan" className="h-24 p-2" />
      </Link>
      <Menu
        onClick={() => setToggle(!toggle)}
        className="text-white cursor-pointer lg:hidden"
        size={28}
      />
      {toggle && (
        <div className="fixed top-0 right-0 bg-primary rounded-l-xl w-fit pt-4 pb-8 lg:hidden h-fit flex flex-col items-end gap-4 text-black">
          <X
            onClick={() => setToggle(false)}
            className="text-light-bg cursor-pointer font-bold mr-4"
            size={42}
          />
          <div className="flex flex-col items-start justify-start  gap-2 ml-10 ">
            {navigationLinks.map((link) => (
              <div
                key={link.title}
                className="flex flex-col items-start w-full "
              >
                {link.dropdown ? (
                  <>
                    <Link
                      href={link.route}
                      className=" text-lg select-none py-2 bg-light-bg  w-full px-4 font-semibold rounded-l-xl mx-4  mb-2"
                    >
                      {link.title}
                    </Link>
                    <div className="flex flex-col gap-2 w-full">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.route}
                          className=" text-lg hover:text-yellow-500 select-none py-2 bg-light-bg  w-full px-4 font-semibold rounded-l-xl hover:translate-x-2"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.route}
                    className=" text-lg hover:text-yellow-500 select-none py-2 bg-light-bg  w-full px-4 font-semibold rounded-l-xl mx-4 hover:translate-x-2"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

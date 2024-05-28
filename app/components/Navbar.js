'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPrestationsDropdown, setShowPrestationsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Handler for clicking outside the dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowPrestationsDropdown(false);
      }
    }

    // Handler for scroll events
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      // Remove event listeners
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setShowPrestationsDropdown(prev => !prev);
  };

  const navigationLinks = [
    { title: "Accueil", route: "/" },
    { 
      title: "Nos Prestations", 
      route: "#", 
      dropdown: [
        { name: "Cultures hors sol", route: "/prestation1" },
        { name: "Des études de marché", route: "/prestation2" },
        { name: "Système composteur", route: "/prestation3" }
      ]
    },
    { title: "Nos Événements", route: "/events" },
    { title: "INAT Academy", route: "/academy" },
    { title: "Bibliothèque", route: "/bibliotheque" },
    { title: "Demander un Devis", route: "/devis" },
    { title: "Contact", route: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 px-8 py-1 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black bg-opacity-75 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a><img src="/logo/logo1.png" alt="INAT Logo" className="h-auto w-24" /></a>
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          {navigationLinks.map((link) => (
            <div className="relative" key={link.title}>
              {link.dropdown ? 
                (<button onClick={toggleDropdown} className="text-white hover:text-yellow-500 font-medium">
                  {link.title}
                </button>) : 
                (<Link href={link.route} legacyBehavior>
                  <a className="text-white hover:text-yellow-500 font-medium">{link.title}</a>
                </Link>)
              }
              {link.dropdown && showPrestationsDropdown && (
                <ul className="absolute bg-black text-white p-2 rounded-md shadow-lg mt-1 w-56" ref={dropdownRef}>
                  {link.dropdown.map((item) => (
                    <li key={item.name} className="hover:text-yellow-500 p-2 ">
                      <Link href={item.route} legacyBehavior>
                        <a>{item.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <Link href="/" legacyBehavior>
          <a><img src="/logo/Slogan.png" alt="INAT Logo" className="h-auto w-24" /></a>
        </Link>
        <Menu
          onClick={() => setToggle(!toggle)}
          className="text-white cursor-pointer lg:hidden"
        />
        {toggle && (
          <div className="fixed inset-0 bg-black bg-opacity-75 px-4 py-4 flex flex-col items-center lg:hidden">
            <X
              onClick={() => setToggle(false)}
              className="text-white cursor-pointer mb-4"
            />
            {navigationLinks.map((link) => (
              <Link key={link.title} href={link.route} legacyBehavior>
                <a className="text-white text-lg hover:text-yellow-500 select-none py-2" onClick={() => setToggle(false)}>
                  {link.title}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

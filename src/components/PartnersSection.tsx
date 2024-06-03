"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Covered_By_Your_Grace } from "next/font/google";
import axios from "axios";
import { motion } from "framer-motion";
import Partner from "@/models/Partner";

const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const PartnersSection = () => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/partners/all`
      );
      setPartners(res.data);
    };
    fetchPartners();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-12 py-20  overflow-hidden">
      <div className="flex flex-col gap-2 text-center">
        <h2
          className={`${covered_By_Your_Grace.className} text-primary text-2xl`}
        >
          Nos Collaborateurs
        </h2>
        <h1 className="text-black font-extrabold text-5xl">
          Qui Nous a fait <br />
          Confiance
        </h1>
      </div>
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex whitespace-nowrap w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <img
              key={`${partner._id}-${index}`}
              src={partner.logo}
              alt={partner.name}
              className="h-32 mr-6 shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;

/* eslint-disable @next/next/no-img-element */
"use client";
import CustomHeader from "@/components/CustomHeader";
import Document from "@/models/Document";

import axios from "axios";
import { Covered_By_Your_Grace } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
export const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  const [documents, setPartners] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/documents/all`
      );
      setPartners(res.data);
    };
    fetchDocuments();
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <main className="flex flex-col overflow-x-hidden min-h-[100vh] gap-10 items-center ">
      <CustomHeader title="Bibliothèque" />
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 grid sm:grid-cols-2 gap-10">
        {documents.map((document, index) => (
          <Link
            href={document.link}
            target="_blank"
            rel="noreferrer"
            key={`${document._id}-${index}`}
            className="flex flex-col gap-2 cursor-pointer app-transition "
          >
            <div
              className=" relative flex flex-col items-center justify-center rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url("/images/doc.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                width: "100%",
              }}
            >
              <div className="flex flex-col items center justify-center text-center text-white gap-2">
                <h2 className="text-4xl font-extrabold">{document.label}</h2>
                <h3 className=" text-2xl font-thin leading-8">
                  Mandat {document.mandate}
                </h3>
              </div>
              <div className="absolute px-4 py-2 rounded bg-primary bottom-4 left-4 text-white text-sm font-bold">
                {formatDate(document.createdAt)}
              </div>
            </div>
            <h2 className="text-3xl font-extrabold">{document.label}</h2>
            <p className="text-grey leading-8">{document.description}</p>
            <Link
              href={document.link}
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:underline mt-2"
            >
              En Savoir Plus
            </Link>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Page;

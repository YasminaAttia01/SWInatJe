/* eslint-disable @next/next/no-img-element */
"use client";
import CustomHeader from "@/components/CustomHeader";
import { Gallery } from "@/components/Gallery";
import SectionTitle from "@/components/SectionTitle";
import Document from "@/models/Document";
import Event from "@/models/Event";

import axios from "axios";
import { Covered_By_Your_Grace } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
export const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

interface ImageType {
  src: string;
  aspect_ratio: number;
}

const Page = () => {
  const [event, setEvent] = useState<Event>();
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/event/get`
      );
      const fetchedImages = res.data.images;

      const loadImage = (src: string): Promise<ImageType> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            const aspect_ratio = img.width / img.height;
            resolve({ src, aspect_ratio });
          };
          img.src = src;
        });
      };

      const transformImages = async () => {
        const imagePromises = fetchedImages.map((imageUrl: string) =>
          loadImage(imageUrl)
        );
        const transformedImages = await Promise.all(imagePromises);
        setImages(transformedImages);
      };

      setEvent(res.data);
      transformImages();
    };
    fetchDocuments();
  }, []);

  const widths = [500, 1000, 1600];
  const ratios = [2.2, 4, 6, 8];

  return (
    <main className="flex flex-col overflow-x-hidden min-h-[100vh] gap-10 items-center ">
      <CustomHeader title="Nos Événements" />
      <div className="flex flex-col gap-4 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <SectionTitle
          title={event?.title ?? "Forum d'Enreprises"}
          subtitle="Nos Événements"
          align="start"
        />

        <p className="text-grey font-medium text-justify ">
          {event?.description ?? "Découvrez nos événements"}
        </p>
      </div>
      <div className="w-full">
        <Gallery
          {...{ widths, ratios, images }}
          lastRowBehavior="match-previous"
        />
      </div>
    </main>
  );
};
export default Page;

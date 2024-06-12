/* eslint-disable @next/next/no-img-element */
"use client";
import CustomHeader from "@/components/CustomHeader";
import PartnersSection from "@/components/PartnersSection";
import SectionTitle from "@/components/SectionTitle";
import Event from "@/models/Event";

import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Page = () => {
  const [event, setEvent] = useState<Event>({
    _id: "",
    title: "Forum de l’emplois et des stages",
    description:
      "La 11e édition de l'événement phare annuel orchestré par l'INAT Junior entreprise promet une expérience exceptionnelle lors du Forum de l'emploi et des stages, qui a eu lieu le 29 novembre 2023, où un salon d'exposition a offert aux entreprises la possibilité de mettre en avant leurs activités et services devant un public d'étudiants en pleine formation en ingénierie agronomes. Cet événement a été agrémenté de conférences sous forme de panels, centrées sur la thématique: 'Regards croisés - Anticiper pour une gestion durable des ressources naturelles'. L’événement a eu un très grand succès dans l’écosystème agricole ou nous avons accueillit plus que 36 stands.",
    images: [],
  });

  useEffect(() => {
    const fetchDocuments = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/event/get`
      );

      setEvent(res.data);
    };
    fetchDocuments();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  if (!event) {
    return <div>Loading...</div>;
  }
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
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          autoPlay={true}
          className="min-w-full"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {event?.images.map((image, i) => (
            <div key={i}>
              <img
                src={image}
                alt=""
                className="object-cover w-full h-[400px]"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <PartnersSection />
    </main>
  );
};
export default Page;

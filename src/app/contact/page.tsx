"use client";
import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import CustomInput from "@/components/CustomInput";
import SectionTitle from "@/components/SectionTitle";
import axios from "axios";
import { Covered_By_Your_Grace } from "next/font/google";
import { useState } from "react";
import { toast } from "react-toastify";
const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});
const cards = [
  {
    title: "A Propos",
    value: `Cabinet de conseil spécialisé<br/> dans le domaine de<br/> l'agronomie.`,
  },
  {
    title: "Contact",
    value: `+216 53 471 630 <br/>
    +216 55 414 262 
    contact1.inatje@gmail.com`,
  },
  {
    title: "Adresse",
    value: "Cité Mahrajen,<br/> Manzah 1 INAT, Tunis<br/> Tunisie",
  },
];

export default function Page() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    text: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Simple validation
    const { fullname, email, text } = formData;
    if (!fullname.trim()) {
      toast.error("Nom et Prénom requis");
      return;
    }
    if (!email.trim()) {
      toast.error("Adresse Email requise");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Adresse Email invalide");
      return;
    }
    if (!text.trim()) {
      toast.error("Message requis");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/messages/add`,
        formData
      );
      console.log("Message sent successfully:", response.data);
      toast.success("Message envoyé avec succès");
      setFormData({
        fullname: "",
        email: "",
        text: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex flex-col overflow-x-hidden min-h-[100vh] gap-10 items-center">
      <CustomHeader title="Contactez Nous" />
      <div className="w-8/12 grid grid-cols-1 xl:grid-cols-3 gap-8 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col min-w-fit px-4 lg:px-12 py-6 gap-4 text-center lg:text-start bg-primary  text-white rounded-xl hover:bg-primary/70 transition"
          >
            <h2 className={`${covered_By_Your_Grace.className} text-3xl`}>
              {card.title}
            </h2>
            <p
              className="min-w-[260px] leading-8 font-medium w-full"
              dangerouslySetInnerHTML={{ __html: card.value }}
            />
          </div>
        ))}
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12  bg-light rounded-2xl overflow-hidden">
        <div className="flex flex-row gap-8">
          <div className="hidden lg:flex w-1/2 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12774.112163392347!2d10.1812369!3d36.8298279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd358856431033%3A0xe43d326eb4c692f1!2sINAT%20Junior%20Entreprise!5e0!3m2!1sen!2stn!4v1717348080077!5m2!1sen!2stn"
              width="800"
              height="600"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center p-8 gap-8 w-full"
          >
            <SectionTitle
              title="Écrire un message"
              subtitle="Contactez Nous"
              align="start"
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomInput
                  label="Nom et Prénom"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Adresse Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <CustomInput
                label="Message"
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                type="textarea"
                className="min-h-40"
              />
              <CustomButton
                label={loading ? "Envoi en cours..." : "Envoyer"}
                type="button"
                onclick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

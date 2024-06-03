"use client";
import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import CustomInput from "@/components/CustomInput";
import SectionTitle from "@/components/SectionTitle";
import axios from "axios";
import { Covered_By_Your_Grace } from "next/font/google";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { toast } from "react-toastify";
export const covered_By_Your_Grace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    fullname: "",
    birthdate: "",
    phone: "",
    gender: "",
    address: "",
    projectName: "",
    projectObjectifs: "",
    projectCompetitors: "",
    coordinates: "",
    features: "",
    target: "",
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
    console.log(formData);

    const { fullname, birthdate, phone, gender, address, projectName } =
      formData;
    if (!fullname.trim()) {
      toast.error("Nom et Prénom requis");
      return;
    }
    if (!birthdate.trim()) {
      toast.error("Date de naissance requise");
      return;
    }
    if (!phone.trim()) {
      toast.error("Numéro de téléphone requis");
      return;
    }
    if (!gender.trim()) {
      toast.error("Genre requis");
      return;
    }
    if (!address.trim()) {
      toast.error("Adresse requise");
      return;
    }
    if (!projectName.trim()) {
      toast.error("Nom du projet requis");
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/demandes/add`,
        formData
      );
      toast.success("Message envoyé avec succès");
      setFormData({
        fullname: "",
        birthdate: "",
        phone: "",
        gender: "",
        address: "",
        projectName: "",
        projectObjectifs: "",
        projectCompetitors: "",
        coordinates: "",
        features: "",
        target: "",
      });
      setActiveStep(1);
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex flex-col overflow-x-hidden min-h-[100vh] gap-10 items-center">
      <CustomHeader title="Demander un Devis" />

      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12  bg-light h-fit rounded-2xl overflow-hidden">
        <div className="flex flex-row gap-8">
          {activeStep === 0 ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center p-8 gap-8 w-full"
            >
              <SectionTitle
                title="Commencer un
              Nouveau Projet"
                subtitle="Nouveau Projet"
                align="start"
              />
              <span className="font-semibold text-xl">
                Détails personnels :
              </span>
              <div className="grid sm:grid-cols-3 flex-col gap-4">
                <CustomInput
                  label="Nom et Prénom *"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Date de naissance *"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  type="date"
                />
                <CustomInput
                  label="Numéro de téléphone *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="number"
                />
                <CustomInput
                  label="Genre *"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  type="select"
                />
                <CustomInput
                  label="Adresse *"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <span className="font-semibold text-xl">
                Informations sur le projet :
              </span>
              <div className="grid sm:grid-cols-3 flex-col gap-4">
                <CustomInput
                  label="Nom du projet *"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Objectifs du projet"
                  name="projectObjectifs"
                  value={formData.projectObjectifs}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Sites Web concurrents"
                  name="projectCompetitors"
                  value={formData.projectCompetitors}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Coordonnées"
                  name="coordinates"
                  value={formData.coordinates}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Caractéristiques et fonctionnalités"
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Public cible"
                  name="target"
                  value={formData.target}
                  onChange={handleInputChange}
                />
              </div>
              <CustomButton
                label={!loading ? "Suivant" : "Chargement..."}
                type="button"
                onclick={() => {}}
              />
            </form>
          ) : (
            <div className=" w-full flex flex-col items-center justify-center gap-20 p-10">
              <SectionTitle
                title="Réserver un rendez-vous"
                subtitle="Rendez-vous"
                align="center"
              />
              <InlineWidget url="https://calendly.com/nidhalchelhi" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

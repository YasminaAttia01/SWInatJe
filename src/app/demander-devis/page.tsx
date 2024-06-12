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
    dimensions: "",
    place: "",
    description: "",
    service: "",
    beginDate: "",
    endDate: "",
    formerImplication: "",
    howdidyouhearaboutus: "",
    extracomments: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (activeStep === 0) {
      const { fullname, birthdate, phone, gender, address, projectName } =
        formData;
      if (
        !fullname.trim() ||
        !birthdate.trim() ||
        !phone.trim() ||
        !gender.trim() ||
        !address.trim() ||
        !projectName.trim()
      ) {
        toast.error("Tous les champs marqués d'une * sont obligatoires.");
        return;
      }
      setActiveStep(1);
    } else if (activeStep === 1) {
      setLoading(true);
      try {
        await axios.post(
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
          dimensions: "",
          place: "",
          description: "",
          service: "",
          beginDate: "",
          endDate: "",
          formerImplication: "",
          howdidyouhearaboutus: "",
          extracomments: "",
        });
        setActiveStep(2);
      } catch (error) {
        toast.error("Erreur lors de l'envoi du message");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main className="flex flex-col overflow-x-hidden min-h-[100vh] gap-10 items-center">
      <CustomHeader title="Demander un Devis" />
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 bg-light h-fit rounded-2xl overflow-hidden">
        <div className="flex flex-row gap-8">
          {activeStep === 0 && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center p-8 gap-8 w-full"
            >
              <SectionTitle
                title="Commencer un Nouveau Projet"
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
                  options={[
                    { value: "homme", label: "Homme" },
                    { value: "femme", label: "Femme" },
                    { value: "autre", label: "Autre" },
                  ]}
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
                  type="select"
                  options={[
                    {
                      value: "Système Hydroponique",
                      label: "Système Hydroponique",
                    },
                    { value: "Mur Végétal", label: "Mur Végétal" },
                    { value: "Bac Potager", label: "Bac Potager" },
                    { value: "Sysème Composteur", label: "Sysème Composteur" },
                    { value: "Étude", label: "Étude" },
                  ]}
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
                type="submit"
              />
            </form>
          )}
          {activeStep === 1 && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center p-8 gap-8 w-full"
            >
              <SectionTitle
                title="Détails du projet"
                subtitle="Détails du projet"
                align="start"
              />
              <span className="font-semibold text-xl">
                Informations sur le Projet:
              </span>
              <div className="grid sm:grid-cols-2 flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <CustomInput
                    label="Dimensions demandés"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleInputChange}
                  />
                  <CustomInput
                    label="L'emplacement"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                  />
                </div>

                <CustomInput
                  label="Description du projet"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  type="textarea"
                  className="h-full"
                />
              </div>
              <span className="font-semibold text-xl">Services Demandés:</span>

              <div className="grid sm:grid-cols-3 flex-col gap-4">
                <CustomInput
                  label="Services dont vous avez besoin pour ce projet"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Date de début souhaitée"
                  name="beginDate"
                  value={formData.beginDate}
                  onChange={handleInputChange}
                  type="date"
                />
                <CustomInput
                  label="Date de réalisation souhaitée"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  type="date"
                />
                <CustomInput
                  label="Avez-vous été impliqué avec nous ?"
                  name="formerImplication"
                  value={formData.formerImplication}
                  onChange={handleInputChange}
                  type="select"
                  options={[
                    { value: "oui", label: "Oui" },
                    { value: "non", label: "Non" },
                  ]}
                />
                <CustomInput
                  label="Comment avez-vous entendu parler de nous ?"
                  name="howdidyouhearaboutus"
                  value={formData.howdidyouhearaboutus}
                  onChange={handleInputChange}
                />
                <CustomInput
                  label="Commentaires supplémentaires"
                  name="extracomments"
                  value={formData.extracomments}
                  onChange={handleInputChange}
                />
              </div>
              <CustomButton
                label={!loading ? "Confirmer" : "Chargement..."}
                type="submit"
              />
            </form>
          )}
          {activeStep === 2 && (
            <div className="w-full flex flex-col items-center justify-center gap-20 p-10">
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

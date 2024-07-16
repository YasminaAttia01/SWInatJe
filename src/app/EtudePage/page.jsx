"use client";
import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import CustomInput from "@/components/CustomInput";
import SectionTitle from "@/components/SectionTitle";
import axios from "axios";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { toast } from "react-toastify";

export default function EtudePage() {
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    fullname: "",
    birthdate: "",
    phone: "",
    gender: "",
    address: "",
    projectName: "Étude",
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
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeStep === 0) {
      const { fullname, birthdate, phone, gender, address } = formData;

      if (
        !fullname.trim() ||
        !birthdate.trim() ||
        !phone.trim() ||
        !gender.trim() ||
        !address.trim()
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
          projectName: "Étude", // Keep projectName as "Étude"
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
      <CustomHeader title="Demander un Devis pour Étude" />
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 bg-light h-fit rounded-2xl overflow-hidden">
        <div className="flex flex-row gap-8">
          {activeStep === 0 && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center p-8 gap-8 w-full"
            >
              <SectionTitle
                title="Commencer une Nouvelle Étude"
                subtitle="Nouvelle Étude"
                align="start"
              />
              

              <div className="grid sm:grid-cols-3 flex-col gap-4">
                
                <CustomInput
                  label="Type de l'etude *"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  type="select"
                  options={[
                    { value: "Etude de faisabilité", label: "faisabilité " },
                    { value: "Etude technico-economique", label: "technico-economique" },
                    { value: "Etude d'impact ", label: "impact" },
                    { value: "Etude de risques ", label: "risques" },
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
                Informations sur l'étude :
              </span>
              <div className="grid sm:grid-cols-3 flex-col gap-4">
                <CustomInput
                  label="Objectifs de l'étude"
                  name="projectObjectifs"
                  value={formData.projectObjectifs}
                  onChange={handleInputChange}
                />

                <CustomInput
                  label="Coordonnées"
                  name="coordinates"
                  value={formData.coordinates}
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
                label={!loading ? "Confirmer" : "Chargement..."}
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
                title="Détails de l'étude"
                subtitle="Détails de l'étude"
                align="start"
              />
              <span className="font-semibold text-xl">
                Informations sur l'étude :
              </span>
              <div className="grid sm:grid-cols-2 flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <CustomInput
                    label="Dimensions demandées"
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
                  label="Description de l'étude"
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
                  label="Services dont vous avez besoin pour cette étude"
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
              
            </form>
          )}
          {activeStep === 1 && (
            <div className="w-full flex flex-col items-center justify-center gap-20 p-10">
              <SectionTitle
                title="Réserver un rendez-vous"
                subtitle="Rendez-vous"
                align="center"
              />
              <InlineWidget url="https://calendly.com/etudes-inatjuniorentreprise" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

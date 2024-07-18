/**
 * @use client
 */
"use client"
import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import CustomInput from "@/components/CustomInput";
import SectionTitle from "@/components/SectionTitle";
import axios from "axios";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { toast } from "react-toastify";

const EtudePage = () => {
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

  const handleInputChange = (e) => {
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
        
     
      
        !gender.trim() ||
        !address.trim()
      ) {
        toast.error("Tous les champs marqués d&apos;une * sont obligatoires.");
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
          
          gender: "",
          address: "",
          projectName: "Étude",
          projectObjectifs: "",
         
          coordinates: "",
          target: "",
         
        });
        setActiveStep(2);
      } catch (error) {
        toast.error("Erreur lors de l&apos;envoi du message");
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
                  label="Type de l&apos;étude *"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  type="select"
                  options={[
                    { value: "Etude de faisabilité", label: "Faisabilité" },
                    { value: "Etude technico-économique", label: "Technico-économique" },
                    { value: "Etude d&apos;impact", label: "Impact" },
                    { value: "Etude de risques", label: "Risques" },
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
                Informations sur l&apos;étude :
              </span>
              <div className="grid sm:grid-cols-3 flex-col gap-4">
                <CustomInput
                  label="Objectifs de l&apos;étude"
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
};

export default EtudePage;

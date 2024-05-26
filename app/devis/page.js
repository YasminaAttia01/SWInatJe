"use client"
import React from "react";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import DevisForm1 from "../components/DevisForm1";
import DevisForm2 from "../components/DevisForm2";
import axios from "axios";
import { toast } from "react-toastify";

import { Form1Validation, Form2Validation } from "../../utils/validation";

const page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState([]);

  const [data, setData] = useState({
    fullname: "",
    birthdate: "",
    phone: "",
    gender: "",
    address: "",
    projectname: "",
    projectobjectives: "",
    competitorwebsites: "",
    contactinformation: "",
    featuresFunctionality: "",
    targetaudience: "",
    hostingAndDomain: "",
    seoAndMarketing: "",
    projectDescription: "",
    neededServices: "",
    startDate: "",
    completionDate: "",
    involved: "",
    howDidYouHearAboutUs: "",
    extraComments: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleNextClick = () => {
    if (activeTab === 0) {
      try {
        Form1Validation.parse(data);
        setActiveTab((prev) => prev + 1);
      } catch (error) {
        console.log("Validation error:", error.errors);
        toast.error("Merci de vérifier vos informations avant de procéder.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      Form2Validation.parse(data);
      try {
        const response = await axios.post(
          "http://localhost:3300/api/devis",
          data
        );

        if (response.status === 200) {
          console.log("Form submitted successfully");
          setActiveTab((prev) => prev + 1);
          scrollTo(0, 0);
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error during form submission:", error);
      }
    } catch (error) {
      console.log("Validation error:", error.errors);
      toast.error("Merci de vérifier vos informations avant de procéder.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const formSteps = [
    <DevisForm1 data={data} handleChange={handleChange} errors={errors} />,
    <DevisForm2 data={data} handleChange={handleChange} />,
  ];

  return (
    <main className=" min-h-screen pt-20 overflow-hidden">
       <div className="min-h-[40vh] bg-agro bg-no-repeat bg-center flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-bold text-white text-center">Demandez un Devis </h1>
      </div>

      <div className="flex flex-col gap-12 items-center justify-center text-tertiary py-20 text-center bg-white"> 
        <div className="flex flex-col gap-4">
          <p className="f1c420-text">
            Pour planifier une rencontre avec nous, discuter de vos besoins et obtenir un devis, vous pouvez remplir le formulaire ci-dessous!
          </p>
        </div>
        {activeTab === 0 || activeTab === 1 ? (
  <div className="container mx-auto max-w-screen-lg px-8 py-4 bg-custom rounded-2xl text-secondary"> 

            <div className="flex justify-between items-center">
              <p className="font-bold text-3xl custom-underline text-start">
                Commencer un <br />
                Nouveau Projet
              </p>
              <div className="min-w-[70px] max-w-[90px]">
        <img
          src="/logo/logo_main.png"
          className="object-contain object-center"
        />
      </div>
            </div>
            <div className="flex justify-center items-center">
      <div className="container mx-auto bg-custom">
        {formSteps[activeTab]}
      </div>
    </div>

    <div className="flex w-full gap-2 my-4">
      {activeTab === 0 ? null : (
        <button
          onClick={() => setActiveTab((prev) => prev - 1)}
          disabled={activeTab === 0 ? "disabled" : ""}
          className={`text-white py-2 px-8 text-xl rounded-lg bg-primary  app_transition ${
            activeTab === 0
              ? "opacity-50 bg-slate-600"
              : "opacity-100 hover:bg-tertiary"
          }`}
        >
          Précédent
        </button>
              )}

{activeTab === 0 ? (
        <button
          disabled={
            activeTab === formSteps.length - 1 ? "disabled" : ""
          }
          onClick={handleNextClick}
          className="text-white py-2 px-8 text-xl rounded-lg bg-primary hover:bg-tertiary app_transition "
        >
          Suivant
        </button>
      ) : null}


              {activeTab === formSteps.length - 1 ? (
        <button
          className="text-white py-2 px-8 text-xl rounded-lg bg-primary hover:bg-tertiary app_transition "
          onClick={handleSubmit}
        >
          Confirmer
        </button>
      ) : null}
            </div>
          </div>
        ) : (
          <div className="min-w-[40%]">
            <InlineWidget url="https://calendly.com/nidhalchelhi" />
          </div>
        )}
      </div>
    </main>
  );
};

export default page;

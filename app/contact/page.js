'use client';
import React, { useState }  from "react";
import Joi from "joi";
import axios from "axios";
import TimelineStepper from "../components/TimelineStepper";
import DevisInput from "../components/DevisInput";

const ContactPage = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    partenariat: "",
    message: "",
  });
  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FormData before submit:', formData);
    
    try {
      const response =await axios.post("http://localhost:3300/api/contact",formData) ; 
      if (response.status !== 200) {
        throw new Error('Request failed');
      }
      console.log('Data sent successfully');
      console.log('Data after confirmation:', response.data);
    } catch (error) {
      console.error('Error sending data: ', error.message);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  


  const InputField = ({ placeholder }) => {
    return (
      <input
        className="w-full bg-[#E8E5E5] color-[#656464] rounded-lg p-4 focus:outline-none  focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
    );
  };

  const TextareaField = ({ placeholder }) => {
    return (
      <textarea
        className="w-full bg-[#e8e5e5] rounded-lg p-4 focus:outline-none  focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
    );
  };
  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      <div className="flex flex-col gap-4 items-center justify-center text-white py-20 text-center ">
        <h1 className="font-bold text-5xl">Contactez-nous</h1>
        <p className="font-light text-xl ">
          Pour toutes demandes de partenariat, d’informations, vous pouvez
          remplir le formulaire !
        </p>
      </div>

      <div className="px-16 md:px-20 lg:px-24 xl:px-36 py-10 lg:py-20 bg-white flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full">
          <h2 className="text-primary font-semibold text-3xl mb-20">
            Quelle sera la prochaine étape?
          </h2>
          <TimelineStepper />
        </div>
        <form className="w-full flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
          <DevisInput label="Nom et Prénom" name="name" type="text" value={formData.name} onChange={handleChange} />
          <DevisInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange}/>
          <DevisInput label="Partenariat" name="partenariat" type="text" value={formData.partenariat} onChange={handleChange} />
          <DevisInput
            label="Entrez votre messsage "
            name="message"
            type="textarea"
            value={formData.message} onChange={handleChange}
          />

          <div className="flex w-full gap-2">
            <button
              type="submit"
              className="text-white py-2 px-8 text-xl rounded-lg bg-primary hover:bg-tertiary app_transition"
            >
              Confirmer
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-12">
        <h1 className="text-white bold text-center mb-10 font-bold text-5xl">
          Où nous-trouver ?
        </h1>

        <div className="w-full max-w-[600px] rounded-2xl overflow-hidden">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102163.62258070143!2d10.128747251822952!3d36.851738563646286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34d69e694547%3A0xe1e0376f3637688f!2sNational%20Engineering%20School%20of%20Carthage!5e0!3m2!1sen!2stn!4v1701266189207!5m2!1sen!2stn"
         width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        </div>
      </div>
    </main>
  );
};

export default ContactPage;


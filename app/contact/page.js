'use client';
import React, { useState } from "react";
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
      const response = await axios.post("http://localhost:3300/api/contact", formData);
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
        className="w-full bg-[#E8E5E5] color-[#656464] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
    );
  };

  const TextareaField = ({ placeholder }) => {
    return (
      <textarea
        className="w-full bg-[#e8e5e5] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
    );
  };
  
  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      <div className="min-h-[40vh] bg-agro bg-no-repeat bg-center flex flex-col items-center justify-center relative">
        <h1 className="text-5xl md:text-8xl font-bold text-white text-center">Contactez-nous</h1>
        {/* Three rectangles */}
        <div className="absolute bottom- left-0 right-0 flex justify-center">
          {[
            { color: "rgba(246, 210, 88, 0.8)", text: "Rectangle 1" },
            { color: "rgba(241, 196, 32, 0.8)", text: "Rectangle 2" },
            { color: "rgba(255, 255, 255, 0.8)", text: "Rectangle 3" }
          ].map((item, index) => (
            <div
              key={index}
              className="w-[399.98px] h-[220px] bg-white rounded-lg m-4 flex justify-center items-center"
              style={{ backgroundColor: item.color }}
            >
              <p className="text-white font-Covered-By-Your-Grace">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-16 md:px-20 lg:px-24 xl:px-36 py-10 lg:py-20 bg-white flex flex-col lg:flex-row items-center justify-center">
        <div className="container mx-auto max-w-screen-lg px-8 py-4 bg-custom rounded-2xl text-secondary"> 
          <div className="w-full">
            <h2 className="text-primary f1c420-text font-semibold text-3xl mb-20">
             Contactez-Nous 
            </h2>
            <h1 className="mb- text-5xl md:text-5xl font-bold"> Ecrire un message </h1>
          </div>
          <form className="w-full flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
            <DevisInput label="Nom et Prénom" name="name" type="text" value={formData.name} onChange={handleChange} />
            <DevisInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange}/>
            <DevisInput label="Partenariat" name="partenariat" type="text" value={formData.partenariat} onChange={handleChange} />
            <DevisInput
              label="Entrez votre message"
              name="message"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
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
      </div>
    
      <div className="w-full flex flex-col items-center justify-center py-12">
        <h1 className="text-white bold text-center mb-10 font-bold text-5xl">
          Où nous-trouver ?
        </h1>

        <div className="w-full max-w-[600px] rounded-2xl overflow-hidden">
          <iframe
            src="https://maps.app.goo.gl/uUV3aWPbxWCEVHFM6"
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

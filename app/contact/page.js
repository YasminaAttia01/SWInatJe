'use client'
import React, { useState } from "react";
import axios from "axios";

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

  return (
    <main className="min-h-screen pt-20 overflow-hidden">
      <div className="min-h-[40vh] bg-agro bg-no-repeat bg-center flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-8xl font-bold text-white text-center">Contactez-nous</h1>
      </div>

      {/* Added section for three rectangles */}
      <div className="flex justify-center py-8 bg-white">
        {[
          { color: "rgba(241, 196, 32, 1)", title: "A Propos ", text: "Cabinet de conseil spécialisé dans le domaine de l'agronomie." },
          { color: "rgba(241, 196, 32, 0.7)", title: "Contact", text:  "+216 53 471 630 , +216 55 414 262 , contact1.inatje@gmail.com" },
          { color: "rgba(241, 196, 32, 0.5)", title: "Adresse", text: "Cité Mahrajen, Manzah 1 INAT, Tunis Tunisie" }
        ].map((item, index) => (
          <div
            key={index}
            className="w-[300.98px] h-[200px] bg-white rounded-lg m-4 flex flex-col justify-center items-center p-4"
            style={{ backgroundColor: item.color }}
          >
            <h2 className="text-white font-Covered-By-Your-Grace text-2xl mb-2">{item.title}</h2>
            <p className="text-white font-Montserrat">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Contact Form and Map */}
      <div className="flex justify-center py-12 bg-custom">
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102163.62258070143!2d10.128747251822952!3d36.851738563646286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34d69e694547%3A0xe1e0376f3637688f!2sNational%20Engineering%20School%20of%20Carthage!5e0!3m2!1sen!2stn!4v1701266189207!5m2!1sen!2stn"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="container mx-auto max-w-screen-lg px-8 py-4 bg-custom rounded-2xl text-secondary"> 
              <div className="w-full">
                <h2 className="text-primary f1c420-text font-semibold text-3xl mb-8">
                 Contactez-Nous 
                </h2>
                <h1 className="text-2xl md:text-5xl font-bold text-black text-center"> Ecrire un message </h1>
              </div> <br />
              <div></div>
              <form className="w-full flex flex-col items-center justify-center gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom et Prénom" className="h-16 p-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="h-16 p-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary" />
                  <input type="text" name="partenariat" value={formData.partenariat} onChange={handleChange} placeholder="Partenariat" className="h-16 p-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Entrez votre message" rows="6" className="h-64 p-4 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary w-full"></textarea>
                <div className="flex w-full justify-center">
                  <button
                    type="submit"
                    className="text-white py-3 px-12 text-xl rounded-lg bg-primary hover:bg-tertiary app_transition"
                  >
                    Confirmer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

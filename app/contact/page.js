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
    <main className="min-h-screen overflow-hidden">
        <div className="relative flex w-full flex-col lg:flex-row lg:items-center lg:justify-between items-center justify-center gap-20 px-32 py-20">
        <div className="absolute w-full inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(/images/ch3ir.png)` }}>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full mt-10 lg:mt-0 px-20">
          <div className="flex flex-col gap-8 z-10 mt-[5rem] mb-8">
            <h1 className="text-white font-bold text-5xl lg:text-5xl text-center">
              Contactez-nous
            </h1>
           
          </div>
        </div>
      </div>

      {/* Added section for three rectangles */}
      <div className="flex justify-center py-8 bg-white">
        {[
          { color: "rgba(241, 196, 32, 1)", title: "A Propos ", text: "Cabinet de conseil spécialisé dans le domaine de l'agronomie." },
          { color: "rgb(102, 70, 28, 1)", title: "Contact", text:  "+216 53 471 630 , +216 55 414 262 , contact1.inatje@gmail.com" },
          { color: "rgb(33, 25, 2, 1)", title: "Adresse", text: "Cité Mahrajen, Manzah 1 INAT, Tunis Tunisie" }
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
              src="https://www.google.com/maps/d/u/0/embed?mid=1RDut2znQxus9qb6rcRMac1n_KbY&ll=36.828789820641724%2C10.181139707565308&z=17"
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

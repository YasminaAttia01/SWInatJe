import React from "react";
import Link from "next/link";
const EquipePage = () => {
  const team = [
    {
      image: "/images/team/salma.jpg",
      name: "Salma BENSAAD",

      role: "Secrétaire Générale",
      email: "Bensaadsalma634@gmail.com",
      linkedin:
        "https://l.facebook.com/l.php?u=http%3A%2F%2Flinkedin.com%2Fin%2Fsalma-ben-saad-6a6833258%3Ffbclid%3DIwAR2lG0D6BX8MQI0MWd8CnWNk0jUh6UYPOuxjy84tn5NJ0s2MRLbxBXuX1Lc&h=AT3qiJeFjzwZjnEZo86EKKo7JdqYK5aO_drR3BALZu3rDemyPFIk1nCwIwLP9xZsyiH4JB5vFinSiCnUTsj5WI5GRHlLPnGjBXVl3wittQcdsrM6Q602jUJNhbjCVM9yOBM7rA",
      facebook: "https://www.facebook.com/salma.bensaad.319",
    },
    {
      image: "/images/team/ikram.jpg",
      name: "Ikram KHALFALLI",
      role: "Présidente",
      email: "Ikramkhalfalli@gmail.com",
      linkedin:
        "https://www.linkedin.com/in/ikram-khalfalli/",
      facebook: "https://www.facebook.com/ikram.khalfalli1",
    },
    {
      image: "/images/team/taha.jpg",
      name: "Taha DKHILI",
      role: "Vice-Président",
      email: "tahadkhili0@gmail.com",
      linkedin:
      "https://www.linkedin.com/in/taha-dkhili/",
      facebook: "https://www.facebook.com/taha.dkhili",
    },
    {
      image: "/images/team/youssef.jpg",
      name: "Youssef SRASRA",
      role: "Trésorier",
      email: "youssef.srasra10@gmail.com",
      linkedin: "https://www.linkedin.com/in/youssef-srasra/",
      facebook: "https://www.facebook.com/profile.php?id=100006602445996",
    },
    {
      image: "/images/team/yassmina.jpg",
      name: "Yasmina ATTIA",
      role: "Responsable Pôle Projets et Prospections",
      email: "attiayasmina01@gmail.com",
      linkedin:
        "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fyasmina-attia-6817b3217%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DIwAR3J4vPXvXEnbyZrZvVJA1l9HjFx3UgrCpoy_LCjchP7hUIPkvYmbAHKZts&h=AT3qiJeFjzwZjnEZo86EKKo7JdqYK5aO_drR3BALZu3rDemyPFIk1nCwIwLP9xZsyiH4JB5vFinSiCnUTsj5WI5GRHlLPnGjBXVl3wittQcdsrM6Q602jUJNhbjCVM9yOBM7rA",
      facebook: "https://www.facebook.com/profile.php?id=100006150497951",
    },
    {
      image: "/images/team/malek.jpg",
      name: "Malek SEFI",
      role: "Responsable Pôle Marketing",
      email: "sefimalek1234@gmail.com",
      linkedin: "https://www.linkedin.com/in/malek-sefi-4aa504225/",
      facebook: "https://www.facebook.com/profile.php?id=100008002931304",
    },
    {
      image: "/images/team/hiba.jpg",
      name: "Hiba HMADI",
      role: "Responsable Pôle Développement Commercial",
      email: "hibamouka@gmail.com",
      linkedin: "https://www.linkedin.com/in/hiba-hmadi-6902b0284/",
      facebook: "https://www.facebook.com/profile.php?id=100008321918223",
    },
  ];

  return (
    <main className="overflow-hidden">
      <div className="min-h-screen bg-hero bg-cover bg-no-repeat bg-center  bg-primary flex flex-col items-center justify-center gap-10 md:gap-20 py-20 ">
        <h1 className=" text-5xl md:text-8xl font-bold text-white text-center">
          Notre Équipe
        </h1>
        <hr className="border-t-4 border-white w-1/4 pb-8" />
      </div>
      <div className="min-h-screen py-20 mx-36 bg-yellow-0 flex flex-wrap justify-center items-center gap-y-10 gap-10">
        {team.map((member, index) => (
          <div
            className="flex flex-col items-center justify-center gap-4 min-w-fit w-1/5  bg-primary h-full p-4 rounded-3xl text-center  drop-shadow-[4px_4px_8px_rgba(0,0,0,0.3)] hover:scale-[1.01] app_transition "
            key={index}
          >
            <div className="w-[320px] rounded-2xl overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="object-contain"
              />
            </div>
            <h2 className="md:text-2xl font-bold text-white">{member.name}</h2>
            <p className=" text-white">{member.role}</p>
            <div className="flex items-center  justify-center gap-4">
              <Link href={`mailto:${member.email}`}>
                <img
                  src="/icons/mail.svg"
                  alt="mail icon"
                  className="h-8 hover:scale-105 app_transition"
                />
              </Link>
              <Link href={member.facebook}>
                <img
                  src="/icons/facebook.svg"
                  alt="facebook icon"
                  className="h-8 hover:scale-105 app_transition"
                />
              </Link>
              <Link href={member.linkedin}>
                <img
                  src="/icons/linkedin.svg"
                  alt="linkedin icon"
                  className="h-8 hover:scale-105 app_transition"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default EquipePage;

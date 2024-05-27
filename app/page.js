import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import MelkartNumbersSection from "./components/MelkartNumbersSection";
import PartnersSection from "./components/PartnersSection";
import ServicesSection from "./components/ServicesSection";
import ValuesSection from "./components/ValuesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
        <MelkartNumbersSection />
      <div className="overflow-hidden w-full bg-values bg-center bg-cover bg-no-repeat flex flex-col  justify-start items-center py-8">
      
        <PartnersSection />
      </div>
    </>
  );
}

import AboutUsSection from "@/components/AboutUsSection";
import Hero from "@/components/Hero";
import NumbersSection from "@/components/NumbersSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSections";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <ValuesSection />
      <NumbersSection />
      <PartnersSection />
    </main>
  );
}

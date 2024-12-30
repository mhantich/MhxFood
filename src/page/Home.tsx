

import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import SecondSection from "@/components/SecondSection";
import ServicesSection from "@/components/ServiceCard";


const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MenuSection />
      <SecondSection />
      <ServicesSection />
    </div>
  );
};

export default Home;

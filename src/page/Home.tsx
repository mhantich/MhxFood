

import { BlogArticles } from "@/components/BlogArticles";
import DeliveryFeatures from "@/components/DeliveryFeatures";
import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import SecondSection from "@/components/SecondSection";
import ServicesSection from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";


const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MenuSection />
      <SecondSection />
      <ServicesSection />
      <DeliveryFeatures />
      <Testimonials />
      <BlogArticles />
    </div>
  );
};

export default Home;

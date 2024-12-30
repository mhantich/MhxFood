import AboutInfo from "@/components/AboutInfo";
import AboutSer from "@/components/AboutSer";
import Facilities from "@/components/Facilities";
import SecondSection from "@/components/SecondSection";
import { Testimonials } from "@/components/Testimonials";

function About() {
  return (
    <div>
      <SecondSection />
      <AboutSer />
      <Facilities />
      <AboutInfo />
      <Testimonials />
    </div>
  );
}

export default About;

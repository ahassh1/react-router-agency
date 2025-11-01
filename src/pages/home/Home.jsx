import React from "react";
import HeroSection from "./HeroSection";
import ToolsSection from "./ToolsSection";
import CompanyLogos from "./CompanyLogos";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <CompanyLogos />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;

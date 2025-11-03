import React from "react";
import HeroSection from "./HeroSection";
import ToolsSection from "./ToolsSection";
import CompanyLogos from "./CompanyLogos";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Blogs from "../blog/Blogs";
import TeamSection from "./TeamSection";
import Pricing from "./Pricing";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <CompanyLogos />
      <Services />
      <Testimonials />
      <Blogs />
      <TeamSection />
      <Pricing />
      <FAQs />
    </>
  );
};

export default Home;

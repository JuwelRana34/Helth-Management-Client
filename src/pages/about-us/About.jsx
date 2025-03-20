import React from "react";
import TestimonialSection from "./Testimonials";
import AboutUs1 from "./AboutUs1";
import MissionVision from "./MissionVision";
import AboutHeading from "./AboutHeading";
import DevTeam from "./DevTeam";

const About = () => {
  return (
    <div>
      <AboutHeading />
      <AboutUs1 />
      <DevTeam />
      <MissionVision />
      <TestimonialSection />
    </div>
  );
};

export default About;

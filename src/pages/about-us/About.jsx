import React from "react";
import TestimonialSection from "./Testimonials";
import AboutUs1 from "./AboutUs1";
import MissionVision from "./MissionVision";
import AboutHeading from "./AboutHeading";
import DevTeam from "./DevTeam";
import CoreValues from "./CoreValues";

const About = () => {
  return (
    <div>
      <AboutHeading />
      <AboutUs1 />
      <CoreValues />
      {/* <DevTeam /> */}
      <MissionVision />
      {/* <TestimonialSection /> */}
    </div>
  );
};

export default About;

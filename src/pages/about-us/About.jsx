import React from 'react';
import Aboutus_section1 from './Aboutus_ection1';
import TestimonialSection from './Testimonials';
import DoctorsSection from './DoctorsSection';

const About = () => {
    return (
        <div>
           <Aboutus_section1/>
           <DoctorsSection/>
           <TestimonialSection/>
        </div>
    );
};

export default About;
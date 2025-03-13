import React from 'react';
import HealthNeeds from '../components/section/HealthNeeds';
import ServiceSection from '../components/section/ServiceSection';
import WellnessOfferings from '../components/section/WellnessOfferings';
import AboutUs from './home/AboutUs';
import Doctors from './home/Doctors';
import Hero from './home/Hero';
import HomeCard from './home/HomeCard';
import IconCard from './home/IconCard';
import MarqueeSection from './home/MarqueeSection';
import PhotoGallery from './home/PhotoGallery';
import FeedbackSlider from './home/FeedbackSlider';

const Home = () => {
    return (
        <div>
            <Hero />
            <IconCard />
            <MarqueeSection/>
            <AboutUs />
            <HomeCard />
            <Doctors />
            <HealthNeeds />
            <WellnessOfferings />
            <ServiceSection/>
        </div>
    );
};

export default Home;
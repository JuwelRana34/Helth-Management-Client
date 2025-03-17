import React from 'react';
import HealthNeeds from '../components/section/HealthNeeds';
import ServiceSection from '../components/section/ServiceSection';
import WellnessOfferings from '../components/section/WellnessOfferings';
import Doctors from './home/Doctors';
import Hero from './home/Hero';
import HomeCard from './home/HomeCard';
import IconCard from './home/IconCard';
import MarqueeSection from './home/MarqueeSection';
import PhotoGallery from './home/PhotoGallery';
import FeedbackSlider from './home/FeedbackSlider';
import About_us from './home/About_us';

const Home = () => {
    return (
        <div>
            <Hero />
            <IconCard />
            <MarqueeSection/>
            <About_us/>
            <HomeCard />
            <Doctors />
            <PhotoGallery/>
            {/* <HealthNeeds /> */}
            {/* <WellnessOfferings /> */}
            <FeedbackSlider/>
        </div>
    );
};

export default Home;
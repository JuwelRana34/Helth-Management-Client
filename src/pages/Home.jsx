import React from 'react';
import HealthNeeds from '../components/section/HealthNeeds';
import WellnessOfferings from '../components/section/WellnessOfferings';
import AboutUs from './home/AboutUs';
import Doctors from './home/Doctors';
import Hero from './home/Hero';
import HomeCard from './home/HomeCard';
import IconCard from './home/IconCard';

const Home = () => {
    return (
        <div>
            <Hero />
            <IconCard/>
            <AboutUs />
            <HomeCard />
            <Doctors />
            <HealthNeeds />
            <WellnessOfferings />
        </div>
    );
};

export default Home;
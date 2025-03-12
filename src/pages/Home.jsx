import React from 'react';
import HealthNeeds from '../components/section/HealthNeeds';
import AboutUs from './home/AboutUs';
import Doctors from './home/Doctors';
import Hero from './home/Hero';
import HomeCard from './home/HomeCard';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
            <HomeCard />
            <Doctors />
            <HealthNeeds />
        </div>
    );
};

export default Home;
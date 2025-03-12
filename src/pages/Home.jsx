import React from 'react';
import Hero from './home/Hero';
import AboutUs from './home/AboutUs';
import HomeCard from './home/HomeCard';
import Doctors from './home/Doctors';

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
            <HomeCard />
            <Doctors/>
        </div>
    );
};

export default Home;
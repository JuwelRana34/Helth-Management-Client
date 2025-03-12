import React from 'react';
import Hero from './home/Hero';
import AboutUs from './home/AboutUs';
import HomeCard from './home/HomeCard';
import Doctors from './home/Doctors';
import IconCard from './home/IconCard';

const Home = () => {
    return (
        <div>
            <Hero />
            <IconCard/>
            <AboutUs />
            <HomeCard />
            <Doctors/>
        </div>
    );
};

export default Home;
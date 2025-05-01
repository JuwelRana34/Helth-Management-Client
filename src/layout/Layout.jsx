import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import AiChatBox from '../components/AiChatBox';

const Layout = () => {
  


    return (
        <div className='font-roboto dark:bg-gray-900 bg-white' >
            <Navbar />
            <div>
                <Outlet/> 
                <AiChatBox/>
            </div>
           
            <Footer/>
        </div>
    );
};

export default Layout;
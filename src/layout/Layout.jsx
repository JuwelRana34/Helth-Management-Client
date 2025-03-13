import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className='font-roboto'>
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;
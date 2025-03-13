import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='font-roboto'>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default Layout;
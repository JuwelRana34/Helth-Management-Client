import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import useAuth from '../Hooks/useAuth';
import Loading from '../components/Loading';
import AiChatBox from '../components/AiChatBox';

const Layout = () => {

    const {loading} = useAuth()

    if (loading) {
        return <div> <Loading/> </div>

    }


    return (
        <div className='font-roboto'>
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
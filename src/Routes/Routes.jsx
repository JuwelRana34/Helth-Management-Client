import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/about-us/About';
import Services from '../pages/services/Services';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import BookAppoinment from '../pages/book-appoinment/BookAppoinment';
import Dashboard from '../layout/Dashboard';

const Routes = () => {
    const route = createBrowserRouter([
        {
            path : '/',
            element : <Layout/>,
            children : [
                {
                    path : '/',
                    element : <Home/>
                },
                {
                    path : '/about',
                    element : <About/>
                },
                {
                    path : '/services',
                    element : <Services/>
                },
                {
                    path : '/book-appoinment',
                    element : <BookAppoinment></BookAppoinment>
                },
                {
                    path : '/login',
                    element : <Login/>
                },
                {
                    path : '/register',
                    element : <Register/>
                },
            ]
        },
        {
            path : 'Dashboard',
            element : <Dashboard/>,
            children : [
                {
                    index : true,
                    element : <div> 
                        <h1 className=' text-4xl font-bold text-lime-500 mb-2'> keyse laga mere majak</h1>
                        <img src="https://img.freepik.com/premium-photo/low-angle-view-statue-against-sky_1048944-15410736.jpg?uid=R25037804&ga=GA1.1.1974322130.1689523785&semt=ais_hybrid" alt=""  /></div>
                },
                
            ]

        },
        {
            path : '/*',
            element : <div>Page not found</div>
        }
       
    ])
    return <RouterProvider router={route} />
};

export default Routes;
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/about-us/About';
import Services from '../pages/services/Services';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

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
            path : '/*',
            element : <div>Page not found</div>
        }
       
    ])
    return <RouterProvider router={route} />
};

export default Routes;
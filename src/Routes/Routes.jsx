import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';

const Routes = () => {
    const route = createBrowserRouter([
        {
            path : '/',
            element : <Layout/>,
            children : [
                {
                    path : '/',
                    element : <Home/>
                }
            ]
        }
    ])
    return <RouterProvider router={route} />
};

export default Routes;
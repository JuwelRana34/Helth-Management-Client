import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
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
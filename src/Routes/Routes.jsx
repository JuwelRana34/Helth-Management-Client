import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/about-us/About';
import Services from '../pages/services/Services';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import BookAppoinment from '../pages/book-appoinment/BookAppoinment';
import Dashboard from '../layout/Dashboard';
import UserDashboard from '../pages/Dashboard/UserDashboard';
import Schedule from '../pages/Dashboard/Schedule';
import Doctor from '../pages/Dashboard/Doctor';
import Patients from '../pages/Dashboard/Patients';
import Messages from '../pages/Dashboard/Messages';
import Payments from '../pages/Dashboard/Payments';
import PrivateRoute from './PrivateRoute';
import AddDoctor from '../pages/Dashboard/AddDoctor';
import PaymentFail from '../pages/payments/PaymentFail';
import PaymentSuccess from '../pages/payments/PaymentSuccess';
import AdminRoute from './AdminRoute';

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
                    path : '/Subscription',
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
                {
                    path : '/paymentSuccess',
                    element : <PaymentSuccess/>
                },
                {
                    path : '/paymentFailure',
                    element : <PaymentFail/>
                },

            ]
        },
        {
            path : 'Dashboard',
            element : <PrivateRoute>
                <Dashboard/>
            </PrivateRoute>,
            children : [
                {  index : true,
                    element : <Patients/>
                },
                {
                    path:"AdminDashboard",
                    element : <AdminRoute> <UserDashboard/> </AdminRoute> 
                },
                {
                    path:"schedule",
                    element : <Schedule/>
                },
                
                {
                    path :"doctor",
                    element : <Doctor/>
                },
                {
                    path :"messages",
                    element : <Messages/>
                },
                {
                    path :"payments",
                    element : <Payments/>
                },
                {
                    path :"add-doctor",
                    element :<AdminRoute> <AddDoctor/> </AdminRoute>  
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
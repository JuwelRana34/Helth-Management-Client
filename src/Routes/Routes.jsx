import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Home from '../pages/Home';
const Loading = lazy(()=> import('../components/Loading')) ;
const Layout = lazy(() => import('../layout/Layout'));
const About = lazy(() => import('../pages/about-us/About'));
const Services = lazy(() => import('../pages/services/Services'));
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const BookAppoinment = lazy(() => import('../pages/book-appoinment/BookAppoinment'));
const Dashboard = lazy(() => import('../layout/Dashboard'));
const UserDashboard = lazy(() => import('../pages/Dashboard/UserDashboard'));
const Schedule = lazy(() => import('../pages/Dashboard/Schedule'));
const Doctor = lazy(() => import('../pages/Dashboard/Doctor'));
const Patients = lazy(() => import('../pages/Dashboard/Patients'));
const Messages = lazy(() => import('../pages/Dashboard/Messages'));
const Payments = lazy(() => import('../pages/Dashboard/Payments'));
const AddDoctor = lazy(() => import('../pages/Dashboard/AddDoctor'));
const PaymentFail = lazy(() => import('../pages/payments/PaymentFail'));
const PaymentSuccess = lazy(() => import('../pages/payments/PaymentSuccess'));
const Users = lazy(() => import('../pages/Dashboard/Users'));
const SingleDoctor = lazy(() => import('../pages/home/SingleDoctor'));

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
                    path: "/doctor/:id",
                    element: <SingleDoctor/>
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
                {
                    path :"Users",
                    element :<AdminRoute> <Users/> </AdminRoute>  
                },
                
            ]

        },
        {
            path : '/*',
            element : <div>Page not found</div>
        }
       
    ])
    return (
      <Suspense fallback={<Loading/>}>
        <RouterProvider router={route} />
      </Suspense>
    );
};

export default Routes;
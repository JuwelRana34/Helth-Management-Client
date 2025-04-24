import { Navigate, useLocation } from 'react-router';
import useAuth from './../Hooks/useAuth';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {

    const { user, loading } = useAuth()
    const location = useLocation();

    if(loading){
        return <div> <Loading/> </div>
    }

    if (!user) {
        return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;
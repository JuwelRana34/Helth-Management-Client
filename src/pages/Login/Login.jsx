import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import img from '../../assets/authentication/Login-pana.png';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth';
import app from '../../Firebase/firebase.config';

const Login = () => {
    const { signIn } = useAuth();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast.success('Login successfully');
                navigate(location.state ? location.state : '/');
            })
            .catch((error) => toast.error(error.message));
    };

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                navigate(location.state ? location.state : '/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-base-200 pt-20">
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center p-6 bg-base-100 rounded-lg shadow-lg">
                {/* Image Section */}
                <div className="hidden lg:block w-1/2">
                    <img src={img} alt="Login" className="rounded-lg shadow-lg" />
                </div>

                {/* Form Section */}
                <div className="card w-full max-w-md p-8 shadow-lg bg-white rounded-lg">
                    <h1 className="text-center text-3xl font-bold text-primary mb-6">Login</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label text-gray-600 font-semibold">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label text-gray-600 font-semibold">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                            <label className="label">
                                <a href="#" className="text-sm text-primary hover:underline">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={googleLogin}
                        className="btn btn-outline w-full flex items-center gap-2"
                    >
                        <FcGoogle className="text-xl" /> Continue with Google
                    </button>
                    <p className="text-center text-gray-600 mt-4">
                        New here?{' '}
                        <Link className="text-primary font-bold hover:underline" to="/register">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
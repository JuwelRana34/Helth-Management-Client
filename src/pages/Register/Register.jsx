import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/authentication/Login-bro.png";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import app from "../../Firebase/firebase.config";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [role, setRole] = useState("student");
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasMinimumLength = password.length >= 6;

        if (!hasUppercase) return toast.error("Password must include at least one uppercase letter.");
        if (!hasLowercase) return toast.error("Password must include at least one lowercase letter.");
        if (!hasMinimumLength) return toast.error("Password must be at least 6 characters long.");

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!validatePassword(password)) return;

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        toast.success("Sign up successfully.");
                        navigate(location.state ? location.state : "/");
                    })
                    .catch((err) => toast.error(err.message));
            })
            .catch((error) => toast.error(error.message));
    };

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                toast.success("Sign up successfully.");
                navigate(location.state ? location.state : "/");
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-base-200 pt-20">
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center bg-base-100 shadow-xl rounded-xl p-10 w-full max-w-4xl">
                <div className="w-1/2 hidden lg:block">
                    <img src={img} alt="Register" className="rounded-lg" />
                </div>
                <div className="w-full max-w-md">
                    <h1 className="text-center text-3xl font-bold text-primary mb-6">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label text-base-content">Name</label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label text-base-content">Photo URL</label>
                            <input name="photo" type="text" placeholder="Enter your photo URL" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label text-base-content">Email</label>
                            <input name="email" type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label text-base-content">Password</label>
                            <input name="password" type="password" placeholder="Enter your password" className="input input-bordered w-full" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={googleLogin} className="btn btn-outline w-full flex items-center gap-2">
                        <FcGoogle className="text-2xl" /> Sign up with Google
                    </button>
                    <p className="text-center mt-4 text-sm text-base-content">
                        Already have an account? <Link to="/login" className="text-primary">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
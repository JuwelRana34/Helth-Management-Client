import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import app from "../../Firebase/firebase.config";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [loading, setLoading] = useState(false);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    // Validate Password Function
    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasMinimumLength = password.length >= 8;

        if (!hasUppercase) return toast.error("Password must have at least one uppercase letter.");
        if (!hasLowercase) return toast.error("Password must have at least one lowercase letter.");
        if (!hasNumber) return toast.error("Password must include at least one number.");
        if (!hasMinimumLength) return toast.error("Password must be at least 8 characters long.");

        return true;
    };

    // Handle Registration
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        const form = e.target;
        const name = form.name.value.trim();
        const photo = form.photo.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        if (!validatePassword(password)) return;

        setLoading(true);
        try {
            await createUser(email, password);
            await updateUserProfile(name, photo);
            toast.success("Registration successful!");
            navigate(location.state?.from || "/");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Google Login
    const googleLogin = async () => {
        if (loading) return;
        setLoading(true);
        try {
            await signInWithPopup(auth, provider);
            toast.success("Signed up with Google successfully!");
            navigate(location.state?.from || "/");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-6">
            <div className="bg-white shadow-2xl rounded-lg w-full max-w-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800">Create an Account</h1>
                <p className="text-center text-gray-500 mb-6">Join us and explore amazing features</p>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Full Name</label>
                        <input name="name" type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Photo URL</label>
                        <input name="photo" type="text" placeholder="Paste your photo URL" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Email Address</label>
                        <input name="email" type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Password</label>
                        <input name="password" type="password" placeholder="Create a strong password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2 text-white font-bold rounded-lg transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                        disabled={loading}
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <div className="my-5 flex items-center">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-3 text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Google Signup */}
                <button
                    onClick={googleLogin}
                    className={`w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg transition ${loading ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"}`}
                    disabled={loading}
                >
                    <FcGoogle className="text-2xl mr-2" />
                    {loading ? "Processing..." : "Sign up with Google"}
                </button>

                <p className="text-center mt-4 text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

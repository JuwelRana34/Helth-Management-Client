import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import app from "../../Firebase/firebase.config";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  // Password validation
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();

    const userData = { name, email };

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    if (!validatePassword(password)) return;

    setLoading(true);
    try {
      await createUser(email, password);
      await updateUserProfile(name);
      toast.success("Registration successful!");
      const theUserData = await axios.post(`${import.meta.env.VITE_Url}/api/auth/register`, userData);
      console.log('response',theUserData)
      navigate(location.state?.from || "/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
      await axiosSecure.post(`${import.meta.env.VITE_Url}/api/auth/register`, userData);
      toast.success(`Welcome, ${user.displayName}!`);
      navigate(location.state?.from?.pathname || "/");
    } catch (error) {
      toast.error("Failed to sign in with Google.");
    } finally {
      setLoading(false);
    }
  };

  const facebookLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
      await axiosSecure.post(`${import.meta.env.VITE_Url}/api/auth/register`, userData);
      toast.success(`Welcome, ${user.displayName}!`);
      navigate(location.state?.from?.pathname || "/");
    } catch (error) {
      toast.error("Failed to sign in with Facebook.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">Create an Account</h1>
        <p className="text-center text-gray-500 mb-6">Join us and explore amazing features</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Full Name</label>
            <input name="name" type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Email Address</label>
            <input name="email" type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Re-enter Password</label>
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Toggle Password Visibility */}
          <div className="flex items-center">
            <input
              id="showPassword"
              type="checkbox"
              className="mr-2"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-sm text-gray-600 cursor-pointer">
              Show Password
            </label>
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

        <button
          onClick={googleLogin}
          className={`w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg transition ${loading ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"}`}
          disabled={loading}
        >
          <FcGoogle className="text-2xl mr-2" />
          {loading ? "Processing..." : "Sign up with Google"}
        </button>

        <button
          onClick={facebookLogin}
          className={`w-full flex items-center justify-center py-2 mt-3 border border-gray-300 rounded-lg transition ${loading ? "bg-gray-200 cursor-not-allowed" : "hover:bg-gray-100"}`}
          disabled={loading}
        >
          <FaFacebook className="text-2xl text-blue-600 mr-2" />
          {loading ? "Processing..." : "Sign up with Facebook"}
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


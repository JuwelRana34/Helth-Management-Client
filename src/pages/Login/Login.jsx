import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import app from "../../Firebase/firebase.config";
import { useState } from "react";
import axios from "axios";


const Login = () => {
  const { signIn } = useAuth();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);
    signIn(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(location.state?.from || "/");
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  };

  // facebook login 
  const socialLogin = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await signInWithPopup(auth,facebookProvider);
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
      await axios.post(`${import.meta.env.VITE_Url}/api/auth/register`, userData);
  
      console.log("User Data:", userData);
      toast.success(`Welcome, ${user.displayName}!`);
      navigate(location.state?.from?.pathname || "/");
  } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Failed to sign in with Google. Please try again.");
  } finally {
      setLoading(false);
  }
  };

      // Google Login
     
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
              await axios.post(`${import.meta.env.VITE_Url}/api/auth/register`, userData);
  
              console.log("User Data:", userData);
              toast.success(`Welcome, ${user.displayName}!`);
              navigate(location.state?.from?.pathname || "/");
          } catch (error) {
              console.error("Google Sign-In Error:", error);
              toast.error("Failed to sign in with Google. Please try again.");
          } finally {
              setLoading(false);
          }
      };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-primary to-secondary py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row gap-10 items-center p-10 bg-white rounded-xl shadow-2xl w-full max-w-5xl"
      >
        <motion.div className="hidden lg:block w-1/2">
          <img
            src="https://i.ibb.co.com/Mxxw8BkX/bg-login-iblwvcd-U.jpg"
            alt="Login"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-lg"
        >
          <h1 className="text-center text-3xl font-bold text-gray-700 mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label text-gray-700 font-semibold">Email</label>
              <input name="email" type="email" required className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label text-gray-700 font-semibold">Password</label>
              <input name="password" type="password" required className="input input-bordered w-full" />
              <label className="label">
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </label>
            </div>
            <motion.button type="submit" className="btn bg-primary text-white w-full">Login</motion.button>
          </form>
          <div className="divider my-3">OR</div>
          <button onClick={googleLogin} className="btn w-full flex items-center justify-center gap-2 border border-gray-300">
            <FcGoogle className="text-2xl" /> Sign in with Google
          </button>
          <button onClick={socialLogin} className="btn w-full flex items-center justify-center gap-2 mt-3 border border-gray-300">
            <FaFacebook className="text-2xl text-blue-600" /> Sign in with Facebook
          </button>
          <p className="text-center text-gray-600 mt-4">
            New here? <Link className="text-blue-600 font-bold hover:underline" to="/register">Sign up</Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

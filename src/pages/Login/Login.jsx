import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import app from "../../Firebase/firebase.config";

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
        toast.success("Login successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-primary to-secondary py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row gap-10 items-center p-10 bg-white rounded-xl shadow-2xl w-full max-w-5xl"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block w-1/2"
        >
          <img
            src="https://i.ibb.co.com/Mxxw8BkX/bg-login-iblwvcd-U.jpg"
            alt="Login"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-lg"
        >
          <h1 className="text-center text-3xl font-bold text-gray-700 mb-6">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label text-gray-700 font-semibold">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-700 font-semibold">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-300"
                required
              />
              <label className="label">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn bg-primary text-white font-semibold w-full py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </motion.button>
          </form>
          <div className="divider text-center my-3">OR</div>
          {/* sign with google */}
          <button
            onClick={googleLogin}
            className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-Maintext-mainPrimary"
          >
            <div className="relative z-20 flex h-full items-center bg-Maintext-mainPrimary px-4 text-lg text-mainPrimary duration-300 group-hover:bg-transparent group-hover:text-mainPrimary">
              Signin with
            </div>
            <span className="flex h-full items-center px-4 text-xl font-bold text-primary duration-300 group-[]:bg-mainPrimary group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="size-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </span>
          </button>
          <p className="text-center text-gray-600 mt-4">
            New here?{" "}
            <Link
              className="text-blue-600 font-bold hover:underline"
              to="/register"
            >
              Sign up
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

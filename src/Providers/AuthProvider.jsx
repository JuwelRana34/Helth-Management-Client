import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "../Firebase/firebase.config";
import axios from "axios";

// import { DarkModeSwitch } from "react-toggle-dark-mode";
// import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDatabaseInfo, setUserDatabaseInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifi, setNotifi] = useState([]);
  const [isAdmin , setIsAdmin]= useState(false)
  useEffect(()=>{
    if(userDatabaseInfo?.role === "admin"){
      
      setIsAdmin(true)
    }else{
      setIsAdmin(false)
    }
    
  },[userDatabaseInfo, userDatabaseInfo?.role])



  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
  
    });
  };

  // darkmode light mode
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  // mongodb userID 
  // useEffect(() => {
  //   async function userinfoGet() {
  //     try {
  //       const { data } = await axios.get(
  //         `${import.meta.env.VITE_Url}/api/user/${user?.email}`, {withCredentials: true}
  //       );
  //       setUserDatabaseInfo(data?.user);
  //     } catch (e) {
  //       console.error(e);
  //       setLoading(false);
  //       return;
  //     }
  //   }

  //   userinfoGet();
  // }, [user?.email]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
  
      try {
        if (currentUser) {
           await axios.post(
            `${import.meta.env.VITE_Url}/jwt`,
            { email: currentUser.email },
            { withCredentials: true }
          );
          setUser(currentUser);
          const { data } = await axios.get(
            `${import.meta.env.VITE_Url}/api/user/${currentUser.email}`, {withCredentials: true}
          );
          setUserDatabaseInfo(data?.user);
          console.log(currentUser,'from test')
        } else {
          await axios.post(
           ` ${import.meta.env.VITE_Url}/logout`,
            {},
            { withCredentials: true }
          );
          setUser(null);
        }
      } catch (error) {
        console.error('Error in auth state change handler:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });
  
    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);
  

  const info = {
    user,
    loading,
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    isDarkMode,
    toggleDarkMode,
    setDarkMode,
    notifi,
    setNotifi,
    userDatabaseInfo,
    isAdmin
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

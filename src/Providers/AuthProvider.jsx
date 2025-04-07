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

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // darkmode light mode
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  // mongodb userID 
  useEffect(() => {
    async function userinfoGet() {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_Url}/api/user/${user?.email}`
        );
        setUserDatabaseInfo(data?.user);
      } catch (e) {
        console.error(e);
        setLoading(false);
        return;
      }
    }

    userinfoGet();
  }, [user?.email]);

    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            if(currentUser){
                setLoading(false)
            }
         
            // console.log(currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = {
                    email : currentUser.email
                }
               
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                        setLoading(false)
                    }
                })
            }
            else{
                // do something
                localStorage.removeItem('access-token')
            }
            
            setLoading(false);
        })

    return () => {
      return unsubsribe();
    };
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
    userDatabaseInfo
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

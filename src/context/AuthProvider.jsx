import { createContext, useEffect, useState } from 'react';
import auth from '../utilities/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    // user state
    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);
    console.log(user);
    

    // catch user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unsubscribe();
        }
    },[])


    // register with email and password
    const registerUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update profile
    const updateNamePhoto = (name, photo) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    // login with email and password
    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }



    // logout
    const logout = () => {
        setLoader(true);
        return signOut(auth);
    }

    const data = {
        user,
        registerUser,
        updateNamePhoto,
        login,
        googleLogin,
        logout,
        loader


    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
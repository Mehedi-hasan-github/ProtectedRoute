import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";



export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // .... Sign Up user with email and password....//
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // ..... sign in user with email and password.....//
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // ...login with google account...//
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);

    }
    // .....logout user......//
    const logoutUser = () => {
        return (signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        )
    }


    // .....manage current user..........//
    useEffect(() => {
        const connection = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return connection;
    }, []);

    const authInfo = { user, createUser, loginUser, logoutUser, loginWithGoogle };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
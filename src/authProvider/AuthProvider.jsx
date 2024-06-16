import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const fbSignIn =()=>{
        return signInWithPopup(auth, fbProvider)
    }

    const logOut =()=>{
        return signOut(auth).then(() => setUser(null))
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser)
            }else{
                setLoading(false);
            }
        })
        return ()=>{
            return unsubscribe();
        }
    }),[];

const authInfo = {user,createUser,signIn,googleSignIn,fbSignIn,logOut,loading}

    return (
       <AuthContext.Provider value= {authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
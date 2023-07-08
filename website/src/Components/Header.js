import React, { useState, useEffect }  from 'react'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup,signInWithEmailAndPassword, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
  apiKey: "AIzaSyA91GGBqYmDZI3sbEGsUz2VsP-jzwFmG1Q",
  authDomain: "otic-6aff2.firebaseapp.com",
  projectId: "otic-6aff2",
  storageBucket: "otic-6aff2.appspot.com",
  messagingSenderId: "1022591030193",
  appId: "1:1022591030193:web:4da2b59ec7f25123122390",
  measurementId: "G-JG59KXT53H"
};

// Initialize Firebase
const  app = initializeApp(FirebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [image, setImage] = useState(false);
 
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setUser(true);
    } catch (err) {
      console.error(err);
     // alert(err.message);
    }
  };
  const Logout = async () => {
    try {
      await signOut(auth);
      setUser(false);
      
    } catch (err) {
      console.error(err);
    //  alert(err.message);
    }
  };
  useEffect(() => { onAuthStateChanged(auth, (users) => {
    if (users) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const image = users.photoURL;
      setUser(true);
      setImage(image)
      // ...
    } else {
      setUser(false);
      // User is signed out
      // ...
    }
  });},[])

  return (
    <header>
      <div>
        <nav className='header'>
          <div style={{height:'10px'}}></div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
           
            <li><div style={{right: '0', display: 'inline'}}></div></li>
            {user ? <li></li> : '' }
            <li>Get Started</li>

        </ul>
       <div style={{height:'20px'}}></div>
        </nav>
        </div>
    </header>
  )
}

export default Header
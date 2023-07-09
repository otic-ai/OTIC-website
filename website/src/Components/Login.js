import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { GoogleAuthProvider, getAuth, signInWithPopup,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
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
const LoginPopup = ({ onClose }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
  };


  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      
    } catch (err) {
      console.error(err);
     // alert(err.message);
    }
  };
  return (
    <div>
        <div className="overlay"></div>
    <div className="login-popup">
      <div className="close-icon" onClick={onClose}>
        &times;
      </div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <div style={{height:'10px'}}></div>
        <input type="text" id="username" />
        <p>
            <div style={{height:'20px'}}></div>
        </p>
        <label htmlFor="password">Password:</label>
        <div style={{height:'20px'}}></div>
        <input type="password" id="password" />
        <p>
            <div style={{height:'10px'}}></div>
        </p>
        <button style={{backgroundColor:'orange' ,minHeight:'40px',borderColor:'orange', borderRadius:'5px', minWidth:'85px'}} type="submit">Log in</button>
      </form>

      <div style={{display: 'flex', flexDirection:'row'}}>
        <p style={{fontSize:'0.9rem'}}>Or login with:</p>
        <div style={{width:'6px'}}></div>
        <a href="#" onClick={googleSignIn}>
          <FontAwesomeIcon icon={faGoogle}  style={{color:''}} />Google Account
        </a>
        <div style={{width:'33px'}}></div>
       
      </div>

      <p>Don't have an account? <a href="#">Sign up</a></p>
    </div>
    </div>
  );
};

export default LoginPopup;

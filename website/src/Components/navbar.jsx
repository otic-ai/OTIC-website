import React, { useState, useEffect }  from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import LoginPopup from './Login';



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

function Navbar(){
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(false);
    const [image, setImage] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
  
    const handleLoginClick = () => {
      setShowLogin(true);
    };
  
    const handleCloseLogin = () => {
      setShowLogin(false);
    };
  
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
    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') 
        : setActive('nav__menu');

        //togglericon
        toggleIcon === 'nav__toggler'?  setToggleIcon('nav__toggler toggle')
        :setToggleIcon('nav__toggler');
    };
    return(
        <div>
            <nav className="nav">
                <div>
            <img className='icon'  src='favicon.ico' ></img>
                <a href="#" className="nav__brand">
                    Otic</a></div>
                <ul className={active}>
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#mission" className="nav__link">About Us</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact Us</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">About Otic</a></li>
                    {user ? <li style={{marginLeft:'0px'}}><a onClick={Logout} href="#" className="nav_link">Logout</a></li> : <li><a onClick={googleSignIn} href="#"  className="nav_link">Login </a></li> }
                    <li className='close-menu' >{user ?  <img alt='Profile picture'  src={image} style={{width: "40px", borderRadius: '50%', bottom:'0px'}}></img>: null }</li>
          
                </ul>
                <div style={{display:'flex', flexDirection:'row'}}>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className='menu'>{user ?  <img alt='Profile picture' src={image} style={{width: "40px", borderRadius: '50%', bottom:'0px'}}></img>: null }</div>
                </div>
              
          
            </nav>
        </div>
    );
}

export default Navbar;
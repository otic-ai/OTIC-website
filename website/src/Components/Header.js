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
        
        <nav className='header' >
        <ul className='full-screen'>
       
        <div style={{height:'5px', width:'10vw'}}></div>
        <li  style={{fontWeight: 'bold', color:'#040458', fontSize:'32px'}}><img  src='favicon.ico' style={{height: '30px', marginBottom: '0px'}}></img>
        Otic</li> 
        <li style={{width:'90vw'}}></li>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
            {user ? <li style={{marginLeft:'0px'}}><a onClick={Logout} href="#" className="nav_link">Logout</a></li> : <li><a onClick={googleSignIn} href="#"  className="nav_link">Login </a></li> }
         
        </ul>
        <div style={{width: '100vw'}}></div>
       <div className='full-screen' >
         
            {user ?  <img alt='Profile picture' src={image} style={{width: "40px", borderRadius: '50%', bottom:'0px'}}></img>: '' }

        </div> 
        
       <div className='full-screen' style={{height:'20px'}}></div>
       <div id="menu-toggle"  style={{display: 'flex', marginRight: '20px'}} ><img src={menuOpen ? 'times.svg' : 'bars.svg'} alt="timesicon" id="menu-toggle" onClick={handleMenuToggle} style={{color: "orange", alignItems: "right", height:'70%'}} />
       <div style={{width:'60vw'}}></div>
       <img id="menu-toggle" src='favicon.ico' style={{height:'80%'}}></img>
       <div id="menu-toggle" style={{fontWeight: 'bold', color:'#040458', fontSize:'32px'}}>Otic</div>
       <div style={{width:'60vw'}}></div>
       {user ?  <img alt='Profile picture' id="menu-toggle"  src={image} style={{width: "50px", borderRadius: '50%', marginleft:'0px'}}></img>: '' }
       
        </div>
        </nav>
      
        </div>
          <div id="menu-toggle"  >
      {menuOpen ?
        <div className='menu-drop' >
          {/* Dropdown content */}
          <ul style={{display:'flex', flexDirection:'column', position: 'static',marginBottom: '0px'}}>
          <li><a className="nav_link">Home</a></li>
          <li><a href="#home" className="nav_link">Home</a></li>
          <li><a href="#mission" className="nav_link">About Us</a></li>
          <li><a href="#services" className="nav_link">Services</a></li>
        
          <li><a href="#contact" className="nav_link">Contact</a></li>
          {user ? <li><a onClick={Logout} href="#" className="nav_link">Logout</a></li> : <li><a onClick={googleSignIn} href="#"  className="nav_link">Login </a></li> }
          
          </ul>
        </div>
      : ''}
    </div> 
    </header>
  )
}

export default Header
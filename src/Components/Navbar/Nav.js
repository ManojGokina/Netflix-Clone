import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
    const [show , setShow] =useState(false);

    const transitionNavbar = ()=>{
        if (window.scrollY > 100 ){
            setShow(true);
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
      window.addEventListener("scroll" , transitionNavbar)
      return ()=>window.removeEventListener("scroll", transitionNavbar)
    }, [])
  return (
    <div className={`nav ${show && 'nav__black'}  `}>

         <div className="nav__contents">
         <img className="netflix_logo" src="https://flyclipart.com/thumb2/netflix-logo-png-transparent-image-png-arts-82874.png" alt="logo" />
         <img className="netflix_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatarLogo"/>
        </div>
       
    </div>
  );
};

export default Nav;

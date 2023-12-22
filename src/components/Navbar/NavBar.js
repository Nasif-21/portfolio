import React, { useState } from 'react'
import "./NavBar.css"
import NasLogo from "../../assest/NasLogo.png";
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
  const [click, setClick]=useState(false)
  const handleClick=()=>setClick(!click);
  return (
    <div className="navbar">
      <Link to="/"><img src={NasLogo} className='navbarlogo'></img></Link>
      <ul className={click? "MenuBarItem active" :"MenuBarItem"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {
          click ?(<FaTimes size={20} style={{color:"#fff"}} />
          ):(<FaBars size={20} style={{color:"#fff"}}/>)
        }
          
        </div>
    
  

    </div>
  )
}

export default NavBar
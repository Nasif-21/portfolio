import React from 'react'
import Profile from '../../assest/Profile.png';
import "./intro.css";

const intro = () => {
  return (
    <section id="intro">
      <div className='introText'>
        <span className='salam'>Assalamualaikum</span><br>
        </br><span className='introI'>I am</span> <span className='introName'>Sheikh Muhtasim Nasif</span>
        <p className='introPara'>I am a web Developer</p>
      </div>
      
        <img src={Profile} alt="profile" className="profileimg" />
    
    
    </section>
    
  );
}

export default intro
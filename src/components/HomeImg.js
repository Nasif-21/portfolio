import React from 'react'
import "./HomeImg.css";
import profilepic from "../assest/Profile.png"


const HomeImg = () => {
  return (
    <div className='profileImg'>
        <div className='mask'>
            <img src={profilepic} className='profilepic'></img>

        </div>
        <div className='container'>
            <p>Assalamualikum,  </p>
            <p>I am </p>
            <section class="animation">
            <div class="first"><div>SHEIKH MUHTASIM NASIF</div></div>
            <div class="second"><div>Web Developer</div></div>
            <div class="third"><div>Software Engineer</div></div>
             </section>
        </div>
       
        
        </div>
  )
}

export default HomeImg
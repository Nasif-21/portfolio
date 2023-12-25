import "./Footer.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-container">
            <div className="left-part">
                <div className="Location">
                    <p><i className="fa-solid fa-house"></i></p>
                </div>
                <div className="Phone">
                    <p><i className="fa-solid fa-phone"></i></p>
                </div>
                <div className="Mail">
                    <p><i className="fa-solid fa-envelope"></i></p>
                </div>
            </div>





            <div className="right-part"></div>
        </div>

    </div>
  )
}

export default Footer
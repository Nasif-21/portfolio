//import { Link } from "react-scroll";
import "./Footer.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left-part">
                <div className="location">
                    <p><i className="fa-solid fa-house"></i></p>
                    <div>
                        <p>531/B/1, West Shewrapara, Mirpur, Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="Phone">
                    <p><i className="fa-solid fa-phone"></i></p>
                    <div>
                        <p>+8801799214049</p>
                    </div>
                </div>
                <div className="Mail">
                    <p><i className="fa-solid fa-envelope"></i></p>
                    <div>
                        <p>nasifshitab01@gmail.com</p>
                    </div>
                </div>
            </div>





            <div className="right-part">
                <p>Want to see my works and my social links</p>
                       
                <div className="social">
                <i class="fa-brands fa-github fa-xl"  style={{color: "#ffffff", marginRight: "0.8rem" }}></i>
                <i class="fa-brands fa-linkedin fa-xl" style={{color: "#ffffff", marginRight: "0.8rem"}}></i>
                <i class="fa-brands fa-figma fa-xl" style={{color: "#ffffff", marginRight: "0.8rem"}}></i>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
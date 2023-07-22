import React from "react";
import '../../styles/BeforeNav.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'


const BeforeNav = () => {
    return (
       <div className="container_bnav">

            <div className="bnav">
                <p> +225 0565676413</p> <p> pevroguinoel@gmail.com</p>
            </div>
            <div className="bnav_rx">
                <a href="#cc"> <img src={facebook} alt="facebook"/> </a> <a href="#cc"> <img src={instagram} alt="instagram"/> </a> <a href="#cc"> <img src={twitter} alt="twitter"/> </a> <a href="#cc"> <img src={youtube} alt="youtube"/> </a> 
            </div>
       </div>
    )
}

export default BeforeNav;
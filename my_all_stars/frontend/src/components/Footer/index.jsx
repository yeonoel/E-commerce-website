import React from "react";
import om from '../../assets/om.png'
import visa from '../../assets/visa.png'
import mc from '../../assets/mc.png'
import p from '../../assets/p.png'
import '../../styles/Footer.css'

const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="FooterContent">
                <div className="contentFooterImg_p">
                    <img src={p} alt="paypal" />
                </div>
                <div className="contentFooterImg_om">
                    <img src={om} alt="orange money" />
                </div>
                
                <div className="contentFooterImg_visa">
                    <img src={visa} alt="Visa" />
                </div>
                <div className="contentFooterImg_mc">
                    <img src={mc} alt="master card" />
                </div>
                
            </div>

        </div>
    )
}

export default Footer;
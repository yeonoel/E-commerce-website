import React from "react";
import '../../styles/Infos.css';
import loc from '../../assets/loc.png'
import phone from '../../assets/phone.png'
import whatssap from '../../assets/whatssap.png'

const Infos = () => {
    return (
        <div className="containerInfo">
            <div className="contentInfos">
                <div className="imgInfos">
                    <img src={phone} alt="" />
                </div>
                <div className="contentText">
                    <p>Cal Us 24/7</p>
                    <p>+225 0565676413</p>
                </div>
            </div>
            <div className="contentInfos">
                <div className="imgInfos">
                    <img src={loc} alt="" />
                </div>
                <div className="contentText">
                    <p>Location</p>
                    <p>Abbata Rivierz III</p>
                </div>
            </div>
            <div className="contentInfos">
                <div className="imgInfos">
                    <img src={whatssap} alt="" />
                </div>
                <div className="contentText">
                    <p>Whatsapp</p>
                    <p>+225 0565676413</p>
                </div>
            </div>
        </div>
    )
}

export default Infos;
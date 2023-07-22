import React from "react";
import baniershoes from '../../assets/baniershoes.png'
import '../../styles/Bande.css'

const Bande = () => {
    return (
        <div className="containerBande">
            <div className="bandeContent">
                <div className="contentImg">
                    <img src={baniershoes} alt="choses" />
                </div>
                <div className="bandeBody">
                    <h1> DO YOU NEED MORE TIPS?</h1>
                    <p> Sign up free and get  the lattest tips!</p>
                    <div className="contentBandebtn">
                       <input className="bandeinput" type="Email" placeholder="exemple@gmail.com" />
                       <button className="bandebtn">let's go</button> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Bande;
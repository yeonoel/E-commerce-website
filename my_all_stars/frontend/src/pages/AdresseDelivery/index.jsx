import React from "react"
import '../../styles/AdresseDelivery.css';
import { Link } from "react-router-dom";



const AdresseDelivery = () => {
    return (
        <div className="formcontainerppup">
            <div className="formcontainersignup">
                <p>Delivery Adress</p>
                <form className="login_form">
                    <input className="btnInputs" type="text" placeholder="street" />
                    <input className="btnInputs" type="text" placeholder="Commune" />
                    <select name="" id="">
                        <option value=""> --- Choose City --- </option>
                        <option value=""> Abidjan</option>
                        <option value=""> Bassam</option>
                        <option value=""> Dabou</option>
                    </select>
                    <input className="btnInputs" type="text" placeholder="Additional infomune" />
                    <Link to={'/payementmethod'}> <input className="btnlogin" type="button" value="Continue" /> </Link>
                </form>
                {/* <p> <Link to={'/signin'}> Log in </Link></p> */}
            </div>
        </div>
    )
}

export default AdresseDelivery;
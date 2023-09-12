import React from "react";
import '../../styles/SignIn.css';
import { Link } from "react-router-dom";
import '../../styles/SignIn.css';


const SignIn = () => {
    return (
        <div className="formcontainerppin">
            <div className="formcontainersignin">
                <form className="login_form">
                    <input className="btnInputs" type="Email" placeholder="exemple@gmail.com" />
                    <input className="btnInputs" type="password" placeholder="********" />
                    <Link to={'/adresseDelivery'}><input className="btnlogin" type="button" value="Login" /></Link>
                </form>
                <p> <Link to={'/signup'}> create acount </Link></p>
            </div>
        </div>
    )
}

export default SignIn;
import React from "react"
import '../../styles/SignIn.css';


const SignUp = () => {
    return (
        <div className="formcontainer">
            <p>Delivery Adress</p>
            <form className="login_form">
                <input className="btnInputs" type="text" placeholder="street" />
                <input className="btnInputs" type="text" placeholder="Commune" />
                <select name="" id="">
                    <option value=""> --- City --- </option>
                    <option value=""> Abidjan</option>
                    <option value=""> Bassam</option>
                    <option value=""> Dabou</option>
                </select>
                <input className="btnInputs" type="text" placeholder="Comadditional infomune" />
                <input className="btnlogin" type="button" value="Login" />
            </form>
            <p>create acount</p>
        </div>
    )
}

export default SignUp;
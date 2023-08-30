import React from "react"
import '../../styles/SignIn.css'


const SignIn = () => {
    return (
        <div className="formcontainer">
            <form className="login_form">
                <input className="btnInputs" type="Email" placeholder="exemple@gmail.com" />
                <input className="btnInputs" type="password" placeholder="********" />
                <input className="btnlogin" type="button" value="Login" />
            </form>
            <p>create acount</p>
        </div>
    )
}

export default SignIn;
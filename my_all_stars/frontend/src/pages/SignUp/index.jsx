import React from "react"
import '../../styles/SignUp.css';
import logo from '../../assets/logo.png'



const SignUp = () => {
    return (
        <div className="formcontainerSignUp">
            <div className="formContainerSignup">
                <div className="logoContainer">
                    <img src={logo} alt="" srcset="" />
                </div>
                <h3>Join the Club!s</h3>
                <p>Get the latest news and deals in your inbox and get *15% off your next order</p>
                <form className="login_form">
                    <div className="lastFirstInput">
                        <input className="btnInputs" type="text" placeholder="First Name" />
                        <input className="btnInputs" type="text" placeholder="Last Name" />
                    </div>
                    <input className="btnInputs" type="date" name="" id="" placeholder="Date Of Bith MM/DD/YYYY" />
                    <input className="btnInputs" type="email" name="" id="" placeholder="Your email" />
                    <input className="btnInputs" type="number" name="" id="" placeholder="Phone Number" />
                </form>
                <p>By submitting this form, you agree to receive marketing Emails and / or text messages from us at the number and email address provided, Consent is not a condition of any purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel. View our Privacy Policy and Terms of Service.</p>
                <input className="btnlogin" type="button" value="Sign Up" />
                {/* <p> <Link to={'/signin'}> Log in </Link></p> */}
            </div>
        </div>
    )
}

export default SignUp;
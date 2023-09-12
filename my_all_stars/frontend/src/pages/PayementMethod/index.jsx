import React from "react";
import '../../styles/PayementMethod.css';
import { Link } from "react-router-dom";

const PayementMethod = () => {
    return (
        <div className="formcontainerpayementmethodpup">
            <div className="formcontainerpayementmethod">
                <p>SELECT PAYEMENT METHOD</p>
                <form className="login_form">
                    <select className="choosepayementmethod" name="" id="">
                        <option className="choosemethod" value=""> --- Choose --- </option>
                        <option value=""> Orange Money</option>
                        <option value=""> MTN money</option>
                    </select>
                    <div className="divLivraisonPayement">
                        <input className="" type="checkbox" placeholder="Payement method" />
                        <span>Payment à la livraison</span>
                    </div>
                    <Link to={'/placeorder'}> <input className="btnlogin" type="button" value="Continue" /> </Link>
                </form>
                {/* <p> <Link to={'/signin'}> Log in </Link></p> */}
            </div>
    </div>
    )

}

export default PayementMethod;
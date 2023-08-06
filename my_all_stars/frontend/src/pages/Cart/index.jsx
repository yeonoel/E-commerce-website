import React from "react";
import '../../styles/Cart.css';
import location_icon from '../../assets/location_icon.png';
import user_icon from '../../assets/user_icon.png';
import cargo_icon from '../../assets/cargo_icon.png';
import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector(state => state.cart);

    return (
        <div className="containerCart">
            <div className="cart_fisrtSection">
                <div className="customerInfo">
                    <div className="imgContainer">
                        <img src={user_icon} alt=""/>
                    </div>
                    <div className="customertext">
                        <h4> Order to</h4>
                        <div className="customertext">
                            <p>Light</p>
                            <p>pevo@gmoll.com</p>
                        </div>
                    </div>
                </div>

                <div className="OrderInfo">
                    <div className="imgContainer">
                        <img src={cargo_icon} alt="" />
                    </div>
                    <div className="customertext">
                        <h4> Delivery to</h4>
                        <div className="customertext">
                            <p>Light</p>
                            <p>pevo@gmoll.com</p>
                        </div>
                    </div>
                </div>

                <div className="DeliveryInfo">
                    <div className="imgContainer">
                        <img src={location_icon} alt=""/>
                    </div>
                    <div className="customertext">
                        <h4> Custome</h4>
                        <div className="customertext">
                            <p>Light</p>
                            <p>pevo@gmoll.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart_secondSection">
                {
                    cartItems.map((shoe) => (
                        <div key={shoe.id} className="cart_ShoesSelected">
                            <div>
                                <img src={shoe.image} alt="" />
                            </div>
                            <div>
                                <h3>{shoe.name} </h3>
                            </div>
                            <div>
                                <h3>Quantity</h3>
                                <p>{}</p>
                            </div>
                            <div>
                                <h3>SubTotal</h3>
                            </div>
                    </div>
                    ))
                }

                <div className="cart_orderRecap">

                </div>

            </div>

        </div>
    )
}

export default Cart;
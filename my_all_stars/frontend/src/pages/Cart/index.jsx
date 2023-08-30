import React from "react";
import '../../styles/Cart.css';
import { useSelector } from "react-redux";
import { removefromCart, addToCart } from "../../store";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Store } from 'react-notifications-component';

import { datas } from "../../datas";
import { Link, useParams } from "react-router-dom";


const Cart = () => {

    const [quantity, setQuantity] = useState({});
    const sizeSelected = {};

    const { id } = useParams();

    let cartItemsCount = 0; // Obtenir le nombre de produits dans le panier du client
    const cartItems = useSelector(state => state.cart);

    for (const shoe of cartItems ) {
        for (const size in shoe.sizeSelected) {
            cartItemsCount += shoe.sizeSelected[size]
        }
    } 
    
    const dispatch = useDispatch();
    const shoe = datas.find(shoe => shoe.id === parseInt(id));
    

    const quantityInfe = (shoeId, size) => {

        setQuantity((prevQuantities) => {
            const newQuantities = { ...prevQuantities};
            newQuantities[size] = (newQuantities[size] || 0) - 1;
            return newQuantities;
        });

        Store.addNotification({
        
            message: "Product removed from cart",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
            });

            
            shoe.sizes.forEach((size) => {
                if(quantity[size] && quantity[size] > 0) {
                    sizeSelected[size] = quantity[size];
                    
                };
            });
            const shoeWithsizeSelected = {
                ...shoe,
                sizeSelected,
            };

            console.log(shoeWithsizeSelected)

            const shoeWithsizeSelectedId =  shoeWithsizeSelected.id;
            console.log(shoeWithsizeSelectedId)
        dispatch(removefromCart(shoeId, size));
    }



    const quantitySup = (shoeId, size) => {

        Store.addNotification({
        
            message: "Product removed from cart",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
            });
        
        setQuantity((prevQuantities) => {
            const newQuantities = { ...prevQuantities};
            newQuantities[size] = (newQuantities[size] || 0) + 1;
            console.log(quantity)
            return newQuantities;
        });


        
        sizeSelected[size] = (sizeSelected[size] || 0) + 1;

         
            const shoeWithsizeSelected = {
                ...shoe,
                sizeSelected,
            };
            dispatch(addToCart(shoeWithsizeSelected, shoeId, size));
        
        
    }

    const handleRemoveShoes = () => {

    }

    return (
        <div className="containerCart">
            
                    <div className="cart_fisrtSection_totalItem">
                        Total cart produits ({cartItemsCount})
                    </div>
                
            <div className="cart_secondSection">
                {
                    cartItems.map((shoe) => (
                        <div key={shoe.id} className="cart_ShoesSelected">
                            <button onClick={() => handleRemoveShoes} className="removeShoes"> X </button>
                            <div className="cartImgItem">
                                <img src={shoe.image} alt="" />
                            </div>
                            <div>
                                <h3 className="shoe_name">{shoe.name} </h3>
                            </div>
                            <div>
                            <h3>Size and Quantity</h3>
                            {
                                Object.keys(shoe.sizeSelected).map((size) => (
                                    <div key={size} className="quantityControl">
                                        <p>{size}</p>
                                        <div className="quantityButtons">
                                            <button onClick={() => quantityInfe(shoe.id, size)} className="btnQuantity" disabled={shoe.sizeSelected[size] <= 0}>
                                                -
                                            </button>
                                            <span className="qtity">{shoe.sizeSelected[size]}</span>
                                            <button onClick={() => quantitySup(shoe.id, size)} className="btnQuantity">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                            <div>
                                <div>

                                </div>
                                <h3>SubTotal</h3>
                                {
                                    Object.keys(shoe.sizeSelected).map((size) => (
                                        <div key={size} className="amount">
                                             $ {shoe.sizeSelected[size] * shoe.amount }
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                    ))
                }

                <div>
                    {
                        cartItems.length !== 0 && (
                            <div>
                                <div className="cart_orderRecap">
                                 Total:
                                </div>
                                <div className="btns_continue_checkout">
                                    <Link to={'/'} className="btn_continue">CONTINUE TO SHOPPING</Link> <Link to={'/signIn'}  className="btn_checkout">CHECKOUT</Link>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}

export default Cart;
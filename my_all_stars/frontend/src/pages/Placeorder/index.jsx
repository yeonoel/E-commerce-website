import React from "react";
import '../../styles/Placeorder.css';
import location_icon from '../../assets/location_icon.png';
import user_icon from '../../assets/user_icon.png';
import cargo_icon from '../../assets/cargo_icon.png';
import { useSelector } from "react-redux";
import { removefromCart, addToCart } from "../../store";

import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Store } from 'react-notifications-component';

import { datas } from "../../datas";
import { useParams } from "react-router-dom";


const Placeorder = () => {

    const [quantity, setQuantity] = useState({});
    const sizeSelected = {};
    const fraislivraison = 100;
    const { id } = useParams();

    const cartItems = useSelector(state => state.cart);
    let cartItemsCount = 0; // Obtenir le nombre de produits dans le panier du client
    const [total, setTotal] = useState(0);
    useEffect(() => {
        console.log("Cart items after dispatch:", cartItems);
        let newTotal = 0;

        for (const shoe of cartItems) {
            for (const size in shoe.sizeSelected) {
                newTotal += shoe.sizeSelected[size] * shoe.amount; // Calcul du sous-total pour chaque taille
            }
        }

        setTotal(newTotal); // Mettre à jour le total
    }, [cartItems]);

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
            
                <div className="cart_fisrtSection">
                <div className="customerInfo">
                    <div className="imgContainer">
                        <img src={user_icon} alt=""/>
                    </div>
                    <div className="customertext">
                        <h4> Order to</h4>
                        <div className="">
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
                        <h4> Info order</h4>
                        <div className="">
                            <p>payement method</p>
                            <p className="customertextPlastchild">Not pay</p>
                        </div>
                    </div>
                </div>

                <div className="DeliveryInfo">
                    <div className="imgContainer">
                        <img src={location_icon} alt=""/>
                    </div>
                    <div className="customertext">
                        <h4> Delivery To</h4>
                        <div className="">
                            <p>Adresse </p>
                            <p className="customertextPlastchild">Not delivery </p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="placeorderbigsecondsection">
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
                    </div>
                
                    <div className="cartResumeContainer" >
                        <div className="cartResumecontent">
                            <h4> CART RESUME</h4>
                            <div className="cartResumebody">
                                <div className="onecartResumeitem"> <p>Total Article <i>({cartItemsCount})</i></p> <span>$ {total}</span></div>
                                <div className="onecartResumeitem"> <p>Frais de livraison</p> <span> {fraislivraison}</span></div>
                                <div className="onecartResumeitem"> <p>Total</p> <span>$ {total + fraislivraison}</span></div>
                            </div>
                            <div className="btn_conatiner">
                                <button className="resumeBtn">
                                    Buy by Paypal
                                </button>
                            </div>
                        </div>
                        
                    </div>
            
            </div>
           
            

        </div>
    )
}

export default Placeorder;
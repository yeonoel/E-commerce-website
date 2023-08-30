import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { datas, review } from "../../datas";
import { useDispatch } from "react-redux";
import { addToCart, removefromCart } from "../../store";
import 'react-toastify/dist/ReactToastify.css';
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import '../../styles/Shoe.css'



const Shoe = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState({});
    const [openPopup, setOpenPopup] =  useState(false)
    const sizeSelected = {};

    const shoe = datas.find(shoe => shoe.id === parseInt(id));
    const reviewsShoe = review.filter(review => review.idShoe === parseInt(id));
    

    const dispatch = useDispatch();
    const handleOutsideClick = (e) => {
        if (openPopup && !e.target.closest(".popup")) {
            setOpenPopup(false)
        }
    }
    const handleClickSize = () => {
        setOpenPopup(true);
    }

    const handleAddToCart = () => {
        setOpenPopup(true);
      };

    const renderSartRating = (rating) => {
        const stars = [];
        while ( rating > 0 ) {
            stars.push("⭐");
            rating --;
        }

        return stars;
    }

    const closePopup = ()  => {
        setOpenPopup(false)
    }

    // const submitComment = (e) => {
    //     e.preventDefault();

    // }
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

    return (
        <div onClick={handleOutsideClick} className="containerShoe">
            <ReactNotifications />
            <section className="firstSection">
                <div className="ShoeContent">
                    <div className="shoeImgContent">
                        <div className="shoeImg">
                            <img src={shoe.image}  alt="destination page"/> 
                        </div>
                    </div>
                    <div className="shoeBody">
                        <div>
                            <h3 className="shoeTitle">{shoe.name}</h3>
                            <p></p>
                            <p className="shoeDescription">{shoe.description}</p>
                        </div>
                        <div>
                            <p className="status">InStock <span>{}</span></p>
                            <p className="amounrPrince">{shoe.amount}</p>
                            
                                <div className="containerSizeQuantity">
                                    <p>Size EUR:</p>
                                    <div className="sizeQuantity">

                                    {
                                        shoe.sizes.map((size) => (
                                                <div onClick={() => handleClickSize()} className="shoeSizeContent">
                                                    <div className="shoeSizeitem">
                                                        {size}
                                                    </div>
                                                </div>
                                                
                                        ))
                                    }
                                </div> 
                                    <section>
                                        {
                                            openPopup && (
                                                <div className="popup_overlay">
                                                    <div  className="popup">
                                                        <span>Choose Size and Quantity</span>
                                                     <span className="close-icon" onClick={closePopup}>×</span>

                                                        {
                                                            shoe.sizes.map((size) => (
                                                                <div className="popupShoeSizeContent">
                                                                    <div className="popupShoeSizeitem">
                                                                        {size}
                                                                    </div>
                                                                    <div className="shoeQuantityContent">
                                                                        {
                                                                            quantity[size] ? (

                                                                                <button onClick={() => quantityInfe(shoe.id, size)} className="btnQuantity" disabled={quantity[size] <= 0}> 
                                                                                - 
                                                                                </button>
                                                                            ) : (
                                                                                <button  onClick={() => quantityInfe(shoe.id ,size)} className="zeroQuantity" disabled={true}> 
                                                                                - 
                                                                                </button>
                                                                            )
                                                                        }

                                                                        {
                                                                            shoe.sizeSelected[size] ? (
                                                                                 <span > {(shoe.sizeSelected[size])} </span> 

                                                                            ) : (
                                                                                <span > {(quantity[size] ||  0)} </span> 
                                                                            )
                                                                        }


                                                                        <button onClick={() => quantitySup(shoe.id, size)} className="btnQuantity"> 
                                                                        + 
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                
                                                                
                                                        ))
                                                        }
                                                        <div className="popupBtnsAfterQuantyAndSize">
                                                            <button className="btnshop btncontinueShop">
                                                                Continue your shopping
                                                            </button>
                                                            <button className=" btnShop BtnFinalizeOrder">
                                                                Finalize the order
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </section>
                                </div>

                        </div>

                        <div className="containerBtnAddToCard">
                            <button onClick={() => handleAddToCart()} className="btnAddToCard"> Add To Card</button>
                        </div>
                        
                    </div>
                    
                </div>

                
            </section>
            <section className="containerDetails">
                <h2>
                    Details
                </h2>
                <div className="detailsText">
                    <p>

                        Ceci est une paire de chaussures qui permet aux gens de concentrer leurs yeux..
                        La conception confortable de la tête ronde le rend facile à porter et s'adapte à vos pieds. L'embout anti-collision offre une expérience confortable. La tige est en tissu respirant, confortable et doux, qui a un effet léger et absorbant les chocs. La doublure intérieure des chaussures est conçue avec des trous d'aération, ce qui rend les pieds respirants et respirants. La semelle en caoutchouc de haute qualité adopte une conception de texture antidérapante, résistante à l'usure et difficile à glisser. Le corps de la chaussure est composé d'un matériau de surface brillant épissé, qui reflète différentes combinaisons de couleurs sous différentes lumières. C'est à la mode et accrocheur. Il convient parfaitement aux hommes qui recherchent une tendance et un design de personnalité unique. La doublure intérieure est en tissu respirant, ce qui la rend facile à porter et à faire de l'exercice.
                        Cette paire de chaussures convient à tous les hommes, avec une personnalité à la mode et des couleurs assorties à la mode, une finition de haute qualité et un incontournable pour les hommes à la mode.


                    </p>
                    <br></br>
                    <br></br>

                    Style : Casual，<br></br>
                    Matériau principal : textile + cuir de haute qualité.<br></br>
                    Caractéristiques : Confortable，Durable，Très cool.<br></br>
                    Occasions : Sports、Décontractés、Bureau、Extérieur、Rencontres、Tous les jours、Shopping.<br></br>
                    Tableau des tailles<br></br>
                    38/240 mm<br></br>
                    39/245 mm<br></br>
                    40/250 mm<br></br>
                    41/255 mm<br></br>
                    42/260 mm<br></br>
                    43/265 mm<br></br>
                    44/270 mm<br></br>
                    Conseils : Ces chaussures sont dans des tailles EUR standard, veuillez choisir votre taille avec ce tableau des tailles de chaussures, merci !<br></br>

                    <br></br>
                    <br></br>
                    <br></br>

                    Garantie d'achat en toute sécurité. <br></br>
                    Service client 7 jours x 24 heures.<br></br>
                    Service VIP Jumia Express gratuit，Profitez d'une arrivée rapide, d'une livraison sous 1 à 3 jours.<br></br>
                    Service VIP Jumia Express gratuit，Profitez de la protection des colis pour éviter la perte de marchandises.<br></br>
                    <br></br><br></br>
                </div>

            </section>
            <section className="containerComments">
                <h2> Verified customer reviews </h2>
                <div className="allComments">
                    
                    {
                        reviewsShoe.map((rew) => (
                           <div key={rew.id} className="commentItem">
                                <h3> <span> {rew.firstname[0].toUpperCase()} </span> {rew.firstname}</h3>
                                <p>{rew.reviewText}</p>
                                <p>{renderSartRating(rew.rating)}</p>
                           </div>
                        ))
                    }
                </div>
                {/* <div className="letComments">
                    <h3> Laissez un commentaire </h3>
                    <textarea name="" id="inputComment" cols="30" rows="10"></textarea>
                    <button className="submitComment" onSubmit={submitComment}> Submit</button>
                </div> */}
            </section>
        </div>
    )
}

export default Shoe;





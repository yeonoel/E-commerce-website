import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { datas, review } from "../../datas";
import '../../styles/Shoe.css'

const Shoe = () => {
    const { id } = useParams();
    const [quantity1, setQUantity1] = useState(0);
    const [quantity2, setQUantity2] = useState(0);
    
    console.log(id)
    const shoe = datas.find(shoe => shoe.id === parseInt(id));
    const reviewsShoe = review.filter(review => review.idShoe === parseInt(id));

    console.log(reviewsShoe)

    const quantityInfe1 = (e) => {
        e.preventDefault();
        setQUantity1(quantity1 - 1)
    }

    const quantitySup1 = (e) => {
        e.preventDefault();
        setQUantity1(quantity1 + 1);
    }

    const quantityInfe2 = (e) => {
        e.preventDefault();
        setQUantity2(quantity2 - 1)
    }

    const quantitySup2 = (e) => {
        e.preventDefault();
        setQUantity2(quantity2 + 1);
    }
    return (
        <div className="containerShoe">
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
                                        <div className="shoeSizeContent">
                                            <div className="shoeSizeitem">
                                                33-34
                                            </div>
                                        </div>
                                        <div className="shoeQuantityContent">
                                            <button onClick={quantityInfe1} className="btnQuantity"> - </button> <span>{quantity1}</span>  <button onClick={quantitySup1} className="btnQuantity"> + </button>
                                        </div>

                                    </div>
                                    <div className="sizeQuantity">
                                        <div className="shoeSizeContent">
                                            <div className="shoeSizeitem">
                                                41-42
                                            </div>
                                        </div>
                                        <div className="shoeQuantityContent">
                                            <button onClick={quantityInfe2} className="btnQuantity"> - </button> <span>{quantity2}</span>  <button onClick={quantitySup2} className="btnQuantity"> + </button>
                                        </div>

                                    </div>

                                </div>

                            
                             
                        </div>

                        <div className="containerBtnAddToCard">
                            <button className="btnAddToCard"> Add To Card</button>
                        </div>
                        
                    </div>
                    
                </div>

                
            </section>
            <section className="containerComments">
                <div className="allComments">
                    
                    {
                        reviewsShoe.map((rew) => (
                           <div key={rew.id}>
                                <h3>{rew.firstname}</h3>
                                <p>{rew.reviewText}</p>
                                <p>{rew.rating}</p>

                           </div>  
                        ))
                    }
                </div>
                    <div className="letComments">

                    </div>
                    <h3> Commenraires </h3>
            </section>
        </div>
    )
}

export default Shoe;
import React from "react";
import { useParams } from "react-router-dom";
import { datas, review } from "../../datas";
import '../../styles/Shoe.css'

const Shoe = () => {
    const { id } = useParams();
    console.log(id)
    const shoe = datas.find(shoe => shoe.id === parseInt(id));
    const reviewShoe = review.find(review => review.idShoe === parseInt(id));

    console.log(reviewShoe);
    
    console.log(shoe);
    return (
        <div className="containerShoe">
            <section className="firstSection">
                <div className="ShoeContent">
                    <div>
                        <div className="shoeImg">
                            <img src={shoe.image}  alt="destination page"/>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="shoeBody">
                        <div>
                            <h3>{shoe.name}</h3>
                            <p></p>
                            <p>{shoe.description}</p>
                        </div>
                        <div>
                            <p>Price <span>{shoe.amount}</span></p>
                            <p>Status <span>{shoe.amount}</span></p>
                            <p>Price <span>{shoe.amount}</span></p>

                        </div>
                        
                    </div>
                    
                </div>

                <section className="review">
                    <h3> Commenraires</h3>
                </section>
            </section>

        </div>
    )
}

export default Shoe;
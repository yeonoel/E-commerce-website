import React from "react";
import '../../styles/Shoes.css'
import { Link } from "react-router-dom";


const Shoes = ({ _id, name, amount, review, image }) => {
    return (                
        <div className="allShoesContainer">
            <div className="shoesBody">
                        <Link to={`/shoe/${_id}`}>
                            <div className="shoesImg">
                                <img src={image} alt={`shoes: ${name}`} />
                            </div>
                        </Link>
                        <div className="shoesContent">
                            <div className="shoesTitle">
                                {name}
                            </div>
                            <div className="shoesReview">
                                {review} review <i></i>
                            </div>
                            <div className="shoesAmount">
                                {amount} $
                            </div>

                        </div>
                    </div>
            </div>
    )
}

export default Shoes;
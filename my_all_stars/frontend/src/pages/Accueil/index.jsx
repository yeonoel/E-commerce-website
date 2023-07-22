import React from "react";
import { datas } from "../../datas";
import Shoes from "../Shoes";
import '../../styles/Accueil.css'
import Bande from "../../components/Bande";
import Infos from "../../components/Infos";

const Accueil = () => {
    return (
        <div>
            <div className="containerShoes">
            
            {
                datas.map((elem) => (
                    <div key={elem.id} className="shoesBody">
                        <Shoes 
                            _id={elem.id}
                            name={elem.name}
                            amount={elem.amount}
                            image={elem.image}
                            review={elem.review}
                        />
                    </div>
                ))
            }

        </div>
        <div>
            <Bande />
        </div>
        <div>
            <Infos />
        </div>
        </div>
    )
}

export default Accueil;
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from '../../assets/logo.png';
import card from '../../assets/card.png'
import styled from 'styled-components'
import '../../styles/Header.css'

const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;

`
const BodyHeader = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
`
const ContainerImg = styled.div`
    height: 60px;
    width: 60px;
`
// Utilisez une balise `img` avec un style
const ImgLogo = styled.img`
    width: 100%;
    height: 100%;
`
const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

`
const InputSearch = styled.input`
    width: 70%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #000;

`
const ContainerSign = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SignLink = styled.a`
    cursor: pointer;
`

const SearchBtn =  styled.button`
    width: 70px;
    boder-radius: 3px;
    border: 3px solid #EB455F;
    height: 40px;
    background : #EB455F;
    color: #fff;
    margin-left: 5px;
`
const CardIcon = styled.div`
    display: flex;
`

const Header = () => {

    const cartItems = useSelector(state => state.cart);
    let cartItemsCount = 0; // Obtenir le nombre de produits dans le panier du client

    for (const shoe of cartItems ) {
        for (const size in shoe.sizeSelected) {
            cartItemsCount += shoe.sizeSelected[size]
        }
    }
    console.log(cartItems);
    

    return (
        <ContainerHeader>
           <BodyHeader>
                <ContainerImg>
                        {/* Utilisez le composant ImgLogo ici */}
                        <Link to={'/'}> <ImgLogo src={logo} alt="logo" /> </Link>
                </ContainerImg>
                <ContainerInput>
                        <InputSearch 
                        id="input"
                        type="text" />
                        <SearchBtn> Search </SearchBtn>
                </ContainerInput>
                <ContainerSign>
                    <SignLink > <Link to={"/signin"}> Sign In</Link> </SignLink>
                    <SignLink > <Link to={"/signup"}> Sign Up </Link></SignLink>
                </ContainerSign>
                
                <CardIcon>
                <img src={card}   alt="card Icon" /> 
                <Link className="cartLink" to={'/cart'}>
                    {cartItemsCount}
                </Link>
                </CardIcon>
           </BodyHeader>
        </ContainerHeader>
    )
}

export default Header;
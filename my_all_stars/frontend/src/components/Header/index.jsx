import React from "react";
import { useSelector } from "react-redux";

import logo from '../../assets/logo.png';
import card from '../../assets/card.png'
import styled from 'styled-components'

const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;

`
const BodyHeader = styled.div`
    width: 70%;
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
    height: 30px;
    border-radius: 4px;
    border: 1px solid #000;

`
const ContainerSign = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SignLink = styled.a`
    
`

const SearchBtn =  styled.button`
    width: 70px;
    boder-radius: 3px;
    border: 3px solid #EB455F;
    height: 30px;
    background : #EB455F;
    color: #fff;
    margin-left: 5px;
`
const CardIcon = styled.div`
    display: flex;
`
const CardItemNumber = styled.span`
    color: red;
    margin-top: -15px;
    margin-left: -10px;
`
const Header = () => {

    const cartItems = useSelector(state => state.card);
    const cartItemsCount = cartItems.length; // Obtenir le nombre de produits dans le panier
    return (
        <ContainerHeader>
           <BodyHeader>
                <ContainerImg>
                        {/* Utilisez le composant ImgLogo ici */}
                        <ImgLogo src={logo} alt="logo" />
                </ContainerImg> 
                <ContainerInput>
                        <InputSearch 
                        id="input"
                        type="text" />
                        <SearchBtn> Search </SearchBtn>
                </ContainerInput>
                <ContainerSign>
                    <SignLink to="/signin">SignIn</SignLink>
                    <SignLink to="/singup">SignUp</SignLink>
                </ContainerSign>
                <CardIcon>
                <img src={card}   alt="card Icon" /> <CardItemNumber>{cartItemsCount}</CardItemNumber>
                </CardIcon>
           </BodyHeader>
        </ContainerHeader>
    )
}

export default Header;
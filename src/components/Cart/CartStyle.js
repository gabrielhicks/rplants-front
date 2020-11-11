import styled from 'styled-components'
import { Link } from 'react-router-dom';

const CartWrapper = styled.div`
    h4 {
        color:rgba(57, 54, 38, 1);
        padding-top: 1vh;
        padding-left: 5vw;
        padding-bottom: 2vh;
        font-size: 4rem;
        font-weight: normal;
    }
    position: relative;
    top: 0;
    bottom: 0;
    ${'' /* height: 100vh; */}
    z-index: 0;
    background-image: url("https://i.ibb.co/BVLGr4Z/Final-40.png");
    background-attachment: fixed;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 700px) {
        background-size: 100vh;
        }
    }
`

const CartStyle = styled.section`
    min-height: 100vh;
    color:rgba(57, 54, 38, 1);
`

const EmptyCart = styled.p`
    font-size: 2rem;
    padding-left: 5vw;
    padding-top: 1vw;
    min-height: 100vh;
    color:rgba(57, 54, 38, 1);
`

const Total = styled.p`
    color:rgba(57, 54, 38, 1);
    font-size: 2rem;
    margin-left: 70vw;
    @media screen and (max-width: 926px) {
        margin-left: 50vw;
    }
`

const CheckoutLink = styled(Link)`
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    padding: 11px 40px;
    color: #fff;
    outline: none;
    position: relative;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(181, 181, 161, 1);
        color: rgba(57, 54, 38, 1);
    }
    &:active {
        letter-spacing: 0.5px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    }
    bottom: 27px;
    margin-left: 5vw;
`

const SignUpLink = styled(Link)`
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    padding: 11px 40px;
    color: #fff;
    outline: none;
    position: relative;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(181, 181, 161, 1);
        color: rgba(57, 54, 38, 1);
    }
    &:active {
        letter-spacing: 0.5px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    }
    bottom: 27px;
    margin-left: 1vw;
`

export {CartWrapper, CartStyle, EmptyCart, Total, CheckoutLink, SignUpLink}


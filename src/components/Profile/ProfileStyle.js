import styled from 'styled-components'

export const PurchaseWrapper = styled.div`
    color:rgba(57, 54, 38, 1);
    position: relative;
    top: 0;
    bottom: 0;
    height: 100vh;
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

export const OrderHistory = styled.p`
    color:rgba(57, 54, 38, 1);
    padding-top: 1vh;
    padding-left: 5vw;
    padding-bottom: 2vh;
    font-size: 4rem;
    font-weight: normal;
`

export const LastOrderTitle = styled.p`
    font-size: 2rem;
    padding-left: 5vw;
    padding-bottom: 2vh;
`

export const LastOrder = styled.section`
    margin-bottom: 2vh;
`

export const AllOrders = styled.p`
`
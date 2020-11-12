import styled from 'styled-components'
import L from 'leaflet'


const WelcomeStyle = styled.div`
    background-image: url("https://i.ibb.co/Gd9hVxM/Final-2.png");
    background-attachment: fixed;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 700px) {
        background-size: 100vh;
    }

`

// const WelcomeStyle = styled.div`
//     height: 100vh;
//     min-height: 500px;
//     background-image: url("https://i.ibb.co/Gd9hVxM/Final-2.png");
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     background-size: cover;
//     background-color: #1d3557;
// `

const StoreButton = styled.button`
    opacity: 0.8;
    box-shadow: 8px 8px 8px -6px rgba(0,0,0,.3);
    background-color: rgba(239, 234, 225, 0.9);
    height: 10vh;
    border-radius: 8px;
    width: 25vw;
    border: none;
    cursor: pointer;
    outline: none;
    margin-bottom: 2vh;
    margin-top: 0px;
    margin-left: 38vw;
    p.button-text {
        opacity: 0.8;
        font-size: 2rem;
    }
    &:active {
        letter-spacing: 0.5px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    }
    @media screen and (max-width: 700px) {
        font-size: 20px;
        margin-top: 0px;
        margin-bottom: 3vh;
        margin-left: 26vw;
        height: 100px;
        width: 50vw;
        &:hover {
            color: rgba(255, 255, 255, 0.8);
            background: rgba(181, 181, 161, 0.8);
            border-radius: 0;
            transition: all 0.2s ease-out;
        }
    }
    &.active {
        color: rgba(57, 54, 38, 0.8);
    }
    &:hover {
        color: rgba(255, 255, 255, 0.8);
        background-color: rgba(100, 114, 97, 0.8);
        border-radius: 4px;
        transition: all 0.2s ease-out;
    }
`

const BottomWrapper = styled.section`
    background-color: rgba(255, 255, 255, 0.6);
    min-height: 50vh;
`

const TopWrapper = styled.section`
    background-color: rgba(255, 255, 255, 0.6);
    min-height: 50vh;
    text-align: inline;
    p {
        font-size: 2vw;
    }
    p span {
        color: rgba(255, 255, 255, 1);
        font-size: 20vw;
        opacity: 1;
        margin-left: 13vw;
        margin-bottom: 0;
    }
    h3 {
        text-align: center;
        font-weight: normal;
        font-size: 1.8rem;
        opacity: 0.7;
    }

    h3 span {
        margin-left: 15px;
    }

    b {
        color: rgba(248, 148, 25, 1);
    }

    td {
        cursor: pointer;
    }

    section.fair-trade {
        padding-bottom: 10px;
        padding-top: 10px;
    }

    @media screen and (max-width: 700px) {
        section.fair-trade {
            padding-left: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
`

const MapWrapper = styled.section`
    min-height: 50vh;
    ${'' /* background-color: rgba(149, 176, 113, 0.3); */}
    background-color: rgba(100, 114, 97, 0.8);
`

const LandingImg = styled.section`
    background-image: url('https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600%2Cc_limit/Osofsky_Oct19-571.jpg');
    background-repeat: no-repeat;
    background-position: middle center;
    background-size: 100vw;
    width: 100vw;
    height: 500px;
    display: flex;
    ${'' /* object-fit: cover; */}
    opacity: 0.7;
    &:hover {
        right: 0;
        opacity: 0.7;
    }
`

const MapStyle = styled.div`
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    position: absolute;
    left: 25vw;
    pointer-events: none;
    @media screen and (max-width: 926px) {
        left: 0;
    }
`

const iconPlant = new L.Icon({
    iconUrl: 'https://i.ibb.co/6FHrspB/redresize.png',
    iconSize: [39.6, 45],
    // className: 'leaflet-div-icon'
})

export {WelcomeStyle, TopWrapper, BottomWrapper, MapStyle, iconPlant, LandingImg, MapWrapper, StoreButton}
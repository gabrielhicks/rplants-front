import styled from 'styled-components'
import L from 'leaflet'


const WelcomeStyle = styled.div`
    background-image: url('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F02%2Fsculptural-houseplants-intro-getty-0220.jpg&q=85');
    background-attachment: fixed;
    background-size: cover;
    background-position: top center;
    }
`

const StoreButton = styled.button`
    background-color: rgba(239, 234, 225, 0.9);
    height: 10vh;
    border-radius: 8px;
    width: 400px;
    border: none;
    cursor: pointer;
    outline: none;
    position: absolute;
    margin-top: 75px;
    margin-left: 15px;
    @media screen and (max-width: 768px) {
        margin-top: 20px;
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
    height: 50vh;
`

const TopWrapper = styled.section`
    background-color: rgba(255, 255, 255, 0.9);
    display: flex-column;
    align-items: center;
    height: 50vh;
    text-align: inline;
    h1 {
        padding-top: 20px;
        font-size: 6.0em;
        color: rgba(57, 54, 38, 1);
        @media screen and (max-width: 768px) {
            font-size: 4em;
            padding-top: 30px;
        }
    }
    h1 span {
        background-color: rgba(255, 255, 255, 0.9);
        margin-left: 15px;
    }
    h3 {
        padding-top: 5px;
    }

    h3 span {
        background-color: rgba(255, 255, 255, 0.9);
        margin-left: 15px;
    }

    b {
        color: rgba(248, 148, 25, 1);
    }

    td {
        cursor: pointer;
    }

    section.fair-trade {
        padding-top: 10px;
    }

    @media screen and (max-width: 768px) {
        section.fair-trade {
            padding-left: 10px;
            padding-top: 110px;
        }
    }
`

const MapWrapper = styled.section`
    height: 50vh;
    background-color: rgba(255, 255, 255, 0.9);
`

const LandingImg = styled.section`
    ${'' /* background-image: url('https://media.timeout.com/images/100442633/image.jpg'); */}
`

const MapStyle = styled.div`
    position: absolute;
    left: 25vw;
    pointer-events: none;
    @media screen and (max-width: 768px) {
        left: 0;
    }
`

const iconPlant = new L.Icon({
    iconUrl: 'https://i.ibb.co/6FHrspB/redresize.png',
    iconSize: [39.6, 45],
    // className: 'leaflet-div-icon'
})

export {WelcomeStyle, TopWrapper, BottomWrapper, MapStyle, iconPlant, LandingImg, MapWrapper, StoreButton}
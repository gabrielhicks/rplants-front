import styled from 'styled-components'

const PlantContainerStyle = styled.div`
    display: flex;
    ${'' /* background-color: rgba(0,255,255,1); */}
    flex-flow: row wrap;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    padding: 10px;
    height: 100%;
    @media (max-width: 900px) {
        flex-direction: row;
        align-content: flex-start;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        align-content: center;
    }
}
`

const FilterWrapper = styled.div`
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    height: 25px;
    width: 600px;
`

const StoreWrapper = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    width: 100vw;
    z-index: 0;
    background-image: url("https://i.ibb.co/Gd9hVxM/Final-2.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 700px) {
        background-size: 100vh;
        }
    }
`

export {PlantContainerStyle, FilterWrapper, StoreWrapper}
import styled from 'styled-components'

const PlantStyle = styled.div`
    padding: 10px;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    width: 175px;
    height: 200px;
`   

const PlantImage = styled.img`
    max-width: 100px;
    display: block;
`

export {PlantImage, PlantStyle}

import styled from 'styled-components'

export const SearchStyle = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const FilterWrapper = styled.div`
    display: relative;
    height: 100%;
    margin: auto;
    max-width: 30vw;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;O
    flex-direction: row;
    justify-content: center;
    align-content: center;
    padding: 10px;
    @media (max-width: 900px) {
        max-width: 60vw;
    }
`
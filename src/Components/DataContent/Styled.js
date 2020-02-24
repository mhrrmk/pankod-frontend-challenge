import styled from "styled-components"

export const InputsWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

export const CardsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;

@media (max-width: 700px) {
    justify-content: space-evenly;
}
`
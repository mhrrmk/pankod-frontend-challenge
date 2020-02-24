import styled from "styled-components"

export const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: flex-start;
margin-top: 24px;
margin-bottom: 24px;
`
export const CardImage = styled.div`
margin-bottom: 11px;
width: 134px;
height: 201px;
background-color: rgba(0, 0, 0, 0);;
background-image: url(${props => props.cover});
background-size: 134px 201px;
background-repeat: no-repeat;
background-position: center center;
`

export const CardText = styled.div`
width: 110px;
font-family: Raleway;
font-size: 13px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #1e1e1e;
`
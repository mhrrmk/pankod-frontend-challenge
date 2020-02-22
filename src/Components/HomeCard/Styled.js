import styled from "styled-components"

export const HomeCardWrapper = styled.div`
margin-right: 13px;
display: flex;
flex-direction: column;

&:hover {
    cursor: pointer;
}
`

export const HomeCardText =styled.div`
font-family: Raleway;
font-size: 13px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #1e1e1e;
`

export const HomeCardImage = styled.div`
margin-bottom: 9px;
height: 204px;
width: 137px;
background-color: #1e1e1e;
font-family: Raleway;
font-size: 27px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #fdfdfd;
height: 204px;
display: flex;
align-items: center;
justify-content: center;
background-image: url(/assets/placeholder.png);
background-repeat: no-repeat;
background-position: center center;
`
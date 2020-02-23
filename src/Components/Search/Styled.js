import styled from "styled-components"

export const SearchInput = styled.input`
box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.18);
border: solid 0 #b6b6b6;
background-color: #ffffff;
padding-left: 15px;
padding-top: 6px;
flex-grow: 1;
font-family: Raleway;
font-size: 13px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
&::placeholder{
    color: #b4b4b4;
}
`

export const SearchWrapper = styled.div`
width: 432px;
display: flex;
`

export const SearchButton = styled.div`
width: 63px;
height: 37px;
border: solid 0 #b6b6b6;
background-color: #017efe;
display: flex;
align-items: center;
justify-content: center;
flex-grow: 0;
`

export const SearchIcon = styled.img`
width: 25px;
height: 25px;
background-color: #ffffff;
`
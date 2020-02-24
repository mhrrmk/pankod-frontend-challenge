import styled from "styled-components"

export const SocialButtonWrapper = styled.div`
width: 30px;
height: 30px;
margin-right: 20px;
background-size: 30px 30px;
background-image: url(${props => props.srcc});
&:hover {
    background-image: url(${props => props.srcHover});
}
`



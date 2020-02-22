import styled from "styled-components"
import { Content } from "../Styled"

export const HeaderContent = styled(Content)`
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const HeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
min-height: 61px;
box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.66);
background-color: #017efe;
`

export const HeaderText = styled.div`
padding-left: 3px;
font-family: Raleway;
font-size: 33px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #fdfdfd;
`

export const HeaderButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const Login = styled.a`
width: 69px;
height: 14px;
font-family: Raleway;
font-size: 14px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #fdfdfd;
`

export const TrialWrapper = styled.a`
width: 156px;
height: 37px;
background-color: #424242;
display: flex;
align-items: center;
`

export const TrialText = styled.div`
margin-left: 16px;
width: 156px;
height: 14px;
font-family: Raleway;
font-size: 14px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #fdfdfd;
`
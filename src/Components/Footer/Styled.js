import styled from "styled-components"
import { Content } from "../Styled"

export const FooterWrapper = styled.div`
flex-grow: 0;
min-height: 125px;
display: flex;
padding-bottom: 48px;
padding-top: 44px;
background-color: #1e1e1e;
align-self: stretch;
`

export const FooterContent = styled(Content)`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const FooterTextContent = styled.div`
margin-bottom: 48px;
`

export const FooterLinks = styled.div`
display: flex;
margin-bottom: 20px;
flex-wrap: wrap;
`

export const Copyright = styled.div`
font-family: Raleway;
font-size: 12px;
font-weight: 300;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #babfc3;
`

export const FooterButtons = styled.div`
display: flex;
justify-content: space-between;
`

export const Social = styled.div`
display: flex;
`

export const Store = styled.div``
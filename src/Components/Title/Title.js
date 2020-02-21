import React from "react"
import {Content} from "../Styled"
import {StyledTitle, TitleText} from "./styled"

// const Content = styled.div`
//     width: 100%;
//     margin-left: 128px;
//     margin-right: 128px;
// `

export function Title({ children }) {

    return (
        <StyledTitle>
            <Content>
                <TitleText>
                    {children}
                </TitleText>
            </Content>
        </StyledTitle>
    )
}
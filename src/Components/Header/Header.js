import React from "react"
import {
    HeaderWrapper,
    HeaderContent,
    HeaderText,
    HeaderButtons,
    Login,
    Trial
} from "./Styled"

export function Header() {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderText>DEMO Streaming</HeaderText>
                <HeaderButtons>
                    <Login>Log in</Login>
                    <Trial>Start Your Free Trial</Trial>
                </HeaderButtons>
            </HeaderContent>
        </HeaderWrapper>
    )
}
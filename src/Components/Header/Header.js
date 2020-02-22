import React from "react"
import {
    HeaderWrapper,
    HeaderContent,
    HeaderText,
    HeaderButtons,
    Login,
    TrialWrapper,
    TrialText
} from "./Styled"

export function Header() {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderText>DEMO Streaming</HeaderText>
                <HeaderButtons>
                    <Login>Log in</Login>
                    <TrialWrapper>
                        <TrialText>Start Your Free Trial</TrialText>
                    </TrialWrapper>
                </HeaderButtons>
            </HeaderContent>
        </HeaderWrapper>
    )
}
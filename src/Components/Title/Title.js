import React from "react"
import { TitleWrapper, TitleText, TitleContent } from "./styled"

export function Title({ children }) {

    return (
        <TitleWrapper>
            <TitleContent>
                <TitleText>
                    {children}
                </TitleText>
            </TitleContent>
        </TitleWrapper>
    )
}
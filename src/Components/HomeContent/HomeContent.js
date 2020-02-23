import React from "react"
import {HomeContentWrapper, HomeStyledContent} from "./Styled"

export function HomeContent(props) {
    return (
        <HomeContentWrapper>
            <HomeStyledContent>
                {props.children}
            </HomeStyledContent>
        </HomeContentWrapper>
    )
}
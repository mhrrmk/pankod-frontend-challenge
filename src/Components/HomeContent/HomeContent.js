import React from "react"
import {ContentWrapper, ContentContent} from "./Styled"

export function HomeContent(props) {
    return (
        <ContentWrapper>
            <ContentContent>
                {props.children}
            </ContentContent>
        </ContentWrapper>
    )
}
import React from "react"
import { FooterLinkWrapper, Seperator } from "./Styled"

export function FooterLink({ title, link, last }) {
    return (
        <FooterLinkWrapper>
            <a href={link}>{title}</a>
            {
                !last ?
                <Seperator>|</Seperator> :
                null
            }

        </FooterLinkWrapper>
    )
}
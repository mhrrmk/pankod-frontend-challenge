import React from "react"
import {
    FooterWrapper,
    FooterContent,
    FooterTextContent,
    FooterLinks,
    Copyright,
    FooterButtons,
    Social,
    Store
} from "./Styled"
import {SocialButton, StoreButton, FooterLink} from ".."
import {copyright, footerLinks} from "../../Constants"

export function Footer(props) {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterTextContent>
                    <FooterLinks>
                        {footerLinks.map((item, i, array) => (
                            i !== array.length - 1 ?
                            <FooterLink key={i} title={item.title} link={item.link}/> :
                            <FooterLink key={i} title={item.title} link={item.link} last={true}/>
                        ))}
                    </FooterLinks>
                    <Copyright>{copyright}</Copyright>
                </FooterTextContent>
                <FooterButtons>
                    <Social>
                        <SocialButton src="/assets/social/facebook-white.svg" />
                        <SocialButton src="/assets/social/instagram-white.svg" />
                        <SocialButton src="/assets/social/twitter-white.svg" />
                    </Social>
                    <Store>
                        <StoreButton src="/assets/store/app-store.svg" />
                        <StoreButton src="/assets/store/play-store.svg" />
                        <StoreButton src="/assets/store/windows-store.svg" />
                    </Store>
                </FooterButtons>
            </FooterContent>
        </FooterWrapper>
    )
}
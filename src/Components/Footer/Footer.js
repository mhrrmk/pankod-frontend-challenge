import React from "react"
import {
    FooterWrapper,
    FooterContent
} from "./Styled"

export function Footer(props) {
    return (
        <FooterWrapper>
            <FooterContent>
                <div className="footer-text-content">
                    <div className="footer-links">
                        <a className="footer-link-item">Home</a>
                        <span className="footer-link-item">|</span>
                        <a className="footer-link-item">Terms and Conditions</a>
                        <span className="footer-link-item">|</span>
                        <a className="footer-link-item">Privacy Policy</a>
                        <span className="footer-link-item">|</span>
                        <a className="footer-link-item">Collection Statement</a>
                        <span className="footer-link-item">|</span>
                        <a className="footer-link-item">Help</a>
                        <span className="footer-link-item">|</span>
                        <a className="footer-link-item">Manage Account</a>
                    </div>
                    <div className="copyright">Copyright © 2016 DEMO Streaming. All Rights Reserved.</div>
                </div>
                <div className="footer-buttons">
                    <div className="social">
                        <img className="footer-social-button-item" src="/assets/social/facebook-white.svg" />
                        <img className="footer-social-button-item" src="/assets/social/instagram-white.svg" />
                        <img className="footer-social-button-item" src="/assets/social/twitter-white.svg" />
                    </div>
                    <div className="store">
                        <img className="footer-store-button-item" src="/assets/store/app-store.svg" />
                        <img className="footer-store-button-item" src="/assets/store/play-store.svg" />
                        <img className="footer-store-button-item" src="/assets/store/windows-store.svg" />
                    </div>
                </div>
            </FooterContent>
        </FooterWrapper>
    )
}
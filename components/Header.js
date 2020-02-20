import React from "react"

export function Header(props) {
    return (
        <div className="header">
            <div className="content header-content">
                <div className="DEMO-Streaming">DEMO Streaming</div>
                <div className="header-buttons">
                    <a className="login">login</a>
                    <a className="trial">
                        <div className="trial-text">Start Your Free Trial</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
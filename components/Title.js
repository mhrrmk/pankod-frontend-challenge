import React from "react"

export function Title({ children }) {

    return (
        <div className="title">
            <div className="title-text">
                {children}
            </div>
        </div>
    )
}
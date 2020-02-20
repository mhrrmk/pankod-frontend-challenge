import React from "react"

export function Title({ children }) {

    return (
        <div className="title">
            <div className="title-text">
                {children}
            </div>
            {/* <style jsx>{`
            width: 1280px;
            height: 59px;
            box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.66);
            background-color: #414141;
            font-family: Raleway;

            span {
                width: 184px;
                height: 24px;
                
                font-size: 24px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #fdfdfd;
            }
            `}</style> */}
        </div>
    )
}
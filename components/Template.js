import React from "react"
import {Header, Footer} from "."

export function Template({children}){
    return (
        <div className="container">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
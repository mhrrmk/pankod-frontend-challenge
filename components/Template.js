import React from "react"
import Head from 'next/head';
import {Header, Footer} from "."

export function Template({children}){
    return (
        <div className="container">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
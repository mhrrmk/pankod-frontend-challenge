import React from "react"
import Head from 'next/head';
import {Header, Footer} from "../"
import {TemplateWrapper} from "./Styled"

export function Template({children}){
    return (
        <TemplateWrapper>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </TemplateWrapper>
    )
}
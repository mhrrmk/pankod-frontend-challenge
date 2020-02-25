import React from "react"
import { Template, Title, MainContentContainer } from "../src/Components"

export default function Movies() {
    return (
        <Template>
            <Title>Popular Movies</Title>
            <MainContentContainer type="movie"/>
        </Template>
    )
}
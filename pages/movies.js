import React from "react"
import { Template, Title, SeriesMoviesContent } from "../src/Components"

export default function Movies() {
    return (
        <Template>
            <Title>Popular Movies</Title>
            <SeriesMoviesContent type="movie"/>
        </Template>
    )
}
import React from "react"
import { Template, Title, HomeContent, HomeCard } from "../src/Components"

export default function Home() {
    return (
        <Template>
            <Title>Popular Titles</Title>
            <HomeContent>
                <HomeCard title="series" href="/series" />
                <HomeCard title="movies" href="/movies" />
            </HomeContent>
        </Template>
    )
}
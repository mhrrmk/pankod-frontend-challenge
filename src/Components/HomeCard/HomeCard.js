import React from "react"
import Link from 'next/link'
import { HomeCardImage, HomeCardText, HomeCardWrapper } from "./Styled"
import { capitalizeFirstLetter } from "../../Utils"

export function HomeCard(props) {
    return (
        <Link href={props.href} passHref>
            <HomeCardWrapper>
                <HomeCardImage>
                    {props.title.toUpperCase()}
                </HomeCardImage>
                <HomeCardText>
                    Popular {capitalizeFirstLetter(props.title)}
                </HomeCardText>
            </HomeCardWrapper>
        </Link>
    )
}
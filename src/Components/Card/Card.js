import React from "react"
import {CardWrapper, CardImage, CardText} from "./Styled"

export function Card({item}){
    return (
        <CardWrapper>
            <CardImage cover={item.images["Poster Art"].url}/>
            <CardText>{item.title} </CardText>
        </CardWrapper>
    )
}
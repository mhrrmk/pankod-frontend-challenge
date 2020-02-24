import React from "react"
import { InputsWrapper, CardsWrapper } from "./Styled"
import { useContentState } from "../../State"
import { Search, Sort, Card } from "../"
import {calculateShown} from "../../Utils"

export const ContentContext = React.createContext([])

export function DataContent({ data }) {
    console.log("data: ", data)
    const [state, dispatch, actions, sortOptions] = useContentState()
    console.log("filtered data: ", calculateShown(data, state.input, state.sortOption))
    return (
        <>
            <InputsWrapper>
                <ContentContext.Provider value={[dispatch, actions, sortOptions]}>
                    <Search />
                    <Sort />
                </ContentContext.Provider>
            </InputsWrapper>
            <CardsWrapper>
                {calculateShown(data, state.input, state.sortOption).map(itemData => (
                    <Card item={itemData}/>
                ))}
            </CardsWrapper>
        </>
    )
}
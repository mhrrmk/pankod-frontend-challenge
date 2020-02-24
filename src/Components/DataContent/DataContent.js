import React from "react"
import { InputsWrapper, CardsWrapper } from "./Styled"
import { useContentState } from "../../State"
import { Search, Sort, Card } from "../"
import {calculateShown} from "../../Utils"

export const ContentContext = React.createContext([])

export function DataContent({ data }) {
    const [state, dispatch, actions, sortOptions] = useContentState()
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
                    <Card key={itemData.title} item={itemData}/>
                ))}
            </CardsWrapper>
        </>
    )
}
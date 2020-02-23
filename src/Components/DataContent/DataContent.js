import React from "react"
import { InputsWrapper } from "./Styled"
import { useContentState } from "../../State"
import { Search, Sort } from "../"

export const ContentContext = React.createContext([])

export function DataContent({ data }) {
    console.log("data: ", data)
    const [state, dispatch, actions, sortOptions] = useContentState()
    return (
        <>
            <InputsWrapper>
                <ContentContext.Provider value={[dispatch, actions, sortOptions]}>
                    <Search />
                    <Sort />
                </ContentContext.Provider>
            </InputsWrapper>
            <div>{state.input}</div>
            <div>{state.sortOption}</div>
            {/* <DataWrapper>
                {calculateShown(data, state.input, state.sortOption).map(dataItem => (
                    <Card data={dataItem}/>
                ))}
            </DataWrapper> */}
        </>
    )
}
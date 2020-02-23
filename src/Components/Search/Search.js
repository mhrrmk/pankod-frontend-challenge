import React, { useContext } from "react"
import { SearchWrapper, SearchInput, SearchIcon, SearchButton } from "./Styled"
import { ContentContext } from "../DataContent"

export function Search(props) {
    const [dispatch, actions] = useContext(ContentContext)

    const handleChange = e => {
        const input = e.target.value
        if (input.length > 3) {
            dispatch({ type: actions.CHANGE_INPUT, payload: e.target.value })
        } else {
            dispatch({ type: actions.CHANGE_INPUT, payload: "" })
        }
    }

    return (
        <SearchWrapper>
            <SearchInput
                type="text"
                placeholder="Search..."
                onChange={handleChange} />
            <SearchButton>
                <SearchIcon
                    src="/assets/search.svg" />
            </SearchButton>
        </SearchWrapper>
    )
}
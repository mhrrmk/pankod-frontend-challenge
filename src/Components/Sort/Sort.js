import React, {useContext} from "react"
import {Select} from "./Styled"
import {ContentContext} from "../DataContent"

export function Sort(props) {
    const [dispatch, actions, sortOptions] = useContext(ContentContext)
    console.log("[Sort]", "actions: ", actions, "sortOptions: ", sortOptions)

    const handleChange = e => {
        console.log("[Sort] event", e.target.value)
        dispatch({type: actions.SET_SORT, payload: e.target.value})
    }

    return (
        <Select onChange={handleChange}>
            <option value={sortOptions.ASC_TITLE}>Ascending by Title</option>
            <option value={sortOptions.DSC_TITLE}>Descending by Title</option>
            <option value={sortOptions.ASC_YEAR}>Ascending by Year</option>
            <option value={sortOptions.DSC_YEAR}>Descending by Year</option>
        </Select>
    )
}
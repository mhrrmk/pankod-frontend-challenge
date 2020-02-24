import {useReducer} from "react"

export const sortOptions = {
    ASC_TITLE: "asc_title",
    DSC_TITLE: "dsc_title",
    ASC_YEAR: "asc_year",
    DSC_YEAR: "dsc_year"
}
const initialState = {
    input: "",
    sortOption: sortOptions.ASC_TITLE
}

const actions = {
    CHANGE_INPUT: "change_input",
    SET_SORT: "set_sort"
}

function reducer(state, action){
    switch(action.type){
        case actions.CHANGE_INPUT:
            return {
                ...state,
                input: action.payload
            }
        case actions.SET_SORT:
            return {
                ...state,
                sortOption: action.payload
            }
    }
}

export function useContentState(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch, actions, sortOptions]
}
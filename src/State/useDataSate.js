import {useReducer} from "react"

const dataStates = {
    loading: "loading",
    error: "error",
    fetched: "fetched"
}

const initialState = {
    dataState: dataStates.loading,
    data: []
}

const actions = {
    SET_DATA: "set_data",
    SET_ERROR: "set_error"
}

function reducer(state, action){
    switch(action.type){
        case actions.SET_DATA:
            return {
                dataState: dataStates.fetched,
                data: action.payload
            }
        case actions.SET_ERROR:
            return {
                dataState: dataStates.error,
                data: []
            }
    }
}

export function useDataState(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch, actions, dataStates]
}
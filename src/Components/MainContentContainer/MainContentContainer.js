import React, { useEffect } from "react"
import { MainContentContainerWrapper, MainContentContainerStyledContent } from "./Styled"
import { fetchData, isBiggerThan2010 } from "../../Utils"
import { DataContent } from "../"
import { useDataState } from "../../State"

export function MainContentContainer({ type }) {

    const [state, dispatch, actions, dataStates] = useDataState()

    useEffect(() => {
        async function fetchMovies() {
            try {
                const fetchedData = await fetchData(type)
                dispatch({ type: actions.SET_DATA, payload: fetchedData })
            } catch (error) {
                console.log(error)
                dispatch({ type: actions.SET_ERROR })
            }
        }
        fetchMovies()
    }, [])

    return (
        <MainContentContainerWrapper>
            <MainContentContainerStyledContent>
                {state.dataState === dataStates.fetched &&
                    <DataContent data={state.data.filter(isBiggerThan2010)} />}
                {state.dataState === dataStates.loading &&
                    <div>loading...</div>}
                {state.dataState === dataStates.error &&
                    <div>Oops... Something went wrong. You hit a 30% prabability. Refresh page :{")"}</div>}
            </MainContentContainerStyledContent>
        </MainContentContainerWrapper>
    )
}
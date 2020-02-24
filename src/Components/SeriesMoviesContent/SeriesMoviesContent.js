import React, { useEffect } from "react"
import { SeriesMoviesContentWrapper, SeriesMoviesStyledContent } from "./Styled"
import { fetchData, BiggerThan2010 } from "../../Utils"
import { DataContent } from "../"
import { useDataState } from "../../State"

export function SeriesMoviesContent({ type }) {
    console.log("type:", type)

    const [state, dispatch, actions, dataStates] = useDataState()
    console.log("DataState: ", state)

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
        <SeriesMoviesContentWrapper>
            <SeriesMoviesStyledContent>
                {state.dataState === dataStates.fetched &&
                    <DataContent data={state.data.filter(BiggerThan2010)} />}
                {state.dataState === dataStates.loading &&
                    <div>loading...</div>}
                {state.dataState === dataStates.error &&
                    <div>Oops... Something went wrong. You hit a 30% prabability. Refresh page :{")"}</div>}
            </SeriesMoviesStyledContent>
        </SeriesMoviesContentWrapper>
    )
}
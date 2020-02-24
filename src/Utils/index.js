import feed from "../../public/feed/sample.json"
import {sortOptions} from "../State/useContentState"

export function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substring(1)
}

// Simulates a fetch call.
// Returns requested data from sample.json with 1s delay
// Resolves successfully with a probability of 70%
export function fetchData(type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const probability = Math.random()
            if (probability > 0.3) {
                resolve(feed.entries.filter(i => i.programType === type))
            } else {
                reject("fetch failed")
            }
        }, 1000)
    })
}

const isIncluded = (input) => (item) => (
    item.title.toLowerCase().includes(input.toLowerCase())
)

export const isBiggerThan2010 = item => (
    item.releaseYear > 2010
)

const sortByOption = (option, array) => {
    switch(option){
        case sortOptions.ASC_TITLE:
            return [...array].sort((first, second) => (
                first.title < second.title ? -1 : 1
            ))
        case sortOptions.DSC_TITLE:
            return [...array].sort((first, second) => (
                first.title > second.title ? -1 : 1
            ))
        case sortOptions.ASC_YEAR:
            return [...array].sort((first, second) => (
                first.releaseYear - second.releaseYear
            ))
        case sortOptions.DSC_YEAR:
            return [...array].sort((first, second) => (
                -(first.releaseYear - second.releaseYear)
            ))
    }
}

export function calculateShown(data, input, sortOption){
    return sortByOption(sortOption,
                        data.filter(isIncluded(input)))
                        .slice(0, 21)
}
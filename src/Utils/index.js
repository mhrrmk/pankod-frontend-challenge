import feed from "../../public/feed/sample.json"

export function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substring(1)
}

// Simulates a fetch call. Returns sample.json with 1s delay
// Resolves successfully with a probability of 70%
export function fetchData(type){
    switch (type){
        case "movies":
            console.log("fetching movies")
            return new Promise((resolve, reject) => {
                console.log("enter promise")
                setTimeout(() => {
                    console.log("resolve movies")
                    const probability = Math.random()
                    console.log("probability: ", probability)
                    if(probability > 0.3){
                        resolve(feed.entries.filter(i => i.programType === "movie"))
                    }else{
                        reject("fetch failed")
                    }
                }, 1000)
            })
        case "series":
            console.log("fetching series")
            return new Promise((resolve, reject) => {
                console.log("enter promise")
                setTimeout(() => {
                    const probability = Math.random()
                    console.log("probability: ", probability)
                    if(probability > 0.3){
                        resolve(feed.entries.filter(i => i.programType === "series"))
                    }else{
                        reject("fetch failed")
                    }
                }, 1000)
            })
    }
}
import React, { useState } from "react"

function test(props){
    let [state, setState] = useState("lsdflll")

    const handleChange = (e) => {
        setState(e.target.value)
    }

    return (
        <div>
            <input
            onChange={handleChange}
            ></input>
            <span>{state}</span>
        </div>
    )
}

export default test
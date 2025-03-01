import React from "react"
import { useParams } from "react-router-dom"

const Home = () => {

    let {link} = useParams()
    let headingText = `This is ${link} screen`

    return (
        <h1 style={{
            textAlign: "center",
            color: "black",
            margin: "100px"
        }}
        >{headingText}</h1>
    )
}

export default Home
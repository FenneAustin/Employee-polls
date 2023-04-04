import React from "react"
import NavBar from "../../components/navbar/index.js"
import { useParams } from "react-router-dom"

const LandingScreen = () => {

    return (
        <div>
            <NavBar />
            <div>
                <h1>New Questions</h1>

            </div>
            <div>
                <h1>Done</h1>

            </div>
        </div>
    )
}


export default LandingScreen

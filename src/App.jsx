import { TopBar } from "./components/top-bar"
import { MainContent } from "./components/main-content"
import { Cards } from "./components/cards"
import { Footing } from "./components/Footing"
import { useState ,useEffect} from "react"

function App(){
 
    return(
        <div className="container" >
            <TopBar />
            <MainContent />
            <Cards />
            <Footing />

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Your Name Here</a>.
            </div>
        </div>
    )
}

export default App
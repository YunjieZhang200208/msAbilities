import React from "react"
import "../css/forJumbo.css"
import logoTransparent from "../assets/pics/logo-BackgroundTransparent.png"

class Jumbo extends React.Component{
    render(){
        return <div id="jumboWrapper">
            <div id="logoWrapper">
                <img src={logoTransparent}/>
            </div>
            <h1>Etiam sit amet nisl ex.</h1>
        </div>
    }
}

export default Jumbo
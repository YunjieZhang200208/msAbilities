import React from 'react'
import Jumbo from '../components/Jumbo'
import HomePageSections from "../components/HomePageSections"
import CardGroup from "../components/CardGroup"
import "../css/forHomePage.css"

class HomePage extends React.Component {
    render() {
        return <div>
            <Jumbo></Jumbo>
            <CardGroup></CardGroup>
            <div style={{textAlign: "center", margin: "10rem"}}>
                <h1 style={{fontSize: "4.5rem"}}>We are a community built by neurodiverse minds for empowering neurodivergent talent!</h1>
            </div>
            <div id="wrapper1">
                <HomePageSections></HomePageSections>
            </div>
        </div>
    }
}

export default HomePage
import React from 'react'
import Jumbo from '../components/Jumbo'
import HomePageSections from "../components/HomePageSections"
import "../css/forHomePage.css"

class HomePage extends React.Component {
    render() {
        return <div>
            <Jumbo></Jumbo>
            <div id="wrapper1">
                <HomePageSections></HomePageSections>
            </div>
        </div>
    }
}

export default HomePage
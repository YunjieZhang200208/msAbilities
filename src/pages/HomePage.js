import React from 'react'
import Jumbo from '../components/Jumbo'
import HomePageSection from "../components/HomePageSection"
import "../css/forHomePage.css"

class HomePage extends React.Component {
    render() {
        return <div>
            <Jumbo></Jumbo>
            <div id="wrapper1">
                <HomePageSection></HomePageSection>
            </div>
        </div>
    }
}

export default HomePage
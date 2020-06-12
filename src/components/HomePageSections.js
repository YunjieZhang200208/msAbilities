import React from "react"
import "../css/forHomePageSections.css"
import routes from "../assets/data/routes"
import HomePageSection from "./HomePageSection"

class HomePageSections extends React.Component{
    createHomePageSection = (arr, name) => {
        return <HomePageSection forCards={arr} name={name}/>
    }

    createHomePageSections = () => {
        const pageKeys = Object.keys(routes)
        
        return pageKeys.map(ele => {
            if(ele !== "home"){
                return this.createHomePageSection(routes[ele], ele)
            }
        })
    }
    
    render(){
        return <div className="homePageSections">
            {this.createHomePageSections()}
        </div>
    }
}

export default HomePageSections
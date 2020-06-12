import React from "react"
import Tilt from 'react-tilt'
import { Card, Image } from 'semantic-ui-react'
import { BrowserRouter, NavLink, Link } from 'react-router-dom'
import "../css/forHomePageSection.css"

class HomePageSection extends React.Component {
    constructor(props) {
        super(props)
    }

    handleName = (str) => {
        let str1 = str.toUpperCase()
        let str2 = str1.split("").map(ele => {
            if (ele === "_") {
                console.log("found")
                return ele = " "
            } else {
                return ele
            }
        })
        return str2.join("")
    }

    makeCards = (arr) => {
        return arr.map(ele => {
            return <Tilt className="Tilt" style={{ width: "calc(25%)" }} options={{ reverse: true, max: 35, perspective: 1000, scale: 1, speed: 300, transition: true, axis: null, reset: true, easing: "cubic-bezier(.03,.98,.52,.99)", }}>
                    <Card className="Tilt-inner" id="cardsid" to={ele.route} as={Link}>
                        <Image src={ele.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{ele.title}</Card.Header>
                            <Card.Description>
                                {ele.teaser}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Tilt>
        });
    }

    render() {
        let arr = this.props.forCards
        let name = this.props.name
        const processedName = this.handleName(name)
        // console.log(arr)
        return <div style={{ borderBottom: "1px solid #efefef", paddingBottom: "2em" }}>
            <h1 id="titleForSection">{processedName}</h1>
            <Card.Group itemsPerRow={4}>
                {this.makeCards(arr)}
            </Card.Group>
        </div>
    }
}

export default HomePageSection
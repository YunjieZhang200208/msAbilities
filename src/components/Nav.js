import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.png'
import "../css/forNav.css"
import { Icon } from 'semantic-ui-react'
import HomePage from '../pages/HomePage'
import CollaborationsPage from "../pages/CollaborationsPage"
import MedalsAndAwardsPage from "../pages/MedalsAndAwardsPage"
import HumanPracticesPage from "../pages/humanPractices/HumanPracticesPage"
import BasicPartsPage from "../pages/parts/BasicPartsPage"
import PartsOverviewPage from "../pages/parts/PartsOverviewPage"
import AttributionPage from "../pages/people/AttributionPage"
import TeamPage from "../pages/people/TeamPage"
import DemonstrationPage from "../pages/projects/DemonstrationPage"
import DescriptionPage from "../pages/projects/DescriptionPage"
import DesignPage from "../pages/projects/DesignPage"
import LabBookPage from "../pages/projects/LabBookPage"
import ModellingPage from "../pages/projects/ModellingPage"
import ResultsPage from "../pages/projects/ResultsPage"
import SafetyPage from "../pages/projects/SafetyPage"
import OutreachAndEngagementPage from '../pages/humanPractices/OurtreachAndEngagementPage'


class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <BrowserRouter>
                <Menu stackable borderless id="topNav">
                    <Menu.Item to="/" as={Link}>
                        <img src={logo} />
                    </Menu.Item>

                    <Menu.Item name='features' active={activeItem === 'features'} onClick={this.handleItemClick} to="/" as={Link}>
                        Home
                    </Menu.Item>

                    <Dropdown item text='Projects'>
                        <Dropdown.Menu>
                            <Dropdown.Item name='description' active={activeItem === 'description'} onClick={this.handleItemClick} to="/Description" as={Link}>Description</Dropdown.Item>
                            <Dropdown.Item name='modelling' active={activeItem === 'modelling'} onClick={this.handleItemClick} to="/Modelling" as={Link}>Modelling</Dropdown.Item>
                            <Dropdown.Item name='design' active={activeItem === 'design'} onClick={this.handleItemClick} to="/Design" as={Link}>Design</Dropdown.Item>
                            <Dropdown.Item name='safety' active={activeItem === 'safety'} onClick={this.handleItemClick} to="/Safety" as={Link}>Safety</Dropdown.Item>
                            <Dropdown.Item name='labBook' active={activeItem === 'labBook'} onClick={this.handleItemClick} to="/Lab-Book" as={Link}>Lab Book</Dropdown.Item>
                            <Dropdown.Item name='demonstration' active={activeItem === 'demonstration'} onClick={this.handleItemClick} to="/Demonstration" as={Link}>Demonstration</Dropdown.Item>
                            <Dropdown.Item name='results' active={activeItem === 'results'} onClick={this.handleItemClick} to="/Results" as={Link}>Results</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown item text='People'>
                        <Dropdown.Menu>
                            <Dropdown.Item name='team' active={activeItem === 'description'} onClick={this.handleItemClick} to="/Team" as={Link}>Team</Dropdown.Item>
                            <Dropdown.Item name='attribution' active={activeItem === 'protocols'} onClick={this.handleItemClick} to="/Attribution" as={Link}>Attribution</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown item text='Parts'>
                        <Dropdown.Menu>
                            <Dropdown.Item name='partsOverview' active={activeItem === 'partsOverview'} onClick={this.handleItemClick} to="/Parts-Overview" as={Link}>Parts Overview</Dropdown.Item>
                            <Dropdown.Item name='basicParts' active={activeItem === 'basicParts'} onClick={this.handleItemClick} to="/Basic-Parts" as={Link}>Basic Parts</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown item text='Human Practices'>
                        <Dropdown.Menu>
                            <Dropdown.Item name='humanPractices' active={activeItem === 'humanPractices'} onClick={this.handleItemClick} to="/Human-Practices" as={Link}>Human Practices</Dropdown.Item>
                            <Dropdown.Item name='outreachAndEngagement' active={activeItem === 'outreachAndEngagement'} onClick={this.handleItemClick} to="/Outreach-and-Engagement" as={Link}>Outreach and Engagement</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item name='medalsAndAwards' active={activeItem === 'medalsAndAwards'} onClick={this.handleItemClick} to="/Medals-and-Awards" as={Link}>
                        Medals and Awards
                    </Menu.Item>

                    <Menu.Item name='collaborations' active={activeItem === 'sign-in'} onClick={this.handleItemClick} position='right' to="/Collaborations" as={Link}>
                        <Icon name="handshake" size="large" />
                        Collaborations
                    </Menu.Item>
                </Menu>
                <Route path = "/" exact={true} component={HomePage} />
                <Route path = "/Description" exact={true} component={DescriptionPage} />
                <Route path = "/Modelling" exact={true} component={ModellingPage} />
                <Route path = "/Design" exact={true} component={DesignPage} />
                <Route path = "/Safety" exact={true} component={SafetyPage} />
                <Route path = "/Lab-Book" exact={true} component={LabBookPage} />
                <Route path = "/Demonstration" exact={true} component={DemonstrationPage} />
                <Route path = "/Results" exact={true} component={ResultsPage} />
                <Route path = "/Team" exact={true} component={TeamPage} />
                <Route path = "/Attribution" exact={true} component={AttributionPage} />
                <Route path = "/Parts-Overview" exact={true} component={PartsOverviewPage} />
                <Route path = "/Basic-Parts" exact={true} component={BasicPartsPage} />
                <Route path = "/Human-Practices" exact={true} component={HumanPracticesPage} />
                <Route path = "/Outreach-and-Engagement" exact={true} component={OutreachAndEngagementPage} />
                <Route path = "/Medals-and-Awards" exact={true} component={MedalsAndAwardsPage} />
                <Route path = "/Collaborations" exact={true} component={CollaborationsPage} />
            </BrowserRouter>
        )
    }
}

export default Nav
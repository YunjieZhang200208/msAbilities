import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import logo from '../assets/logo.png'

class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable>
                <Menu.Item>
                    <img src={logo} />
                </Menu.Item>

                <Menu.Item name='features' active={activeItem === 'features'} onClick={this.handleItemClick}>
                    Features
                </Menu.Item>

                <Dropdown item name='display-options' text='Display Options'>
                    <Dropdown.Menu>
                        <Dropdown.Item>Small</Dropdown.Item>
                        <Dropdown.Item>Medium</Dropdown.Item>
                        <Dropdown.Item>Large</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
                    Sign-in
                </Menu.Item>
            </Menu>
        )
    }
}

export default Nav
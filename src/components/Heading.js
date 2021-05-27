import React, {Component, Fragment} from 'react'
import {Link} from "react-router-dom"
import {
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    NavLink} from 'reactstrap'


export default class extends Component {
    render() {
        return (
            <Fragment>
                <Navbar color="light" light expand="md" id="navigation">
                    <NavbarBrand><Link to="/"><img
                        src="https://fontmeme.com/permalink/180608/a61485dcad61e605f496571c49054d2f.png"
                        alt="Josh Riches"/></Link></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem ><NavLink id="nav-i" tag={Link} to="/contact">Contact</NavLink></NavItem>
                        <NavItem ><NavLink id="nav-i" tag={Link} to="/projects">Projects</NavLink></NavItem>
                        <NavItem>
                            <NavLink target="_blank" href="https://github.com/Yosh23">
                                <img height="60em" src={require("../resources/pictures/github")} alt="github"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink target="_blank" href="https://www.linkedin.com/in/josh-riches/">
                                <img height="60em" src={require("../resources/pictures/linkedin.png")} alt="linkedin"/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Fragment>
        )
    }
}
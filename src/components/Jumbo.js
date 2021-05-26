import React, {Component, Fragment} from 'react'
import {Jumbotron,Button,Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import {Link} from "react-router-dom"
import {
    NavLink} from 'reactstrap'


import tic from '../resources/pictures/tttimg.png'
import jumpstart from '../resources/pictures/jumpstart.png'
import calendar from '../resources/pictures/calendar.png'


export default class extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <Jumbotron>
                        <h2 className="display-1">Welcome!</h2>
                        <p className="display-4 ">I am a Front End Developer trying to develop my Back End but
                            apparently I'm not doing enough Squats <span role="img" aria-label="Lauging">&#128514;</span></p>
                    </Jumbotron>
                    <h1>Favorite Projects</h1>
                    <div className="cardsContainer">
                    <Card>
                        <CardImg src={tic} alt="Tic-Tac-Toe"/>
                        <CardBody>
                            <CardTitle>Tic-Tac-Toe</CardTitle>
                            <CardSubtitle>React.js and Material.ui</CardSubtitle>
                            <Button target="_blank" href="https://joshtictactoe.netlify.com/">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg  src={calendar} alt="Calendar"/>
                        <CardBody>
                            <CardTitle>Calendar</CardTitle>
                            <CardSubtitle>Javascript/Html/Css</CardSubtitle>
                            <Button target="_blank" href="https://tvillecwall.netlify.app/">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg src={jumpstart} alt="Jumpstart Landing Page"/>
                        <CardBody>
                            <CardTitle>Jumpstart Landing Page</CardTitle>
                            <CardSubtitle>jQuery/Html/Css/Bootstrap</CardSubtitle>
                            <Button target="_blank" href="https://yosh23.github.io/jumpstart/">Check it out</Button>
                        </CardBody>
                    </Card>
                    </div>
                    <div className="container">
                    <NavLink tag={Link} to="/projects"><Button target="_blank" href="Projects" id="custom-btn">Rest of my Projects</Button></NavLink>
                    </div>
                </section>
            </Fragment>
        )
    }
}
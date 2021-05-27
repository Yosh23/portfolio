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
                            <CardTitle id="title">Tic-Tac-Toe</CardTitle>
                            <CardSubtitle id="sub">React.js and Material.ui</CardSubtitle>
                            <Button target="_blank" href="https://joshtictactoe.netlify.com/" id="card-btn">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg  src={calendar} alt="Calendar"/>
                        <CardBody>
                            <CardTitle id="title">Calendar</CardTitle>
                            <CardSubtitle id="sub">Javascript/Html/Css</CardSubtitle>
                            <Button target="_blank" href="https://tvillecwall.netlify.app/" id="card-btn">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg src={jumpstart} alt="Jumpstart Landing Page"/>
                        <CardBody>
                            <CardTitle id="title">Jumpstart Landing Page</CardTitle>
                            <CardSubtitle id="sub">jQuery/Html/Css/Bootstrap</CardSubtitle>
                            <Button target="_blank" href="https://yosh23.github.io/jumpstart/" id="card-btn">Check it out</Button>
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
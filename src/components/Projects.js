import React, {Component, Fragment} from 'react'
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

import tic from '../resources/pictures/tttimg.png'
import match from '../resources/pictures/match.png'
import jumpstart from '../resources/pictures/jumpstart.png'
import track from '../resources/pictures/trackster.png'
import calendar from '../resources/pictures/calendar.png'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <div className="cardsContainer">
                    <Card width="6em">
                        <CardImg top width="100%" src={tic} alt="Tic-Tac-Toe"/>
                        <CardBody>
                            <CardTitle id="title">Tic-Tac-Toe</CardTitle>
                            <CardSubtitle id="sub">React.js and Material.ui</CardSubtitle>
                            <Button target="_blank" href="https://joshtictactoe.netlify.com/" id="card-btn">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card width="6em">
                        <CardImg top width="100%" height="50em" src={match} alt="Match Game"/>
                        <CardBody>
                            <CardTitle id="title">Match Game</CardTitle>
                            <CardSubtitle id="sub">jQuery/Html/Css</CardSubtitle>
                            <Button target="_blank" href="https://yosh23.github.io/match/" id="card-btn">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card width="6em">
                        <CardImg top width="100%" height="50em" src={jumpstart} alt="Jumpstart Landing Page"/>
                        <CardBody>
                            <CardTitle id="title">Jumpstart Landing Page</CardTitle>
                            <CardSubtitle id="sub">jQuery/Html/Css/Bootstrap</CardSubtitle>
                            <Button target="_blank" href="https://yosh23.github.io/jumpstart/" id="card-btn">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card width="6em">
                        <CardImg top width="100%" height="50em" src={track} alt="Trackster"/>
                        <CardBody>
                            <CardTitle id="title">Trackster</CardTitle>
                            <CardSubtitle id="sub">jQuery/Html/Css</CardSubtitle>
                            <Button target="_blank" href="https://yosh23.github.io/trackster/" id="card-btn">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card width="6em">
                        <CardImg top width="100%" height="50em" src={calendar} alt="Calendar"/>
                        <CardBody>
                            <CardTitle id="title">Calendar</CardTitle>
                            <CardSubtitle id="sub">Javascript/Html/Css</CardSubtitle>
                            <Button target="_blank" href="https://tvillecwall.netlify.app/" id="card-btn">Check it out</Button>
                        </CardBody>
                    </Card>
                </div>
            </Fragment>
        )
    }
}
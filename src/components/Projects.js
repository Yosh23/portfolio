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
                            <CardTitle>Tic-Tac-Toe</CardTitle>
                            <CardSubtitle>React.js and Material.ui</CardSubtitle>
                            <Button target="_blank" href="https://joshtictactoe.netlify.com/">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card width="6em">
                        <CardImg top width="100%" height="50em" src={match} alt="Match Game"/>
                        <CardBody>
                            <CardTitle>Match Game</CardTitle>
                            <CardSubtitle>jQuery/Html/Css</CardSubtitle>
                            <Button target="_blank" href="https://yosh23.github.io/match/">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card width="6em">
                        <CardImg top width="100%" height="50em" src={jumpstart} alt="Jumpstart Landing Page"/>
                        <CardBody>
                            <CardTitle>Jumpstart Landing Page</CardTitle>
                            <CardSubtitle>jQuery/Html/Css/Bootstrap</CardSubtitle>
                            <Button target="_blank" href="https://yosh23.github.io/jumpstart/">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card width="6em">
                        <CardImg top width="100%" height="50em" src={track} alt="Trackster"/>
                        <CardBody>
                            <CardTitle>Trackster</CardTitle>
                            <CardSubtitle>jQuery/Html/Css</CardSubtitle>
                            <Button target="_blank" href="https://yosh23.github.io/trackster/">Check it out</Button>
                        </CardBody>
                    </Card>
                    <Card width="6em">
                        <CardImg top width="100%" height="50em" src={calendar} alt="Calendar"/>
                        <CardBody>
                            <CardTitle>Calendar</CardTitle>
                            <CardSubtitle>Javascript/Html/Css</CardSubtitle>
                            <Button target="_blank" href="https://tvillecwall.netlify.app/">Check it out</Button>
                        </CardBody>
                    </Card>
                </div>
            </Fragment>
        )
    }
}
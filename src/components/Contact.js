import React, { Component, Fragment } from 'react'
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap'



export default class extends Component {
    state = {

    }

    render () {
        return (
            <Fragment>
                <div className="cardsContainer">
                    <Card>
                        <CardBody>
                            <CardTitle>
                            Contact Me!
                            </CardTitle>
                            <CardSubtitle><p >Phone: <a href="tel:8016186904" class="link">801-618-6904</a></p></CardSubtitle>
                            <CardSubtitle><p >Email: <a href="mailto: joshriches@gmail.com" class="link">joshriches@gmail.com</a></p></CardSubtitle>
                        </CardBody>
                    </Card>
                </div>   
            </Fragment>
        )
    }
}
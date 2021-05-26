import React, { Component, Fragment } from 'react'
import {Card} from 'reactstrap'


export default class extends Component {
    state = {

    }

    render () {
        return (
            <Fragment>
                <div class="contact-section">
                    <Card class="center">
                    <h3>
                    Contact Me!
                    </h3>
                    <p>Phone: <a href="tel:8016186904">801-618-6904</a></p>
                    <p>Email: <a href="mailto: joshriches@gmail.com">joshriches@gmail.com</a></p>
                    </Card>
                </div>
            </Fragment>
        )
    }
}
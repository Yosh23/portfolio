import React, {Component, Fragment} from 'react'
import {Jumbotron} from 'reactstrap'
export default class extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <Jumbotron className="">
                        <h2 className="display-1">Welcome!</h2>
                        <p className="display-4 ">I am a Front End Developer trying to develop my Back End but
                            apparently I'm not doing enough Squats </p>
                    </Jumbotron>
                </section>
            </Fragment>
        )
    }
}
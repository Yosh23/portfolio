import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/projects" component={Projects}/>
            </Fragment>
        )
    }
}
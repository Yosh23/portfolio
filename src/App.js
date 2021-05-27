import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Routes'
import Heading from './components/Heading'
import Footer from './components/Footer'
import './App.css'


export default class extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Heading/>
                    <section>
                        <Routes/>
                        
                    </section>
                    <Footer/>
                </Fragment>
            </Router>
        )
    }
}
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from '../LandingPage/landingpagelarge/landing.page.large'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path = "/Portfolio" exact component = {LandingPage}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes
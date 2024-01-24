import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import FAQ from './views/faq'
import Home from './views/home'
import Resources from './views/resources'
import PlansPricing from './views/plans-pricing'
import Portfolio from './views/portfolio'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Contact} exact path="/contact" />
        <Route component={FAQ} exact path="/faq" />
        <Route component={Home} exact path="/" />
        <Route component={Resources} exact path="/resources" />
        <Route component={PlansPricing} exact path="/plans-pricing" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Page} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

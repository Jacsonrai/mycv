import React from'react'
import { Route} from 'react-router-dom'
import LandingPage from './Landingpage'
import {Switch} from 'react-router-dom'
import Resume from './Resume'


import Contact from './Contact'


import About from './About'
import Project from './Project'

const Main=()=>(
    
        <Switch>
    <Route exact path="/" component={LandingPage}></Route>

    <Route exact path="/resume" component={Resume}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/project" component={Project}></Route>
  

</Switch>



)
export default Main;
import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Main from './pages/main'

const Routes = () => (
  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/database" component={Main} />
      
    </Switch>
  
)

export default Routes
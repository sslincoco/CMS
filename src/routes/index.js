import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DynamicLoad from '../components/public/lazyload.js'


export default props => (
  <Switch>
    <Route path='/test' component={DynamicLoad('pages/list')} />
  </Switch>
)
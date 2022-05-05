import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom' // temporary

import Home from './core/Home'
import Users from './user/Users.js'

const MainRouter = () => {
    return ( <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={Users}/>
      </Switch>
      {/* temporary */}
      <Link to="/users">Users</Link>
    </div>
   )
}

export default MainRouter
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom' // temporary

import Home from './core/Home'
import Users from './user/Users.js'
import Signup from './user/Signup.js'
import Signin from './auth/Signin.js'

const MainRouter = () => {
    return ( <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
      </Switch>
      {/* temporary */}
      <Link to="/users">Users</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
    </div>
   )
}

export default MainRouter
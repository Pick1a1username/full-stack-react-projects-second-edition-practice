import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom' // temporary

import Home from './core/Home'
import EditProfile from './user/EditProfile.js'
import Users from './user/Users.js'
import Profile from './user/Profile.js'
import Signup from './user/Signup.js'
import PrivateRoute from './auth/PrivateRoute.js'
import Signin from './auth/Signin.js'
import Menu from './core/Menu.js'

const MainRouter = () => {
    return ( <div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
    </div>
   )
}

export default MainRouter
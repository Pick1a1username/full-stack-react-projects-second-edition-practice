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

const MainRouter = () => {
    return ( <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
      </Switch>
      {/* temporary */}
      <Link to="/users">Users</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/user/6273cba4da402f2eaccc09b1">John Profile</Link>
      <Link to="/user/edit/6273cba4da402f2eaccc09b1">John Edit Profile</Link>
      <Link to="/user/6273cc33da402f2eaccc09b3">Bang Profile</Link>
    </div>
   )
}

export default MainRouter
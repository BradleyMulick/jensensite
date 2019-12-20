import React, {useContext} from 'react';
import './App.css';
import Home from './Home'
import Navbar from "./Navbar";
import About from './About'
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from './Auth.js'
import Profile from './Profile'
import PublicPost from './PublicPost.js'
import {UserContext} from './context/UserProvider'


function App(props) {
  const { token } = useContext(UserContext)
  return (
    <div className="App">
      
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/admin-login" render={rProps => token ? <Redirect to='/public'/> : <Auth {...rProps}/>}/>
        <Route path="/public"  render={rProps => token ? <PublicPost {...rProps}/> : <Redirect to="/"/> }/>
        <Route path="/profile" render={rProps => token ? <Profile {...rProps}/> : <Redirect to="/"/>  }/>
        <button onclick={props.logout}>logout</button>
      </Switch>
      
    </div>
  );
}

export default App;

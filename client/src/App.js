import React, {useContext} from 'react';
import './App.css';
import Home from './Home'
import Navbar from "./Navbar";
import About from './About'
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from './Auth.js'
import PublicPost from './PublicPost.js'
import {UserContext} from './context/UserProvider'


function App() {
  const { token } = useContext(UserContext)
  return (
    <div className="App">
      {/* { token && <Navbar} */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/admin-login" render={rProps => token ? <Redirect to='/public'/> : <Auth {...rProps}/>}/>
        <Route path="/public" render={rProps => <PublicPost {...rProps}/> }/>
      </Switch>
      
    </div>
  );
}

export default App;

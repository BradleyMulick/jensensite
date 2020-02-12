import React from 'react';
import './App.css';
import Home from './Home'
import Navbar from "./Navbar";
import About from './About'
import Contact from './Contact'
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>

      </Switch>
      
    </div>
  );
}

export default App;

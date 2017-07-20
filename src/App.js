import React, { Component } from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../src/components/navbar'
import main from '../src/components/main'
import matchingContainer from '../src/containers/matching'
import questionsContainer from '../src/containers/questions'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Router>
          <div>
            <Route exact path='/' component={main}/>
            <Route path='/match' component={matchingContainer}/>
            <Route path='/questions' component={questionsContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import LearnAbout from './pages/LearnAbout';
import SchoolProfile from './pages/SchoolProfile';
import Search from './pages/Search';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <div>
          <Route exact path='/' component={Landing} />
          <Route path='/learn' component={LearnAbout} />
          <Route path='/schoolprofile' component={SchoolProfile} />
          <Route path='/search' component={Search} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';

//import pages
import HomePage from './components/views/home';
import AboutPage from './components/views/about/index';
import SigninPage from './components/views/account/signin';
import SignupPage from './components/views/account/signup';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/regist">Regist</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        </ul>

        <hr />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/regist" component={SignupPage} />
        <Route path="/signin" component={SigninPage} />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;

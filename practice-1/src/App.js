import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
//import pages
import HomePage from './components/views/home';
import AboutPage from './components/views/about/index';
import SigninPage from './components/views/account/signin';
import SignupPage from './components/views/account/signup';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Customer from './components/models/customer';

class App extends Component {

  render() {
    var customer = new Customer('2','Huy','Nguyen Ngoc');
    return (
      <Router>
        <div className="App">
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">Aboutus</Link>
              <Link className="nav-link" to="/regist">Regist</Link>
              <Link className="nav-link" to="/signin">Signin</Link>
              {/* <Link className="nav-link" to="/signin">{customer.getFullName()}</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/regist" component={SignupPage} />
          <Route path="/signin" component={SigninPage} />

          <div>{customer.getFullName()}</div>
        </div>
        
      </Router>
    );
  }
}

export default App;

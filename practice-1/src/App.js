import React, { Component } from 'react';
import { Navbar,Nav, Container } from 'react-bootstrap';
//fontawesome
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faIgloo } from '@fortawesome/free-solid-svg-icons';


//import pages
import HomePage from './components/views/home';
import ContactPage from './components/views/contact';
import ProductPage from './components/views/products';
//import SigninPage from './components/views/account/signin';
//import SignupPage from './components/views/account/signup';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
//import Customer from './components/models/customer';
//library.add(faIgloo);

class App extends Component {

  render() {
    //var customer = new Customer('2','Huy','Nguyen Ngoc');
    return (
      <Router>
        <div className="App">
         <Container>
         <Navbar  bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">BÁNH TRÁNG TAM QUAN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Trang chủ</Link>
              <Link className="nav-link" to="/san-pham">Sản phẩm</Link>
              <Link className="nav-link" to="/lien-he">Liên hệ</Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            </Navbar.Collapse>
          </Navbar>
         </Container>
          <br/>
          <Route exact path="/" component={HomePage} />
          <Route path="/san-pham" component={ProductPage} />
          <Route path="/lien-he" component={ContactPage} />
        </div>
        
      </Router>
    );
  }
}

export default App;

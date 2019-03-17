import React, { Component } from 'react';
import {Container,Row} from  'react-bootstrap';
import CarouselsModule from '../modules/carousels';

import ProductPage from '../views/products';
import ContactPage from '../views/contact';
class HomeComponent extends Component{
    render() {
        return (
            <Container>
                <CarouselsModule />
                <hr></hr>
                <Row>
                    <ProductPage/>
                </Row>
                <hr></hr>
                <Row>
                    <ContactPage/>
                </Row>
                <br></br>
            </Container>
        );
    }
}

export default HomeComponent;
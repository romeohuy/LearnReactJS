import React, { Component } from 'react';
import {Container,Row,Col,Card} from  'react-bootstrap';
import noImage from '../../noimage.png';
class ProductPage extends Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Cơm cháy khô gà lá chanh</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Cơm cháy khô bò sả ớt</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Cơm cháy sấy tép - chà bông</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Bánh tráng ngào mắm sấy khô gà lá chanh</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Bánh tráng ngào mắm sấy khô bò sả ớt</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Bánh tráng ngào mắm sấy tép - chà bông - mực</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Bánh tráng nước dừa sấy tép bơ hành</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {/* <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Bánh tráng ngào mắm sấy khô bò sả ớt</Card.Title>
                        </Card.Body>
                        </Card> */}
                    </Col>
                    <Col>
                        {/* <Card >
                        <Card.Img variant="top" src={noImage} />
                        <Card.Body>
                            <Card.Title>Bánh tráng ngào mắm sấy tép - chà bông - mực</Card.Title>
                        </Card.Body>
                        </Card> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProductPage;
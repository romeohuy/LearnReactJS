import React, { Component } from 'react';
import {Container,Row,Col} from  'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ContactPage extends Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col xl lg="4"><h4 className="hr-solid">Thông tin liên hệ</h4></Col>
                </Row>
                <Row>
                    <Col><strong>Nguyễn Thị Ngọc Huệ</strong></Col>
                </Row>
                <Row> 
                    <Col><strong>Điện thoại:</strong><span> 097 779 54 16</span></Col>
                </Row>
                <Row> 
                    <Col><strong>Facebook:</strong><span> <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/banhtrangngaomambinhdinh">https://www.facebook.com/banhtrangngaomambinhdinh</a></span></Col>
                </Row>
                <Row> 
                    <Col><strong>Địa chỉ:</strong><span> Chung cư RichStar, 278 Hòa Bình, Phú Thạnh, Tân Phú, Hồ Chí Minh, Vietnam</span></Col>
                </Row>
                {/* <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> */}
            </Container>
        );
    }
}

export default ContactPage;
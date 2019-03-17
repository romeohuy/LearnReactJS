import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import sliderBanhTrang from './../../images/sliders/banh-trang.jpg';
import sliderBanhIt from './../../images/sliders/banh-it-la-gai.jpg';
class CarouselsModule extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={sliderBanhTrang}
                    alt="Bánh tráng nước dừa Tam Quan"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={sliderBanhIt}
                    alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselsModule;
import React, { Component } from 'react';
import Slider from "react-slick";
import backGroundIMG from '../../Assests/images/bg-home.jpg';

export default class UserPromotion extends Component {
    render() {
        let settings = {
            dots: true, 
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
              ]
        };

        return (

            <div className="user--promotion" style={{ backgroundImage: `url(${backGroundIMG})` }}>
                <h3>KHUYẾN MÃI</h3>
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img src={require('../../Assests/images/KM1.png')} alt="" />
                        </div>
                        <div>
                            <img src={require('../../Assests/images/KM2.jpg')} alt="" />
                        </div>
                        <div>
                            <img src={require('../../Assests/images/KM7.jpg')} alt="" />
                        </div>
                        <div>
                            <img src={require('../../Assests/images/KM8.jpg')} alt="" />
                        </div>
                        <div>
                            <img src={require('../../Assests/images/KM9.jpg')} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}

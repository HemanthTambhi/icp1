import React from 'react';
import hero from '../assets/images/hero1.png';
import Slider from "react-slick";

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "400px",
      };
  return (
    <section className="main_banner " id="Hero">
      <div className="container-fluid p-0">
        <div className="hero_slider_section">
        <Slider {...settings}>
            <div className="hero_slider_box">
                <img src={hero} alt="" />
            </div>
            <div className="hero_slider_box">
                <img src={hero} alt="" />
            </div>
            </Slider>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
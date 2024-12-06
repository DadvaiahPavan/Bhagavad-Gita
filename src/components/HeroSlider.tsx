import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/HeroSlider.css';

const slides = [
  {
    image: 'https://i.ibb.co/gR9PRT4/Adobe-Stock-626653757-Preview-1-transformed.jpg',
    title: 'Bhagavad Gita',
    subtitle: 'The Divine Song of God'
  },
  {
    image: 'https://i.ibb.co/9m0jjgw/1731860275330.jpg',
    title: 'Eternal Wisdom',
    subtitle: 'Timeless Teachings for Modern Life'
  },
  {
    image: 'https://i.ibb.co/x67w6X1/Adobe-Stock-936412962-Preview-transformed.jpg',
    title: 'Path to Enlightenment',
    subtitle: 'Journey of Self-Discovery'
  }
];

const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-image">
              <img
                src={slide.image}
                alt={slide.title}
                className="image"
              />
            </div>
            <div className="slide-content">
              <h1 className="title">{slide.title}</h1>
              <p className="subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
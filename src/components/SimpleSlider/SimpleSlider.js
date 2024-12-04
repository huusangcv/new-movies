import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {' '}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
      </svg>
    </div>
  );
}
function SimpleSlider() {
  let sliderRef = useRef();
  var settings = {
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1206,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <a class="cover" href="/movie/the-childe~37757">
            <img
              src="https://image.tmdb.org/t/p/w342/pGDT06SpSbhDXlwnEMinKZblmtj.jpg"
              alt="The Childe"
              title="The Childe"
            />
          </a>
          <h3 class="name">
            <a href="/movie/the-childe~37757">The Childe</a>
          </h3>
        </div>
        <div>
          <a class="cover" href="/movie/the-childe~37757">
            <img
              src="https://image.tmdb.org/t/p/w342/pGDT06SpSbhDXlwnEMinKZblmtj.jpg"
              alt="The Childe"
              title="The Childe"
            />
          </a>
          <h3 class="name">
            <a href="/movie/the-childe~37757">The Childe</a>
          </h3>
        </div>
        <div>
          <a class="cover" href="/movie/the-childe~37757">
            <img
              src="https://image.tmdb.org/t/p/w342/pGDT06SpSbhDXlwnEMinKZblmtj.jpg"
              alt="The Childe"
              title="The Childe"
            />
          </a>
          <h3 class="name">
            <a href="/movie/the-childe~37757">The Childe</a>
          </h3>
        </div>
        <div>
          <a class="cover" href="/movie/the-childe~37757">
            <img
              src="https://image.tmdb.org/t/p/w342/pGDT06SpSbhDXlwnEMinKZblmtj.jpg"
              alt="The Childe"
              title="The Childe"
            />
          </a>
          <h3 class="name">
            <a href="/movie/the-childe~37757">The Childe</a>
          </h3>
        </div>
        <div>
          <a class="cover" href="/movie/the-childe~37757">
            <img
              src="https://image.tmdb.org/t/p/w342/pGDT06SpSbhDXlwnEMinKZblmtj.jpg"
              alt="The Childe"
              title="The Childe"
            />
          </a>
          <h3 class="name">
            <a href="/movie/the-childe~37757">The Childe</a>
          </h3>
        </div>
        <div>
          <a class="cover" href="/movie/the-childe~37757">
            <img
              src="https://image.tmdb.org/t/p/w342/pGDT06SpSbhDXlwnEMinKZblmtj.jpg"
              alt="The Childe"
              title="The Childe"
            />
          </a>
          <h3 class="name">
            <a href="/movie/the-childe~37757">The Childe</a>
          </h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;

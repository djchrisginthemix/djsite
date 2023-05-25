import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import djcgSlide1 from '../assets/images/djcgSlide1.jpg'
import djcgSlide2 from '../assets/images/djcgSlide2.jpg'
import djcgSlide3 from '../assets/images/djcgSlide3.jpg'

const slides = [
  {
    image: djcgSlide1,
    alt: 'Slide 1'
  },
  {
    image: djcgSlide2,
    alt: 'Slide 2'
  },
  {
    image: djcgSlide3,
    alt: 'Slide 3'
  }
]

const FullSlideshow = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  }

  return (
    <div className='djcg-slideshow w-full h-full max-h-50vh'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='slide'>
            <div className='slide'>
              <img
                src={slide.image}
                alt={slide.alt}
                className='w-full h-full object-cover overflow-hidden cursor-none'
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default FullSlideshow

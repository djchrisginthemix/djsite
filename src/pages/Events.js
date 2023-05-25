import React, { useState, useEffect, useCallback } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slider from 'react-slick'
import { projects } from '../partials/ProjectsData' // An array of project data
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Reveal from 'react-awesome-reveal'
import Contact from '../components/Contact'
import Header from '../partials/Header'

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeModalSlide, setActiveModalSlide] = useState(0);

  const openModal = (event, projectIndex) => {
    event.stopPropagation();
    setIsModalOpen(true);
    setActiveModalSlide(projectIndex);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  useEffect(() => {
    const handleModalOutsideClick = (event) => {
      const isClickInsideSlider = event.target.closest('.slick-slider');
      const isClickInsideModalContent = event.target.closest('.modal-content');
      
      if (!isClickInsideSlider && !isClickInsideModalContent) {
        closeModal();
      }
    };
    
  
    if (isModalOpen) {
      document.addEventListener('click', handleModalOutsideClick);
    }
  
    return () => {
      document.removeEventListener('click', handleModalOutsideClick);
    };
  }, [isModalOpen, closeModal]);
  
  

  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <FaAngleLeft className="slick-prev" />,
    nextArrow: <FaAngleRight className="slick-next" />,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          dotsClass: 'slick-dots custom-dots',
        },
      },
    ]
  }

  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100,
  }
  return (
    <div id="Events-page" className="bg-black-asphalt">
      <Header
        title="Events"
        description="Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres"
        image="../assets/images/djcg-logo.png"
        url="https://chrisginthemix.com/events"
      />
      <div className="djcg-events-content max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center">
          <h2 className="djcg-header-2 text-center mt-8 mb-10 sm:mb-12">
            Build With dj Chris G
          </h2>
          <Reveal {...revealSettings}>
            <div className="events-intro text-base sm:text-lg max-w-5xl mx-auto text-center text-gray-500 mb-10 sm:mb-16 md:mb-20 lg:mb-24">
              <p className="mb-5 md:mb-6">
              dj Chris G is a highly experienced DJ with over 10 years of expertise in the realms of dance, electronic, hip-hop, and underground house music. With a passion for creating unforgettable musical experiences, Chris G has honed his skills and cultivated a deep understanding of various genres, allowing him to curate dynamic and energetic sets that keep the crowd moving and grooving. His extensive knowledge of dance, electronic, hip-hop, and underground house music enables him to seamlessly blend tracks, creating seamless transitions and maintaining an infectious energy on the dance floor. With a diverse background and a keen ear for selecting the right tracks for any occasion, DJ Chris G is renowned for his ability to create an immersive and memorable atmosphere, leaving a lasting impression on audiences and solidifying his reputation as a sought-after DJ in the industry.</p>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={(event) => openModal(event, index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-100 w-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <div className="fixed z-20 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="w-11/12 md:w-full max-w-3xl max-h-3/4 bg-beige-light py-4 px-6">
            <Slider
              {...settings}
              initialSlide={activeModalSlide}
              onClick={(event) => event.stopPropagation()}
            >
                {' '}
                {projects.map((project) => (
                   <div key={project.id}>
                   <div className="aspect-w-16 aspect-h-9">
                     <video
                       src={project.video}
                       alt={project.title}
                       className="object-cover w-full h-full"
                       autoPlay
                       muted
                       loop
                     />
                   </div>
                 </div>
                ))}
              </Slider>
              <button
                className="absolute top-4 right-4 bg-pink-mid hover:bg-blue-ice text-white font-bold text-xl md:text-lg px-10 md:px-8 py-4 md:py-3 transition duration-500 ease-in-out rounded-full shadow-sm"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Contact />
    </div>
  )
}

export default Events

import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaSoundcloud, FaMixcloud, FaSpotify, FaLinkedin, FaShoppingCart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black-mid'>
      <footer
        id='djcg-footer-mid'
        className='bg-black-asphalt text-white py-20 border-t-2 border-t-white'
      >
        <div
          id='djcg-footer-layout'
          className='w-full max-w-8xl grid grid-cols-1 sm:grid-cols-4 mx-auto px-6 justify-around gap-6 sm:gap-20 md:gap-24'
        >
          {/* About Us Section */}
          <div
            id='djcg-footer-about-us'
            className='flex flex-col w-full col-span-2 order-1'
          >
            <div className='text-orange-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6'>
              About
            </div>
            <p className='text-base md:pr-10'>
              <strong>dj Chris G</strong> is a seasoned expert in dance,
              electronic, hip-hop, and underground house music, captivating
              crowds with his dynamic sets, seamless track blending, and
              infectious energy, while leaving a lasting impression through his
              immersive and memorable atmospheres.
            </p>
          </div>

          {/* Connect With Us Section */}
          <div
            id='djcg-footer-connect-with-us'
            className='flex flex-col w-full order-2'
          >
            <div className='text-orange-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6'>
              Connect
            </div>
            <div className='grid grid-cols-3 md:grid-cols-5 flex-wrap gap-x-2 gap-y-4'>
              <a
                href='https://www.facebook.com/djchrisginthemix'
                className='djcg-icon block hover:text-blue-ice transition duration-500 ease-in-out'
              >
                <FaFacebook className='text-3xl' />
              </a>
              <a
                href='https://twitter.com/djchrisgonair'
                className='djcg-icon block hover:text-blue-ice transition duration-500 ease-in-out'
              >
                <FaTwitter className='text-3xl' />
              </a>
              <a
                href='https://www.instagram.com/djchrisginthemix/'
                className='djcg-icon block hover:text-blue-ice transition duration-500 ease-in-out'
              >
                <FaInstagram className='text-3xl' />
              </a>
              <a
                href='https://soundcloud.com/djchrisginthemix'
                className='djcg-icon block hover:text-blue-ice transition duration-500 ease-in-out'
              >
                <FaSoundcloud className='text-3xl' />
              </a>
              <a
                href='https://www.mixcloud.com/djchrisginthemix/'
                className='djcg-icon block hover:text-blue-ice transition duration-500 ease-in-out'
              >
                <FaMixcloud className='text-3xl' />
              </a>
              <a
                href='https://open.spotify.com/user/crg360?si=9CK4O-zySZit6eONPEpJ1g'
                className='djcg-icon block hover:text-blue-ice transition duration-500 ease-in-out'
              >
                <FaSpotify className='text-3xl' />
              </a>
              <a
                href='https://www.linkedin.com/in/chris-gamelin-53bb86ab/'
                className='djcg-icon hover:text-blue-ice transition duration-500 ease-in-out'
              >
                <FaLinkedin className='text-3xl' />
              </a>
              <a
                href='https://dj-chris-g.creator-spring.com/'
                className='djcg-icon hover:text-blue-ice transition duration-500 ease-in-out'
              >
                <FaShoppingCart className='text-3xl' />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div
            id='djcg-footer-contact-us'
            className='flex flex-col w-full order-3'
          >
            <div className='text-orange-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6'>
              Contact
            </div>
            <div className='flex flex-col'>
              <h4 className='text-base font-bold mb-2'>dj Chris G</h4>
              <a
                href='tel:860-899-7867'
                className='mr-4 hover:underline hover:text-blue-ice text-lg transition duration-500 ease-in-out'
              >
                860-899-7867
              </a>
              <a
                href='mailto:djchrisgmgmt@gmail.com'
                className='hover:underline hover:text-blue-ice text-lg transition duration-500 ease-in-out'
              >
                djchrisgmgmt@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer

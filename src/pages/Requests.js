import React from 'react'
import MusicGrid from '../components/MusicGrid'
import Header from '../partials/Header'

const Requests = () => {
  return (
    <div id='requests-page' className='bg-black-asphalt'>
      <Header
        title='Make Requests'
        description='Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres'
        image='../assets/images/djcg-logo.png'
        url='https://chrisginthemix.com/requests'
      />
      <div className='max-w-7xl mx-auto px-6 sm:py-14 md:py-16 lg:py-20'>
        <div className='flex flex-col items-center'>
          <h2 className='djcg-header-2 text-center mt-8 mb-10 sm:mb-12'>
            Request a Vibe by dj Chris G
          </h2>
          <div className='text-gray-600 text-center sm:text-left max-w-5xl mx-auto'>
            <p className='text-base sm:text-lg text-center text-gray-500 mb-4'>
              Greetings! I'm DJ Chris G, a seasoned professional with over 10
              years of DJing experience. I've had the privilege of performing at
              renowned clubs and venues worldwide, refining my skills and
              delivering exceptional musical experiences.
            </p>
            <p className='text-base sm:text-lg text-center text-gray-500 mb-4'>
              My passion for music and the joy of entertaining people drive me
              to constantly improve and push boundaries. From intimate weddings
              to corporate functions and festivals, I've successfully catered to
              a diverse range of events. No matter the occasion, I'm dedicated
              to delivering memorable performances that leave a lasting impact.
            </p>
            <p className='text-base sm:text-lg text-center text-gray-500 mb-4'>
              With an extensive repertoire covering various genres, I'm
              well-versed in creating the perfect atmosphere for any crowd. From
              pulsating electronic dance music to chart-topping hits and
              timeless classics, I have the ability to curate a seamless musical
              journey that resonates with your unique taste and preferences.
            </p>
            <p className='text-base sm:text-lg text-center text-gray-500 mb-4'>
              By collaborating closely with you, I ensure that your event
              reflects your vision and surpasses your expectations. I understand
              the importance of connecting with the audience and creating a
              personalized experience tailored to your needs. Together, we'll
              craft an unforgettable celebration that will leave you and your
              guests thoroughly entertained.
            </p>
            <p className='text-base sm:text-lg text-center text-gray-500 mb-4'>
              If you're seeking a professional DJ with a wealth of experience
              and a genuine passion for music, look no further. Contact DJ Chris
              G today to discuss how we can transform your upcoming event into
              an extraordinary musical experience. Let's create moments that
              will be cherished for years to come.
            </p>
          </div>
        </div>
      </div>
      <hr className='my-10' />
      <MusicGrid />
    </div>
  );
};
export default Requests;

import React from 'react'
import Reveal from 'react-awesome-reveal'

const Testimonials = () => {
  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100
  }
  return (
    <section
      id='testimonials-section'
      className='py-10 sm:py-14 md:py-16 lg:py-20'
    >
      <div className='mx-auto px-6 max-w-7xl'>
        <Reveal triggerOnce {...revealSettings}>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <p className='text-gray-600'>
                "DJ Chris G's performances at Shine Nightclub at Foxwoods and
                Mezzos in Middletown, CT were absolutely amazing. Their ability
                to read the crowd and create an electrifying atmosphere made our
                events unforgettable. We couldn't have asked for a better DJ for
                our parties, weddings, and celebrations."
              </p>
              <div className='flex items-center mt-4'>
                <div className='mr-4'>
                  <img
                    src='https://randomuser.me/api/portraits/women/22.jpg'
                    alt=''
                    className='rounded-full w-12 h-12'
                  />
                </div>
                <div>
                  <p className='text-gray-800 font-bold'>Sarah Johnson</p>
                  <p className='text-gray-600'>Event Organizer</p>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <p className='text-gray-600'>
                "We hired DJ Chris G for our wedding, and they exceeded our
                expectations. Their music selection and seamless mixing kept the
                dance floor packed all night long. Our guests had a blast, and
                we received numerous compliments about the fantastic DJ. DJ
                Chris G truly knows how to make any celebration unforgettable."
              </p>
              <div className='flex items-center mt-4'>
                <div className='mr-4'>
                  <img
                    src='https://randomuser.me/api/portraits/men/38.jpg'
                    alt=''
                    className='rounded-full w-12 h-12'
                  />
                </div>
                <div>
                  <p className='text-gray-800 font-bold'>Tom Anderson</p>
                  <p className='text-gray-600'>Happy Client</p>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <p className='text-gray-600'>
                "DJ Chris G's performance at our corporate party was phenomenal.
                They had a deep understanding of our event's vibe and kept the
                energy high throughout the night. The dance floor was packed,
                and our employees had a blast. DJ Chris G is an incredibly
                talented DJ who knows how to create a memorable experience."
              </p>
              <div className='flex items-center mt-4'>
                <div className='mr-4'>
                  <img
                    src='https://randomuser.me/api/portraits/women/72.jpg'
                    alt=''
                    className='rounded-full w-12 h-12'
                  />
                </div>
                <div>
                  <p className='text-gray-800 font-bold'>Jessica Davis</p>
                  <p className='text-gray-600'>Event Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
export default Testimonials

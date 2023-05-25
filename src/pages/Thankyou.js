import React from 'react';
import { Helmet } from 'react-helmet';
import Reveal from 'react-awesome-reveal';
import Header from '../partials/Header';

const Thankyou = () => {
  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100,
  };

  return (
    <div id="thank-you-page" className="bg-black-asphalt">
      <Helmet>
        {/* Add the following meta tag to prevent indexing */}
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header
        title="Thank you for your message!"
        description="Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres"
        image="../assets/images/djcg-logo.png"
        url="https://chrisginthemix.com/thank-you"
      />

      <div className="djcg-thank-you-content max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center">
          <h2 className="djcg-header-2 text-center mt-8 mb-10 sm:mb-12">Thank You!</h2>
          <Reveal {...revealSettings}>
            <div className="thank-you-intro text-base sm:text-lg max-w-5xl mx-auto text-center text-gray-500 mb-10 sm:mb-16 md:mb-20 lg:mb-24">
              <p className="mb-5 md:mb-6">
                Thank you for reaching out to dj Chris G. We have received your message and will get back to you as soon as possible.
                In the meantime, feel free to browse our website and get some ideas ready!
              </p>
              <p>Thank you again for choosing us and we look forward to serving you!</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
export default Thankyou;

import React from 'react';
import Header from '../partials/Header';
import Form from '../partials/Form';

const ContactUs = () => {

  return (
    <div id="contact-page" className="bg-black-asphalt">
      <Header
        title="Contact Us"
        description="Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres"
        image="../assets/images/djcg-logo.png"
        url="https://chrisginthemix.com/contact"
      />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center">
            <h2 className="djcg-header-2 mt-8 mb-10">
              Contact dj Chris G
            </h2>
        </div>

        <div className="w-full">
            <div id="djcg-form-container" className="py-10 sm:py-14 md:py-16 lg:py-20">
              <Form color="gray" />
            </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

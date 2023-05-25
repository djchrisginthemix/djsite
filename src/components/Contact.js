import React from 'react';
import Reveal from 'react-awesome-reveal';
import Form from '../partials/Form';

const Contact = () => {
  const revealSettings = {
    from: "bottom",
    distance: "20px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    delay: 100,
  };
  return (
    <section
      id="contact-section"
      className="text-white px-6 py-10 sm:py-14 md:py-16 lg:py-20"
    >
    <div className="djcg-header-3-container flex flex-col items-center justify-center text-center px-8 mb-8 sm:mb-12">
      <h3 className="djcg-header-3 text-white">Give Chris a shout!</h3>
      <Reveal triggerOnce {...revealSettings}>
      <div className="h-1 w-20 bg-orange-mid"></div>
      </Reveal>
    </div>        <Form />
    </section>
  );
};
export default Contact;

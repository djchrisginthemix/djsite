import React from 'react';
import Reveal from 'react-awesome-reveal';

const SectionHeading = ({ text, color="yellow" }) => {
  const revealSettings = {
    from: "bottom",
    distance: "20px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    delay: 100,
  };
  const colorClasses = {
    blue: "bg-blue-ice",
    darkBlue: "bg-blue-ice-dark",
    darkGray: "bg-gray-800",
    orange: "bg-pink-mid",
    yellow: "bg-orange-mid",
    white: "bg-white",
  };
  return (
    <div className="djcg-header-3-container flex flex-col items-center justify-center text-center px-8 mb-8 sm:mb-12">
      <h3 className="djcg-header-3 text-gray-200 ">{text}</h3>
      <Reveal triggerOnce {...revealSettings}>
      <div className={`h-1 w-20 ${colorClasses[color]}`}></div>
      </Reveal>
    </div>
  );
};

export default SectionHeading;

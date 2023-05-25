import React from "react";
import { Reveal } from "react-awesome-reveal";
import SectionHeading from './SectionHeading'

const projects = [
  {
    name: "Project 1",
    description: "This is a description of project 1",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Project 2",
    description: "This is a description of project 2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Project 3",
    description: "This is a description of project 3",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Project 4",
    description: "This is a description of project 4",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Project 5",
    description: "This is a description of project 5",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Project 6",
    description: "This is a description of project 6",
    image: "https://via.placeholder.com/300x200",
  },
];

const Events = () => {
  const revealSettings = {
    from: "bottom",
    distance: "20px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    delay: 100,
  };

  return (
    <section id="events-section" className="bg-black-asphalt px-6 py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading text="Events" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <Reveal triggerOnce {...revealSettings}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </Reveal>
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <Reveal triggerOnce {...revealSettings}>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-ice mb-4">{project.name}</div>
                  <p className="mb-6">{project.description}</p>
                  <a
                    href="/events"
                    className="flex items-center justify-center text-lg font-bold text-orange-mid"
                  >View Events
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;

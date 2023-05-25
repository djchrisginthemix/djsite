import React, { useState } from "react";

const Navbar = ({ showNav, setShowNav }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const links = [
    { title: "Home", link: "/" },
    { title: "Requests", link: "/requests" },
    { title: "Events", link: "/events" },
    { title: "Contact", link: "/contact" },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowNav(false);
  };

  return (
    <nav className={`flex-col md:flex-row md:flex ${showNav ? "flex" : "hidden"} md:ml-auto md:mr-0 pl-4 md:py-1 sm:pl-0 md:border-none mt-0`}>
      {links.map((link) => (
        <a
          key={link.title}
          className={`block mt-4 md:inline-block md:mt-0 md:mx-4 font-semibold ${activeLink === link.link ? "text-blue-ice" : "text-white"} hover:text-blue-ice`}
          href={link.link}
          onClick={() => handleLinkClick(link.link)}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
};
export default Navbar;

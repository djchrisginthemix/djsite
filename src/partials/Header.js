import React, { useState, useEffect, useRef } from "react";
import djcgLogo from '../assets/images/djcg-logo.png';
import { Zoom } from "react-awesome-reveal";
import SEO from '../components/SEO';
import Navbar from '../partials/Navbar';
import { RiFolderMusicFill, RiFolderMusicLine } from 'react-icons/ri';

const Header = ({ title, description, image, url }) => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (showNav) {
      setNavHeight(navRef.current.scrollHeight);
    } else {
      setNavHeight(0);
    }
  }, [showNav]);

  const zoomSettings = {
    from: "bottom",
    fraction: .45,
    duration: 400,
    easing: "cubic-bezier(0.1, 0, 0, 1)",
    delay: 0,
  };

  return (
    <Zoom triggerOnce {...zoomSettings}>
      <header className="">
        <SEO title={title} description={description} image={image} url={url} />
        <div className="w-full max-w-8xl mx-auto pl-4 pr-4 sm:px-6 py-3 sm:py-6">
          <div className="flex flex-col gap-4 md:justify-between md:items-center">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a className="hover:opacity-80 duration-500 transition-all ease-in-out" href="/">
                 <img src={djcgLogo} alt="dj Chris G" width={362} height={154} className="w-52 md:w-48 pt-4 md:pt-0 drop-shadow-custom"/>
                </a>
              </div>

              <div className="flex md:hidden pt-4">
                <button
                  type="button"
                  className={`text-4xl ${
                    showNav ? "text-blue-ice" : "text-white"
                  } hover:text-blue-ice focus:outline-none outline-none transition duration-500 ease-in-out`}
                  aria-label="toggle menu"
                  onClick={() => setShowNav(!showNav)}
                >
                  {showNav ? <RiFolderMusicFill /> : <RiFolderMusicLine />}
                </button>
              </div>
            </div>

            <nav
              ref={navRef}
              className={`md:flex md:items-center md:justify-center ${
                showNav ? "mobile-nav" : ""
              }`}
              style={{
                height: showNav ? navHeight : "auto",
                overflow: "hidden",
                transition: showNav ? "height 0.3s ease-in-out" : "none",
              }}
            >
              <Navbar showNav={showNav} setShowNav={setShowNav} />
            </nav>
          </div>
        </div>
      </header>
    </Zoom>
  );
};

export default Header;

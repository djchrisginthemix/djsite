import React, { useState } from 'react';
import Fade from 'react-awesome-reveal';
import SectionHeading from './SectionHeading';
import { useNavigate } from 'react-router-dom';

import {
  FaMusic,
  FaMicrophone,
  FaHeadphones,
  FaPlayCircle,
  FaRecordVinyl,
  FaVolumeUp,
  FaSoundcloud,
  FaVenus,
  FaHippo
} from 'react-icons/fa';

const MusicCard = ({ icon, title, description, delay, selected, onChange }) => {
  return (
    <Fade delay={delay} duration={400} offset={0} animateIn='fadeIn'>
      <div
        className={`ct-vibe flex flex-col items-center justify-start text-left ${
          selected ? 'selected' : ''
        }`}
        onClick={onChange}
      >
        <div className='w-full flex gap-x-3 items-center mb-5'>
          <div
            className={`text-3xl sm:text-4xl lg:text-5xl transition duration-500 ease-in-out ${
              selected ? 'text-orange-mid' : 'text-gray-200'
            }`}
          >
            {icon}
          </div>
          <h3
            className={`text-xl sm:text-2xl font-bold transition duration-500 ease-in-out ${
              selected ? 'text-gray-500' : 'text-gray-300'
            }`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`text-base sm:text-lg font-normal transition duration-500 ease-in-out ${
            selected ? 'text-gray-800' : 'text-gray-300'
          }`}
        >
          {description}
        </p>
      </div>
    </Fade>
  );
};

const MusicGrid = ({ onSubmit }) => {
  const music = [
    {
      icon: <FaMusic />,
      title: 'Electronic',
      description:
        'Get ready to groove to the pulsating beats of electronic music that will elevate your party experience.',
      delay: 0
    },
    {
      icon: <FaMicrophone />,
      title: 'Hip Hop',
      description:
        'Experience the rhythm and lyrical flow of hip hop, with a mix of classic hits and the latest chart-toppers.',
      delay: 100
    },
    {
      icon: <FaHeadphones />,
      title: 'Pop',
      description:
        'Indulge in the catchy melodies and infectious hooks of popular music that will keep you dancing all night long.',
      delay: 200
    },
    {
      icon: <FaPlayCircle />,
      title: 'Top 40',
      description:
        'Get ready for a playlist filled with the biggest hits from various genres that are currently dominating the charts.',
      delay: 300
    },
    {
      icon: <FaRecordVinyl />,
      title: 'Retro',
      description:
        'Take a trip down memory lane with the nostalgic tunes of past decades, from disco to rock and everything in between.',
      delay: 400
    },
    {
      icon: <FaVolumeUp />,
      title: 'House',
      description:
        'Experience the infectious energy of house music, with its pulsating beats and soulful vibes that will keep you moving.',
      delay: 500
    },
    {
      icon: <FaSoundcloud />,
      title: 'Chillout',
      description:
        'Relax and unwind with a soothing blend of downtempo, ambient, and chillout tracks that create a tranquil atmosphere.',
      delay: 600
    },
    {
      icon: <FaVenus />,
      title: 'Latin',
      description:
        'Embrace the passionate rhythms of Latin music, including salsa, reggaeton, bachata, and more that will make you want to dance.',
      delay: 700
    },
    {
      icon: <FaHippo />,
      title: 'Party Mix',
      description:
        'Get the party started with a mix of high-energy tracks across different genres, guaranteed to keep the dance floor packed.',
      delay: 800
    }
  ];

  const [selectedMusic, setSelectedMusic] = useState([]);
  const navigate = useNavigate();

  const handleSelectVibe = vibe => {
    setSelectedMusic(prevSelectedMusic => {
      const alreadySelected = prevSelectedMusic.some(
        g => g.title === vibe.title
      );
      if (alreadySelected) {
        return prevSelectedMusic.filter(g => g.title !== vibe.title);
      }
      return [...prevSelectedMusic, vibe];
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const selectedVibeTitles = selectedMusic.map(vibe => vibe.title);
    navigate(`/contact?music=${selectedVibeTitles.join(', ')}`);
  };

  return (
    <section
      id='music-grid-section'
      className='w-full max-w-7xl mx-auto py-20 px-6'
    >
      <SectionHeading text='Be provocative… get the people going!' />
      <form onSubmit={handleSubmit}>
        <div className='djcg-music-grid grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-4 md:gap-12 my-16'>
          {music.map(vibe => (
            <MusicCard
              key={vibe.title}
              icon={vibe.icon}
              title={vibe.title}
              description={vibe.description}
              delay={vibe.delay}
              selected={selectedMusic.some(g => g.title === vibe.title)}
              onChange={() => handleSelectVibe(vibe)}
            />
          ))}
        </div>
        <div
          id='djcg-music-grid-submission'
          className='w-full grid grid-cols-1 xs:grid-cols-6 gap-8 mt-14 sm:mt-20'
        >
          <div
            id='djcg-music-selected-container'
            className='col-span-6 sm:col-span-4 md:col-span-5'
          >
            <div className='text-gray-800 text-xl font-bold mb-6 sm:mb-8'>
              Music you selected:
            </div>
            <div
              id='djcg-music-selected'
              className='vibe-bubbles flex flex-wrap gap-2 justify-left'
            >
              {music
                .filter(
                  vibe =>
                    selectedMusic.findIndex(g => g.title === vibe.title) !==
                    -1
                )
                .map((vibe, index) => (
                  <div
                    key={vibe.title}
                    className='vibe-bubble selected rounded-full bg-pink-mid text-white font-bold text-xs sm:text-sm py-3 px-4 sm:px-6'
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {vibe.title}
                  </div>
                ))}
            </div>
          </div>
          <div
            id='djcg-music-submit-container'
            className='col-span-6 sm:col-span-2 md:col-span-1 xs:flex items-end justify-end'
          >
            <input
              value="Let's get started!"
              type='submit'
              className='bg-blue-ice hover:bg-pink-mid text-white text-base md:text-lg font-bold rounded-full transition duration-500 ease-in-out px-10 md:px-14 py-4 shadow-sm'
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default MusicGrid;

import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard'; // Adjust if using absolute imports

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleHover = (index) => {
    setActiveIndex(index);
    setFlippedIndex(null);
  };

  const handleClick = (index) => {
    if (activeIndex === index) {
      setFlippedIndex((prev) => (prev === index ? null : index));
    }
  };

  const projectData = [
    {
      title: 'Project 1',
      shortDescription: 'Brief description of Project 1.',
      longDescription: 'Full project description and goals for Project 1...',
      imageSrc: '/images/projectCardPics/pCardFiller.png',
    },
    {
      title: 'Project 2',
      shortDescription: 'Quick look at Project 2.',
      longDescription: 'Details and background of Project 2...',
      imageSrc: '/images/projectCardPics/pCardFiller.png',
      defaultState: false,
    },
    {
      title: 'Project 3',
      shortDescription: 'Overview of Project 3.',
      longDescription: 'Full project description and collaborators for Project 3...',
      imageSrc: '/images/projectCardPics/pCardFiller.png',
      
    },
  ];

  return (
    <div className="section-container flex flex-col justify-center min-h-screen">
      <section
        id="home-container-1"
        className="page-container-column flex flex-row w-full h-screen items-center justify-center"
      >
        <div className="landing-container flex flex-row w-full h-full">
          {/* Left Side */}
          <section className="home-title-container flex flex-col flex-1 justify-start p-8">
            <img
              src="/images/SFD Dark Header.svg"
              alt="SFDheader"
              className="home-header-image self-start"
            />
            <p className="w-full justify-start">
              Lorem ipsum dolor sit amet...
            </p>
            <div className="home-buttons-container mt-4">
              <button className="home-button">About Us</button>
              <button className="home-button">Work With Us</button>
            </div>
          </section>

          {/* Right Side - Project Cards */}
          <section
            className="home-project-cards-container flex flex-col justify-center items-center flex-1 h-full gap-y-4 px-4"
            onMouseLeave={() => {
              setActiveIndex(null);
              setFlippedIndex(null);
            }}
          >
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                isActive={activeIndex === index}
                isFlipped={flippedIndex === index}
                onHover={() => handleHover(index)}
                onClick={() => handleClick(index)}
              />
            ))}
          </section>
        </div>
      </section>

      {/* About Us Section */}
      <section className="page-container-column items-center justify-center">
        <div className="about-us-container">
          <div className="about-us">
            <div className="subtitle-container">
              <h1 className="brand-subtitle">WHO ARE WE?</h1>
            </div>
            <div className="divider"></div>
            <div className="about-us-text-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Image carousel */}
        <div className="landing-carousel-container w-full">
          <div className="carousel bg-[var(--green-base)] text-[var(--text-light)] h-40 flex items-center justify-center width-full">
            <h1 className="carousel-title">It's us!</h1>
          </div>
        </div>

        <div className="mission-statement-container flex flex-row basis-1/3">
          <div className="subtitle-container">
            <h1 className="brand-subtitle w-full">OUR MISSION</h1>
          </div>
          <div className="divider"></div>
          <div className="mission-statement-text-container content-center justify-items-center">
            <p>
              Our mission is to provide exceptional digital solutions that empower communities and foster growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

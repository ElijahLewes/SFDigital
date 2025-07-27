import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleHover = (index) => {
    setActiveIndex(index);
    setFlippedIndex(null); // reset flip on hover
  };

  const handleClick = (index) => {
    if (activeIndex === index) {
      setFlippedIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <>
      <div className="section-container flex flex-col justify-center min-h-screen">
        <section id="home-container-1" className="page-container-column flex flex-row w-full h-screen items-center justify-center">
          <div className="landing-container flex flex-row w-full h-full">
            {/* Left side */}
            <section className="home-title-container flex flex-col flex-1 justify-start p-8">
              <img src="/images/SFD Dark Header.svg" alt="SFDheader" className="home-header-image self-start" />
              <p className="w-full justify-start">
                Lorem ipsum dolor sit amet...
              </p>
              <div className="home-buttons-container mt-4">
                <button className="home-button">About Us</button>
                <button className="home-button">Work With Us</button>
              </div>
            </section>

            {/* Right side project cards */}
            <section className="home-project-cards-container flex flex-col justify-center items-center flex-1 h-full transition-all duration-500">
              {[
                {
                  title: 'Project 1',
                  shortDescription: 'Brief description of Project 1.',
                  longDescription: 'Full project description and goals for Project 1...',
                },
                {
                  title: 'Project 2',
                  shortDescription: 'Quick look at Project 2.',
                  longDescription: 'Details and background of Project 2...',
                },
                {
                  title: 'Project 3',
                  shortDescription: 'Overview of Project 3.',
                  longDescription: 'Full project description and collaborators for Project 3...',
                },
              ].map((project, index) => (
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
      </div>
    </>
  );
}

export default Home;

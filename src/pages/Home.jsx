import React from 'react';

function Home() {
  return (
    <>
      <div className="section-container flex flex-col justify-center min-h-screen">
      <section id="home-container-1" className="page-container-column flex flex-row w-full h-screen items-center justify-center">
        <div className="landing-container">
          {/* Left side of home page */}
          <section className="home-title-container flex flex-col flex-1 justify-start">
            <img src="/public/images/SFD Dark Header.svg" alt="SFDheader" className="home-header-image self-start" />
            <p className="w-full justify-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="home-buttons-container">
              <button className="home-button">About Us</button>
              <button className="home-button">Work With Us</button>
            </div>
          </section>

          {/* Right side of home page */}
          <section id="home-container-2" className="home-project-cards-container flex flex-col justify-center items-center flex-1">
            <div className="home-project-card basis-2/5 w-full" style={{ background: 'var(--green-base)', color: 'var(--text-light)' }}>
              <h2>Project 1</h2>
              <p>Brief description of Project 1.</p>
            </div>
            <div className="home-project-card basis-1/19 w-full" style={{ background: 'var(--green-base)', color: 'var(--text-light)' }}>
              <h2>Project 2</h2>
            </div>
            <div className="home-project-card basis-1/19 w-full" style={{ background: 'var(--green-base)', color: 'var(--text-light)' }}>
              <h2>Project 3</h2>
            </div>
          </section>
        </div>
      </section>

      {/* About us section */}
      <section className="page-container-column items-center justify-center">
        <div className="about-us-container ">
          <div className="about-us">
            <div className="subtitle-container">
              <h1 className="brand-subtitle">WHO ARE WE?</h1>
            </div>
            <div className="divider"></div>
            <div className="about-us-text-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>

        {/* Add img carousel box */}
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
            <p>Our mission is to provide exceptional digital solutions that empower communities and foster growth.</p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Home;
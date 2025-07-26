import React from 'react';

function Home() {
  return (
    <>
      <div className="page-container-1 flex flex-col justify-center min-h-screen">
      <section id="home-container-1" className="items-center justify-center">
        <div className="landing-container">
          {/* Left side of home page */}
          <section className="home-title-container">
            <img src="/public/images/SFD Dark Header.svg" alt="SFDheader" className="home-header-image" />
            <p className="home-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="home-buttons-container">
              <button className="home-button">About Us</button>
              <button className="home-button">Work With Us</button>
            </div>
          </section>

          {/* Right side of home page */}
          <section id="home-container-2" className="home-project-cards-container flex flex-col items-end justify-end">
            <div className="home-project-card basis-1/2" style={{ background: 'var(--green-base)', color: 'var(--text-light)' }}>
              <h2>Project 1</h2>
              <p>Brief description of Project 1.</p>
            </div>
            <div className="home-project-card basis-1/4" style={{ background: 'var(--green-base)', color: 'var(--text-light)' }}>
              <h2>Project 2</h2>
              <p>Brief description of Project 2.</p>
            </div>
            <div className="home-project-card basis-1/4" style={{ background: 'var(--green-base)', color: 'var(--text-light)' }}>
              <h2>Project 3</h2>
              <p>Brief description of Project 3.</p>
            </div>
          </section>
        </div>
      </section>

      {/* About us section */}
      <section className="page-container-2 flex flex-col items-center justify-center">
        <div className="about-us-container flex flex-row basis-1/3 items-center justify-center">
          <div className="about-us">
            <div className="subtitle-container">
              <h1>Who Are We?</h1>
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
            <h1>Our Mission</h1>
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
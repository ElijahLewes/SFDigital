import React from 'react';

function Home() {
  return (
    <>
      <section className="page-container">
        <div className="landing-container">
        {/* Left side of home page */}
        
        <div className="home-title-container">
          <h1 id="home-title">Welcome to StreetFront Digital</h1>
          <p id="home-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* Right side of home page */}
        <div className="home-project-cards-container">
          <div className="home-project-card" style={{ background: 'var(--green-base)', color: 'var(--text-light)' }}>
            <h2>Project 1</h2>
            <p>Brief description of Project 1.</p>
          </div>
        </div>
        </div>
      </section>

      {/* About us section */}
      <section className="page-container">
        <div className="about-us-container">
        <div className="about-us">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="mission-statement">
            <div className="subtitle-container">
              <h1>Mission Statement</h1>
              <p>Our mission is to provide exceptional digital solutions that empower communities and foster growth.</p>
            </div>
         </div>
        </div>
      </section>
    </>
  );
}

export default Home;

import React from 'react';

function Home() {
  return (
    <>
      <section className="page-container">
        <div className="landing-container">
        {/* Left side of home page */}
        
        <section className="home-title-container">
          <h1 id="home-title">StreetFront Digital</h1>
          <p id="home-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="home-buttons-container">
            <button className="home-button">
              About Us
            </button>
            <button className="home-button">
              Work With Us
            </button>
            </div>
        </section>


        {/* Right side of home page */}
        <section className="home-project-cards-container">
          <div className="home-project-card" style={{ background: 'var(--green-base)', color: 'var(--text-light)' }}>
            <h2>Project 1</h2>
            <p>Brief description of Project 1.</p>
          </div>
        </section>
        </div>
      </section>

      {/* About us section */}
      <section className="page-container">
        <div className="about-us-container">
            <div className="about-us">
                <div className = "subtitle-container">
                <h1>Who Are We?</h1>
                </div>
                <div className = "divider"></div>   
                <div className = "about-us-text-container">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
        <div className="mission-statement-container">
            <div className="subtitle-container">
              <h1>Our Mission</h1>
            </div>
            <div className = "divider"></div>
            <div className = "mission-statement-text-container">
              <p>Our mission is to provide exceptional digital solutions that empower communities and foster growth.</p>
            
         </div>
        </div>
        
      </section>
      
    </>
  );
}

export default Home;

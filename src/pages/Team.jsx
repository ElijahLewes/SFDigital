// src/pages/Team.jsx
import React, { useRef, useState, useEffect } from "react";
import FlipCard from "/src/components/FlipCard.jsx";

function Team() {
  const [activeSection, setActiveSection] = useState(null);
   const containerRef = useRef(null);

  // toggle locked class when a column is active
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (activeSection) el.classList.add("locked");
    else el.classList.remove("locked");
  }, [activeSection]);


  return (
    <div className="page__container">
      {/* About Us Section */}
      <section className="about__wrapper">
        <div className="about__container">
          <p className="sfd__title">STREETFRONT DIGITAL</p>
          <div className="text__container">
            <p>
              Our mission is to provide exceptional digital solutions <br />
              that empower communities and foster growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team + BTS Split Section */}
      <section className="section__wrapper">
          <div className="split__container" ref={containerRef}>
          {/* Left Column */}
          <div
            className={`split__column left ${
              activeSection === "team" ? "active" : ""
            } ${activeSection === "bts" ? "inactive" : ""}`}
            onClick={() => setActiveSection(activeSection === "team" ? null : "team")}
          >
            <div className="card__wrapper">
              <div className="cards__container">
                <div className="flip__card">
                  <FlipCard
                    imageSrc="/images/profilePics/LaurL ver3.svg"
                    fName="Shema"
                    lName="Ndikumana"
                    description="Chief Design Officer"
                    bio="Top notch friendly neighborhood Designer and Videographer."
                    email="SNdikumana@streetfrontdigital.com"
                    website="LaurNdikumana.org"
                    color="--flipcard-bg-1"
                    colorhvr="--flipcard-hvr-1"
                  />
                </div>
                <div className="flip__card">
                  <FlipCard
                    imageSrc="/images/profilePics/AylaL ver3.svg"
                    fName="Ayla"
                    lName="Dumont"
                    description="Creative Director"
                    bio="Captain of sign and thief of my heart."
                    email="ADumont@streetfrontdigital.com"
                    website="AylaDumont.com"
                    color="--flipcard-bg-2"
                    colorhvr="--flipcard-hvr-2"
                  />
                </div>
                <div className="flip__card">
                  <FlipCard
                    imageSrc="/images/profilePics/EliL ver3.svg"
                    fName="Elijah"
                    lName="Lewes"
                    description="Head Developer"
                    bio="Developer and fruit enthusiast."
                    email="ESauerwalt@streetfrontdigital.com"
                    website="ElijahLewes.com"
                    color="--flipcard-bg-3"
                    colorhvr="--flipcard-hvr-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`split__column right ${
              activeSection === "bts" ? "active" : ""
            } ${activeSection === "team" ? "inactive" : ""}`}
            onClick={() => setActiveSection(activeSection === "bts" ? null : "bts")}
          >
            <div className="bts__wrapper">
              <div className="bts__photo"><img src="../images/l212/Remington-4.jpg" alt="bts" /></div>
              <div className="bts__photo"><img src="../images/l212/Remington-33.jpg" alt="bts" /></div>
              <div className="bts__photo"><img src="../images/l212/Remington-28.jpg" alt="bts" /></div>
              <div className="bts__photo"><img src="../images/l212/Remington-17.jpg" alt="bts" /></div>
              <div className="bts__photo"><img src="../images/l212/Remington-33.jpg" alt="bts" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;

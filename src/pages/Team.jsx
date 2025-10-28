// src/pages/Team.jsx
import React from "react";
import FlipCard from "/src/components/FlipCard.jsx";

function Team() {
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

      {/* Team Section */}
      <section className="section__wrapper">
        <div className="horizontal__scroll">
          {/* Left Section */}
          <div className="section__container-column-left">
            <div className="card__wrapper">
              <div className="cards__container">
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

                <FlipCard
                  imageSrc="/images/profilePics/AylaL ver3.svg"
                  fName="Ayla"
                  lName="Dumont"
                  description="Creative Director"
                  bio="Captain of Design and thief of my heart."
                  email="ADumont@streetfrontdigital.com"
                  website="AylaDumont.com"
                  color="--flipcard-bg-2"
                  colorhvr="--flipcard-hvr-2"
                />

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

          {/* Right Section */}
          <div className="section__container-column-right">
            <div className="bts__wrapper">
              <div className="bts__photo">
                <img src="../images/l212/abell.JPG" alt="abell" />
              </div>
              <div className="bts__photo">
                <img src="../images/l212/abell.JPG" alt="abell" />
              </div>
              <div className="bts__photo">
                <img src="../images/l212/abell.JPG" alt="abell" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;

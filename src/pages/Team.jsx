// src/pages/Team.jsx
import React from "react";
import FlipCard from "/src/components/FlipCard.jsx";

function Team() {
  return (
    <>
    <div className="page__container">
      {/* About Us Section */}
      
     <section id="section__wrapper">
        <div className="section__container-column-left">
          <p className="sfd__title">WHO ARE WE?</p>
          <div className="text__container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit, sed do eiusmod tempor incididunt ut labore et <br />
              dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="section__container-column-right">
          <p className="sfd__title">OUR MISSION</p>
          <div className="text__container">
            <p>
              Our mission is to provide exceptional digital solutions <br />
              that empower communities and foster growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="section__wrapper">
        <div className="section__container">
            <p className="sfd__title">MEET THE TEAM</p>
          <div className="text__container">
            <p>
              The Link 212 Project is a multimedia project aimed at showcasing the vibrant culture and community
              of the 250 Baltimore neighborhoods found in the 212 zipcode.
            </p>
          </div>
        </div>
      </section>

      <section id="section__wrapper">
        {/* Team cards grid */}
        <div className="cards__container">
          <FlipCard
            imageSrc="/images/profilePics/LaurL ver3.svg"
            fName="Laur"
            lName="Ndikumana"
            description="Chief Design Officer"
            bio="Top notch friendly neighborhood Designer and Videographer."
            email="LNdikumana@streetfrontdigital.com"
            website="LauraNdikumana.org"
            color="bg-[var(--Heartwood)]"
            colorhvr="bg-[var(--Highlight)]"
          />

          <FlipCard
            imageSrc="/images/profilePics/AylaL ver3.svg"
            fName="Ayla"
            lName="Dumont"
            description="Creative Director"
            bio="Captain of Design and thief of my heart."
            email="ADumont@streetfrontdigital.com"
            website="AylaDumont.com"
            color="bg-[#E1D5C8]"
            colorhvr="bg-[var(--Heartwood)]"
          />

          <FlipCard
            imageSrc="/images/profilePics/EliL ver3.svg"
            fName="Elijah"
            lName="Lewes"
            description="Head Developer"
            bio="Developer and fruit enthusiast."
            email="ESauerwalt@streetfrontdigital.com"
            website="ElijahLewes.com"
            color="bg-[var(--Highlight)]"
            colorhvr="bg-[#E1D5C8]"
          />
        </div>
      </section>
      </div>
    </>

  );
}

export default Team;

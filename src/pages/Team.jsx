// src/pages/Team.jsx
import React from "react";
import FlipCard from "/src/components/FlipCard.jsx";

function Team() {
  return (
    <>
      {/* About Us Section */}
      <section className="page-container-column items-start justify-start gap-y-8 px-4 md:px-16">
        <div className="about-us-section-container items-start text-left mt-[150px]">
          <h1 className="about-us-subtitle">WHO ARE WE?</h1>
          <div className="about-us-divider"></div>
          <div className="about-us-text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit, sed do eiusmod tempor incididunt ut labore et <br />
              dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="about-us-section-container flex flex-col items-start mt-[190px]">
          <h1 className="about-us-subtitle">OUR MISSION</h1>
          <div className="about-us-divider w-[400px]"></div>
          <div className="about-us-text-container text-left">
            <p>
              Our mission is to provide exceptional digital solutions <br />
              that empower communities and foster growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="page-container flex flex-col items-center mt-[200px] mb-[50px] px-4 md:px-16">
        <div className="section-container w-full text-center mb-8">
          <h1 className="brand-subtitle text-3xl md:text-4xl">MEET THE TEAM</h1>
          <div className="divider my-4"></div>
          <p className="section-text-container leading-[25px] text-gray-700 md:text-lg">
            The Link 212 Project is a multimedia project aimed at showcasing the vibrant culture and community
            of the 250 Baltimore neighborhoods found in the 212 zipcode.
          </p>
        </div>

        {/* Team cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
    </>
  );
}

export default Team;

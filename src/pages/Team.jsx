import React from 'react';
import FlipCard from '/src/components/FlipCard.jsx'; 
import SlideCard from '/src/components/SlideCard.jsx'; 
function Team() {
  return (
    <>
    <div className="page-container">
      <section id="team-page-container" className="page-container-column items-center justify-center">
        <div className="section-container">
            <h1 className="brand-subtitle">MEET THE TEAM</h1>
          <div className="divider"></div>
          <div className="section-text-container">
            <p>The Link 212 Project is a multimedia project aimed at showcasing <br></br>the vibrant culture and community the 250 Baltimore <br></br>neighborhoods found in the 212 zipcode.</p>
          </div>
        </div>
      </section>
        

      {/* About us section */}
       <div className="flex w-screen h-screen">
      <div className="w-1/3 h-full">
        <SlideCard
          imageSrc="/public/images/profilePics/LaurL.svg"
            image2="/public/images/profilePics/LaurL hvr.svg"
          fName="Laur"
          lName="Ndikumana"
          description="Chief Design Officer"
          bio="Top notch friendly neighborhood Designer and Videographer."
          color="bg-[var(--green-highlight)]"
        />
      </div>
      <div className="w-1/3 h-full">
        <SlideCard
          imageSrc="/public/images/profilePics/AylaL.svg"
          image2="/public/images/profilePics/AylaL hvr.svg"
          fName="Ayla"
          lName="Dumont"
          description="Creative Director"
          bio="Captian of Design and theif of my heart."
          color="bg-[var(--text-light)]"
        />
      </div>
      <div className="w-1/3 h-full">
        <SlideCard
          imageSrc="/public/images/profilePics/EliL.svg"
          image2="/public/images/profilePics/EliL hvr.svg"
          fName="Elijah"
          lName="Lewes"
          description="Head Developer"
          bio="Developer and fruit enthusiast."
          color="bg-[var(--orange-accent)]"
        />
      </div>
      </div>
    </div>
      

    {/* // Individual bios ang pics. card flip. find animation library */}

    </>
  );
}

export default Team;
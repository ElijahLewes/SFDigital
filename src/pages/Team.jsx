import React from 'react';
import FlipCard from '/src/components/FlipCard.jsx'; 
import SlideCard from '/src/components/SlideCard.jsx'; 
function Team() {
  return (
    <>
    <div className="section-container flex flex-col justify-center bg-[var(--text-light)] bg-cover bg-center bg-no-repeat">
      <section id="team-page-container" className="page-container-column items-center justify-center">
        <div className="section container flex flex-row w-full h-screen items-center justify-center">
          <div className="subtitle-container">
            <h1 className="brand-subtitle basis-1/2">MEET THE TEAM</h1>
          </div>
          <div className="divider"></div>
          <div className="mission-statement-text-container content-center justify-items-center basis-1/2">
            <p>The Link 212 Project is a multimedia project aimed at showcasing the vibrant culture and community the 250 Baltimore neighborhoods found in the 212 zipcode.</p>
          </div>
        </div>
      </section>
        

      {/* About us section */}
       <div className="flex w-screen h-screen">
      <div className="w-1/3 h-full">
        <SlideCard
          imageSrc="/public/images/profilePics/Laur-light.png"
            image2="/public/images/profilePics/Laur-dark.svg"
          fName="Laur"
          lName="Ndikumana"
          description="Lead Visual Designer"
          bio="Top notch friendly neighborhood Designer and Videographer."
          color="bg-[var(--green-highlight)]"
        />
      </div>
      <div className="w-1/3 h-full">
        <SlideCard
          imageSrc="/public/images/profilePics/Ayla-light.svg"
          image2="/public/images/profilePics/Ayla-dark.png"
          fName="Ayla"
          lName="Dumont"
          description="Creative Director"
          bio="Captian of Design and theif of my heart."
          color="bg-[var(--text-light)]"
        />
      </div>
      <div className="w-1/3 h-full">
        <SlideCard
          imageSrc="/public/images/profilePics/Eli-light.svg"
          image2="/public/images/profilePics/eli-dark.svg"
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
import React from 'react';
import FlipCard from '/src/components/FlipCard.jsx'; 
import SlideCard from '/src/components/SlideCard.jsx'; 
function Team() {
  return (
    <>
    <div className="page-container flex flex-col">
        <div className="section-container flex flex-col mt-[200px] mb-[50px]">
          <div className="section-container">
            <h1 className="brand-subtitle">MEET THE TEAM</h1>
          </div>
          <div className="divider"></div>
          <div className="section-text-container leading-[25px]">
            <p>The Link 212 Project is a multimedia project aimed at showcasing the vibrant culture and community the 250 Baltimore neighborhoods found in the 212 zipcode.</p>
          </div>
        </div>
        

{/* About us section */}
<div className=" w-full justify-center gap-x-4 flex">
      <div className="w-1/3 h-full">
        <FlipCard
          imageSrc="/public/images/profilePics/LaurL ver3.svg"
          fName="Laur"
          lName="Ndikumana"
          description="Chief Design Officer"
          bio="Top notch friendly neighborhood Designer and Videographer."
          email = "LNdikumana@streetfrontdigital.com"
          website = "LauraNdikumana.org"
          color="bg-[var(--Accent)]"
          colorhvr="bg-[var(--Highlight)]"
        />
      </div>
      <div className="w-1/3 h-full">
        <FlipCard
          imageSrc="/public/images/profilePics/AylaL ver3.svg"
          fName="Ayla"
          lName="Dumont"
          description="Creative Director"
          bio="Captian of Design and theif of my heart."
          email = "ADumont@streetfrontdigital.com"
          website = "AylaDumont.com"
          color="bg-[#E1D5C8]"
          colorhvr="bg-[var(--Accent)]"

        />
      </div>
      <div className="w-1/3 h-full">
        <FlipCard
          imageSrc="/public/images/profilePics/EliL ver3.svg"
          fName="Elijah"
          lName="Lewes"
          description="Head Developer"
          bio="Developer and fruit enthusiast."
          email = "ESauerwalt@streetfrontdigital.com"
          website = "ElijahLewes.com"
          color="bg-[var(--Highlight)]"
          colorhvr="bg-[#E1D5C8]"
        />
      </div>
      </div>
    </div>
      

    {/* // Individual bios ang pics. card flip. find animation library */}

    </>
  );
}

export default Team;
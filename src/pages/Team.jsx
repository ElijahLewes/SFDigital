// src/pages/Team.jsx
import React, { useRef } from "react";
import FlipCard from "/src/components/FlipCard.jsx";


function Team() {

  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: window.innerWidth, // scroll one viewport width
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };


  return (
    <>
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

     <section className="section__wrapper">
       <div className="horizontal__scroll" ref={scrollRef}>
        <div className="section__container-column-left">

          <div className="card__wrapper">
           <p className="sfd__title">MEET THE TEAM</p>
          {/* Team cards grid */}
          <div className="cards__container">
              <FlipCard
                imageSrc="/images/profilePics/LaurL ver3.svg"
                fName="Shema"
                lName="Ndikumana"
                description="Chief Design Officer"
                bio="Top notch friendly neighborhood Designer and Videographer."
                email="SNdikumana@streetfrontdigital.com"
                website="LaurNdikumana.org"
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
                colorhvr="var(--flip-card-hover)"
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
          </div>
          <button className="arrow__btn-right" onClick={scrollNext}>
              <img src="../images/right-arrow-dark.svg" alt="right-arrow" />
            </button>
        </div>

         <div className="section__container-column-right">
          <button className="arrow__btn-left" onClick={scrollPrev}>
              <img src="../images/left-arrow-dark.svg" alt="right-arrow" />
            </button>
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
    </>
  );
}

export default Team;

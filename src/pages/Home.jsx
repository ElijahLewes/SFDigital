import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import "../css/layout/_landinglayout.scss";
import ContactUs from "./ContactUs.jsx";

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleHover = (index) => {
    setActiveIndex(index);
    setFlippedIndex(null);
  };

  const handleClick = (index) => {
    if (activeIndex === index) {
      setFlippedIndex((prev) => (prev === index ? null : index));
    }
  };

  const projectData = [
    { title: "Project 1", shortDescription: "Brief description", longDescription: "...", imageSrc: "/images/projectCardPics/pCardFiller.png" },
    { title: "Project 2", shortDescription: "Quick look", longDescription: "...", imageSrc: "/images/projectCardPics/pCardFiller.png" },
    { title: "Project 3", shortDescription: "Overview", longDescription: "...", imageSrc: "/images/projectCardPics/pCardFiller.png" },
    { title: "Project 4", shortDescription: "Overview", longDescription: "...", imageSrc: "/images/projectCardPics/pCardFiller.png" },
    { title: "Project 5", shortDescription: "Overview", longDescription: "...", imageSrc: "/images/projectCardPics/pCardFiller.png" },
    { title: "Project 6", shortDescription: "Overview", longDescription: "...", imageSrc: "/images/projectCardPics/pCardFiller.png" },
  ];

  return (
    <div className="page__container">
      <section className="landing__section">
        <motion.img
          src="/images/remington.JPG"
          alt="Background"
          initial={{ scale: 0.99 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            width: "100%",      
            height: "100%",    
            objectFit: "cover",
            position: "absolute", 
            top: 0,
            left: 0       // behind content
          }}
        />

            {/* Overlay */}
            <div className="landing__overlay"> </div>

          {/* Landing Content */}
          <motion.div
            className="landing__wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <img src="/images/sfd-title-left.svg" alt="SFD Header" className="landing__header" />
            <p className="landing__tagline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="landing__btn-wrapper">
              <button>About Us</button>
              <button>Work With Us</button>
            </div>
            </motion.div>
        </section>
      
      <section className="home__section">
          <div className="home__projectcards-container"
            onMouseLeave={() => {
                  setActiveIndex(null);
                  setFlippedIndex(null);
                }}
              >
                {projectData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    isActive={activeIndex === index}
                    isFlipped={flippedIndex === index}
                    onHover={() => handleHover(index)}
                    onClick={() => handleClick(index)}
                  />
                ))}
          </div>

          <div className="contactus__container">
          <ContactUs />
          </div>
      
      </section>
    </div>
  );
}

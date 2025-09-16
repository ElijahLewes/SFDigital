// src/pages/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
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
    {
      title: "Project 1",
      shortDescription: "Brief description of Project 1.",
      longDescription: "Full project description and goals for Project 1...",
      imageSrc: "/images/projectCardPics/pCardFiller.png",
    },
    {
      title: "Project 2",
      shortDescription: "Quick look at Project 2.",
      longDescription: "Details and background of Project 2...",
      imageSrc: "/images/projectCardPics/pCardFiller.png",
      defaultState: false,
    },
    {
      title: "Project 3",
      shortDescription: "Overview of Project 3.",
      longDescription: "Full project description and collaborators for Project 3...",
      imageSrc: "/images/projectCardPics/pCardFiller.png",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Landing Section (only fills 100vh) */}
      <section className="landing__container relative">
        <motion.img
          src="/images/remington.JPG"
          alt="Background"
          layoutId="landing-image"
          className="absolute inset-0 w-full h-full object-cover"
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        />

        {/* Hero / Landing Content */}
        <motion.div
          className="relative z-10 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          <section className="home__hero-wrapper flex flex-col justify-center items-center min-h-screen">
            <img
              src="/images/sfd-title.svg"
              alt="SFDheader"
              className="home__header w-[600px] md:w-[800px] lg:w-[1000px] h-auto"
            />
            <p className="w-full mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="home-btn-container w-full flex flex-row mt-4">
              <button className="home-btn">About Us</button>
              <button className="home-btn">Work With Us</button>
            </div>
          </section>
        </motion.div>
      </section>

      <section>
        <div className="page__container">
      {/* Project Cards Section */}
            <section
                className="home__project-cards-container"
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
              </section>
        </div>

      </section>
    </div>
  );
}

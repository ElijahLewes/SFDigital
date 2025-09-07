// src/pages/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar.jsx";
import Carousel from "../components/Carousel.jsx";

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
    <div className="relative min-h-screen overflow-hidden">
      {/* Fullscreen background that morphs from the landing image */}
      <motion.img
        src="/images/carousel1.JPG"            // put file at /public/images/carousel1.JPG
        alt="Background"
        layoutId="landing-image"               // must match Landing
        className="absolute inset-0 w-full h-full object-cover"
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      />

      {/* Optional: a dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Page content */}
      <motion.div
        className="relative z-10 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35 }}
      >
        <div className="section-container flex flex-col justify-start min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Hero / Landing Section */}
          <section id="home-container-1" className="page-container-column">
            <div className="landing-container">
              {/* Left Side */}
              <section className="home-title-container flex flex-col flex-1 justify-start p-8">
                <img
                  src="/images/SFD Dark Header.svg"
                  alt="SFDheader"
                  className="home-header-image self-start"
                />
                <p className="w-full mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <div className="home-btn-container w-full flex flex-row mt-4">
                  <button className="home-btn">About Us</button>
                  <button className="home-btn">Work With Us</button>
                </div>
              </section>

              {/* Right Side - Project Cards */}
              <section
                className="home-project-cards-container flex-1 gap-y-2 px-4"
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

          {/* About Us Section */}
          <section className="page-container-column items-start justify-start gap-y-8">
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

            {/* Image carousel */}
            <div className="carousel-container">
              <Carousel />
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
        </div>
      </motion.div>
    </div>
  );
}

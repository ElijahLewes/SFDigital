import React from "react";
import { motion } from "framer-motion";
import "../css/layout/_homelayout.scss";

const ProjectCard = ({
  title,
  shortDescription,
  longDescription,
  isActive,
  isFlipped,
  imageSrc,
  onHover,
  onClick,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={`home__projectcard ${isActive ? "active" : "inactive"}`}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      {/* Front & Back Container */}
      <div className={`home__projectcard-inner ${isFlipped ? "flipped" : ""}`}>
        
        {/* Front */}
        <div
          className={`home__projectcard-front ${isActive ? "active" : "inactive"}`}
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            loading="eager"         // force load on page render
            decoding="sync"
          />
          {/* ... front content */}
        </div>

        {/* Back */}
        <div
          className={`home__projectcard-back ${isActive ? "active" : "inactive"}`}
        >
          <h2 className="home__projectcard-title">{title}</h2>
          <p className="home__projectcard-desc">{longDescription}</p>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;

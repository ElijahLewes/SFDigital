import React from 'react';
import "../css/layout/_homelayout.scss";

const ProjectCard = ({
  title,
  shortDescription,
  longDescription,
  isActive,
  isFlipped,
  imageSrc,
  onHover,
  onClick
}) => {
  return (
<div
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
</div>

  );
};

export default ProjectCard;

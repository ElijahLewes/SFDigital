import React, { useState } from "react";
import EmailDark from "../icons/EmailDark";
import GlobeDark from "../icons/GlobeDark";

const FlipCard = ({
  imageSrc,
  fName,
  lName,
  description,
  bio,
  email,
  website,
  color,     // e.g. "--Heartwood"
  colorhvr,  // e.g. "--Highlight"
}) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped((prev) => !prev);

  const handleMouseEnter = (e) => {
    // Only apply hover color if front is visible
    if (!flipped) e.currentTarget.style.backgroundColor = `var(${colorhvr})`;
  };

  const handleMouseLeave = (e) => {
    // Always reset to base color
    e.currentTarget.style.backgroundColor = `var(${color})`;
  };

  return (
    <div
      className={`flipcard__wrapper ${flipped ? "flipcard__180" : ""}`}
      onClick={toggleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: `var(${color})`,
        transition: "transform 0.8s, background-color 0.3s ease",
      }}
    >
      {/* FRONT */}
      <div className="flipcard__front backface__hidden">
        <div className="flipcard__btn">
         <p>Flip</p>
        </div>
        {imageSrc && <img src={imageSrc} alt={`${fName} ${lName}`} />}
      </div>

      {/* BACK */}
      <div className="flipcard__back backface__hidden">
        <div className="flipcard__btn">
          <p>Flip</p>
        </div>
        <div>
          <p className="flipcard__back-title">
            {fName} {lName}
          </p>
          <p className="flipcard__back-body">{description}</p>
          <p className="flipcard__back-body">{bio}</p>
        </div>
        <div>
          {email && (
            <a href={`mailto:${email}`}>
              <EmailDark /> {email}
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <GlobeDark /> {website}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

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
  color,
  colorhvr,
  flipped: controlledFlipped,        // optional controlled prop
  onFlipChange,                      // optional controlled callback
  className = "",
}) => {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const isControlled = typeof controlledFlipped === "boolean";
  const flipped = isControlled ? controlledFlipped : internalFlipped;

  const setFlipped = (next) => {
    const value = typeof next === "function" ? next(flipped) : next;
    if (!isControlled) setInternalFlipped(value);
    if (onFlipChange) onFlipChange(value);
  };

  const toggleFlip = () => setFlipped((v) => !v);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };
 
  return (
    <div
      className={`flip-card ${className}`}
      role="button"
      tabIndex={0}
      onClick={toggleFlip}
      onKeyDown={onKeyDown}
      aria-pressed={flipped}
    >
      <div className={`flip-card__inner ${flipped ? "is-flipped" : ""}`}>
        {/* FRONT */}
        <div className="flip-card__face flip-card__front" aria-hidden={flipped}>
          {imageSrc && (
            <div className="flip-card__image">
              <img src={imageSrc} alt={`${fName || ""} ${lName || ""}`} />
            </div>
          )}
         
        </div>

        {/* BACK */}
        <div
          className="flip-card__face flip-card__back"
          aria-hidden={!flipped}
        >
          <div className="flip-card__content">
             <div className="flip-card__content">
            <h3 className="flip-card__name">
              {fName} {lName}
            </h3>
            {description && (
              <p className="flip-card__desc">{description}</p>
            )}
          </div>
            {bio && <p className="flip-card__bio">{bio}</p>}
            <div className="flip-card__links">
              {email && (
                <a href={`mailto:${email}`} className="flip-card__link">
                  {email}
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flip-card__link"
                >
                  {website}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

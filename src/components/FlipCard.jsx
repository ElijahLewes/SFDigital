import React, { useState } from 'react';

const FlipCard = ({
  imageSrc,
  fName,
  lName,
  description,
  bio,
  email,
  website,
  color,
  colorhvr
}) => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-[540px] perspective"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
    <div className="flip-btn absolute flex flex-col bg-[var(--Charcoal)] 
      rounded-full w-[65px] h-[25px] text-[var(--Light)] items-center z-[1] mt-5 ml-[340px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
      onClick={() => setFlipped(!flipped)}
    >
      <p> Flip</p>
    </div>

      <div
        className={`relative w-full h-full transition-transform duration-1200 transform-style preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}>

        {/* FRONT */}
        <div
          className={`absolute w-full h-full backface-hidden flex justify-center items-center rounded-[30px] overflow-hidden transition-colors duration-300 ${
            hovered ? colorhvr : color
          }`}
        >

          <img
            src={imageSrc}
            alt={`${fName} ${lName}`}
            className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* BACK */}
        <div
          className={`absolute w-full h-full backface-hidden rotate-y-180 ${colorhvr} text-[var(--text-dark)] flex flex-col items-start justify-start gap-y-8 pt-16 pl-8 rounded-[30px]`}
        >
          <div className="container">
            <h3 className="Career text-5xl font-bold mb-2 leading-[60px] text-left w-full">
              {fName} <br></br> {lName}
            </h3>
            <p className="text-[18px] text-left">{description}</p>
          </div>
          <p className="text-md mt-4 text-left font">{bio}</p>
          <div className="container flex flex-col leading-[8px] font-bold">
            <p className="text-md mt-4 text-left">{email}</p>
            <p className="text-md mt-4 text-left">{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

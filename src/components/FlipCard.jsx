import React, { useState } from 'react';


//Not currently used, but may be used for Project pages in the future
const FlipCard = ({
  imageSrc,
  fName,
  lName,
  description,
  bio,
  color
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-full perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div
          className={`absolute w-full h-full backface-hidden ${color} flex flex-col overflow-hidden p-6`}
        >
          <h3 className="Career text-5xl font-bold mb-2 text-left w-full">{fName} <br /> {lName}</h3>
          <p className="text-md text-left">{description}</p>
          <span className="mt-4 text-2xl text-right">↪</span>
          <div className="w-full h-3/4 flex items-center justify-center mt-24"> {/* Set a fixed height */}
            <img
              src={imageSrc}
              alt={`${fName} ${lName}`}
              className="w-auto h-full  object-contain rounded items-end justify-end"
            />
          </div>
        </div>

        {/* Front*/}
        <div
          className={`absolute w-full h-full backface-hidden rotate-y-180 ${color} text-[var(--text-dark)] flex flex-col items-center justify-center p-6`}
        >
          <h3 className="Career text-5xl font-bold mb-2 text-left w-full">{fName} <br /> {lName}</h3>
          <p className="text-md text-left">{description}</p>
          <p className="text-md mt-4">{bio}</p>
          
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

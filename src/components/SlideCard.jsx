import React, { useState } from 'react';

const SlideCard = ({
  imageSrc,
  image2,
  fName,
  lName,
  description,
  bio,
  color = 'bg-white',
}) => {
  const [showBio, setShowBio] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showImage = isHovered && !showBio && image2 ? image2 : imageSrc;

  return (
    <div
      className={`w-full h-full ${color} cursor-pointer flex flex-col overflow-hidden p-6`}
      onClick={() => setShowBio(!showBio)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Static Section */}
      <div className="flex-shrink-0">
        <h3 className="Career text-5xl font-bold mb-2 text-left w-full">
          {fName} <br /> {lName}
        </h3>
        <p className="text-md text-left">{description}</p>
        <span className="mt-4 text-2xl text-right block">↪</span>
      </div>

      {/* Bottom Slide Section */}
      <div className="relative w-full h-3/4 mt-8 overflow-hidden">
        {/* Image (slides out) */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out transform ${
            showBio ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <img
            src={showImage}
            alt={`${fName} ${lName}`}
            className="w-full h-full object-contain rounded"
          />
        </div>

        {/* Bio (slides in) */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out transform px-4 text-md flex items-center ${
            showBio ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <p className="text-left text-[var(--text-dark)]">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;

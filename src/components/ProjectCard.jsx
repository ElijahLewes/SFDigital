import React, { useState } from 'react';

const ProjectCard = ({
  title,
  shortDescription,
  longDescription,
  isActive,
  isFlipped,
  onHover,
  onClick,
}) => {
  return (
    <div
      className={`w-full transition-all duration-500 cursor-pointer ${
        isActive ? 'basis-1/2' : 'basis-1/4'
      }`}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <div
        className={`relative h-full transition-transform duration-700 transform-style preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-[var(--green-base)] text-[var(--text-light)] p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{shortDescription}</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[var(--green-base)] text-[var(--text-light)] p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

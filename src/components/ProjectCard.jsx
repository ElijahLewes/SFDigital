import React from 'react';

const ProjectCard = ({
  title,
  shortDescription,
  longDescription,
  isActive,
  isFlipped,
  imageSrc,
  onHover,
  onClick,
}) => {
  return (
    <div
      className={`w-full transition-all duration-500 cursor-pointer shadow-md ${
        isActive ? 'basis-[60%]' : 'basis-[8%]'
      }`}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div
          className={`
            absolute w-full h-full backface-hidden 
            transition-all duration-500
            p-4
            ${isActive ? 'rounded-2xl' : 'rounded-md'} 
            ${isActive && imageSrc
              ? 'bg-cover bg-center text-[var(--text-light)]'
              : 'bg-[var(--green-base)] text-[var(--text-light)]'}
          `}
          style={{
            backgroundImage: isActive && imageSrc ? `url(${imageSrc})` : 'none',
          }}
        >
          <h2 className="text-xl font-bold">{title}</h2>
          {isActive && <p className="mt-2 text-sm">{shortDescription}</p>}
        </div>

        {/* Back */}
        <div
          className={`
            absolute w-full h-full backface-hidden rotate-y-180 
            p-4
            transition-all duration-500
            ${isActive ? 'rounded-2xl' : 'rounded-md'}
            bg-[var(--green-base)] text-[var(--text-light)]
          `}
        >
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2 text-sm">{longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

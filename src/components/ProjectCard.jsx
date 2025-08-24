import React from 'react';

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
  className={`
    home-project-card
    transition-all duration-500 cursor-pointer
    ${isActive ? 'h-[300px] basis-[60%]' : 'h-[200px] basis-[8%]'}
    overflow-visible
    relative
  `}
  onMouseEnter={onHover}
  onClick={onClick}
>
{/* Front & Back Container */}
      <div
        className={`
          relative w-full h-full transition-transform duration-700 transform-style preserve-3d
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
{/* Front */}
<div
  className={`
    absolute inset-0 backface-hidden p-4
    ${isActive ? 'rounded-[50px]' : 'rounded-[25px]'}
    flex flex-col justify-end
    text-[var(--text-light)]
    transition-all duration-500
    ${isActive ? '' : 'bg-[var(--Heartwood)]'}  //
  `}
  style={{
    backgroundImage: isActive ? `url(${imageSrc})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <h2 className="text-xl font-bold">{title}</h2>
  {isActive && <p className="mt-2 text-sm">{shortDescription}</p>}
</div>


{/* Back */}
<div
  className={`
    absolute inset-0 backface-hidden rotate-y-180 p-4
    ${isActive ? 'rounded-[50px]' : 'rounded-[25px]'}
    bg-[var(--Accent)] text-[var(--text-light)]
    flex flex-col justify-start
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

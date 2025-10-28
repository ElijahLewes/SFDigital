import React, { useState } from 'react';

const LongFormVideo = ({ 
  title = "Neighborhood Video Story",
  description = "Discover the heart and soul of this neighborhood through the eyes of local residents and business owners. This video showcases what makes this community special.",
  youtubeId = "dQw4w9WgXcQ", // Placeholder YouTube video ID
  thumbnailUrl = null, // Optional custom thumbnail, otherwise uses YouTube default
  className = ""
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Generate YouTube thumbnail URL if not provided
  const getThumbnailUrl = () => {
    if (thumbnailUrl) return thumbnailUrl;
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  // Generate YouTube embed URL
  const getEmbedUrl = () => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
  };

  const handlePlayClick = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className={`longform-video-section ${className}`}>
      <div className="video-container">
        
        {/* Video Title */}
        <div className="video-header">
          <h2 className="video-title">
            {title}
          </h2>
          <div className="video-accent-bar"></div>
        </div>

        {/* Video Player Area */}
        <div className="video-player-wrapper">
          {!isVideoLoaded ? (
            // Thumbnail with Play Button
            <div className="video-thumbnail-container">
              <img
                src={getThumbnailUrl()}
                alt={`${title} video thumbnail`}
                className="video-thumbnail"
                onError={(e) => {
                  // Fallback to a different resolution if maxres fails
                  e.target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                }}
              />
              
              {/* Play Button Overlay */}
              <button 
                className="video-play-button"
                onClick={handlePlayClick}
                aria-label={`Play video: ${title}`}
              >
                <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>

              {/* Video Duration Badge (optional) */}
              <div className="video-duration-badge">
                Video
              </div>
            </div>
          ) : (
            // Embedded YouTube Video
            <div className="video-embed-container">
              <iframe
                src={getEmbedUrl()}
                title={title}
                className="video-iframe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        {/* Video Description */}
        <div className="video-content">
          <div className="video-description">
            <p className="video-text">
              {description}
            </p>
          </div>

          {/* Video Meta Information */}
          <div className="video-meta">
            <div className="video-tags">
              <span className="video-tag">
                Neighborhood Stories
              </span>
              <span className="video-tag">
                Community
              </span>
            </div>
            
            {/* Social Share Buttons */}
            <div className="video-share">
              <span className="share-label">Share this story:</span>
              <button className="share-button">
                <svg className="share-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LongFormVideo;

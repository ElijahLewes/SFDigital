import React from 'react';

const Article = ({ 
  title = "Article Title Placeholder",
  content = "This is placeholder content for the article. When connected to the neighborhoods.json data, this will display dynamic content specific to each neighborhood section.",
  imageSrc = "/images/placeholder-image.jpg",
  imageAlt = "Article image placeholder",
  imagePosition = "right", // "left" or "right"
  className = ""
}) => {
  return (
    <section className={`article-section ${className}`}>
      <div className="article-container">
        {/* Article Title */}
        <div className="article-header">
          <h2 className="article-title">
            {title}
          </h2>
          <div className="article-accent-bar"></div>
        </div>

        {/* Two Column Layout */}
        <div className={`article-content ${imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
          
          {/* Content Column */}
          <div className="content-column">
            <div className="article-text">
              <p className="article-paragraph">
                {content}
              </p>
            </div>
            
            {/* Additional content sections can be added here */}
            <div className="article-tags">
              <span className="tag tag-primary">
                Placeholder Tag 1
              </span>
              <span className="tag tag-secondary">
                Placeholder Tag 2
              </span>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column">
            <div className="image-container">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="article-image"
                onError={(e) => {
                  e.target.src = '/images/placeholder-fallback.jpg';
                }}
              />
              
              {/* Image overlay for better text readability if needed */}
              <div className="image-overlay"></div>
            </div>
            
            {/* Optional image caption */}
            <div className="image-caption">
              Image caption placeholder
            </div>
          </div>
        </div>

        {/* Optional call-to-action or additional info */}
        <div className="article-cta">
          <h3 className="cta-title">
            Learn More About This Neighborhood
          </h3>
          <p className="cta-description">
            Discover more stories, businesses, and community highlights in this area.
          </p>
          <button className="cta-button">
            Explore More
            <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Article;

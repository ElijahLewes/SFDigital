import React from 'react';

const NbdLanding = ({ 
  title = "Neighborhood Name",
  publishedMonth = "October 2025",
  mapImageSrc = "/images/l212/remington-map.svg",
  mapImageAlt = "Neighborhood map",
  sections = [
    { id: "about", title: "About This Area", icon: "info" },
    { id: "gallery", title: "Photo Gallery", icon: "gallery" },
    { id: "video", title: "Community Stories", icon: "video" },
    { id: "businesses", title: "Local Businesses", icon: "business" }
  ],
  className = ""
}) => {

  const handleSectionClick = (sectionId) => {
    // Scroll to section or handle navigation
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const getIconSvg = (iconType) => {
    const icons = {
      info: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      ),
      gallery: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
        </svg>
      ),
      video: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      ),
      business: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
      )
    };
    return icons[iconType] || icons.info;
  };

  return (
    <section className={`nbd-landing-section ${className}`}>
      <div className="nbd-landing-container">
        
        {/* Header Section */}
        <div className="nbd-landing-header">
          <div className="nbd-title-section">
            <h1 className="nbd-title">
              {title}
            </h1>
            <div className="nbd-publish-info">
              <span className="publish-label">Published:</span>
              <span className="publish-date">{publishedMonth}</span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="nbd-landing-content">
          
          {/* Map Section */}
          <div className="nbd-map-section">
            <div className="map-container">
              <img
                src={mapImageSrc}
                alt={mapImageAlt}
                className="nbd-map-image"
                onError={(e) => {
                  e.target.src = '/images/placeholder-map.svg';
                }}
              />
              <div className="map-overlay">
                <div className="map-label">
                  Interactive Map
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="nbd-navigation-section">
            <h2 className="navigation-title">
              Explore This Neighborhood
            </h2>
            <div className="navigation-grid">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  className="navigation-card"
                  onClick={() => handleSectionClick(section.id)}
                  aria-label={`Navigate to ${section.title} section`}
                >
                  <div className="nav-card-icon">
                    {getIconSvg(section.icon)}
                  </div>
                  <div className="nav-card-content">
                    <h3 className="nav-card-title">
                      {section.title}
                    </h3>
                    <div className="nav-card-arrow">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Quick Stats or Additional Info */}
        <div className="nbd-landing-footer">
          <div className="nbd-stats">
            <div className="stat-item">
              <span className="stat-label">Featured Sections</span>
              <span className="stat-value">{sections.length}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Last Updated</span>
              <span className="stat-value">{publishedMonth}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NbdLanding;

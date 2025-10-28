import React from 'react';

const Gallery = ({ 
  title = "Neighborhood Gallery",
  images = [
    {
      src: "/images/placeholder-1.jpg",
      alt: "Gallery image 1",
      description: "Placeholder description for the first gallery image. This will be dynamically populated from neighborhoods.json data."
    },
    {
      src: "/images/placeholder-2.jpg", 
      alt: "Gallery image 2",
      description: "Placeholder description for the second gallery image. This content will showcase neighborhood highlights."
    },
    {
      src: "/images/placeholder-3.jpg",
      alt: "Gallery image 3", 
      description: "Placeholder description for the third gallery image. Each image tells a story about the community."
    }
  ],
  className = ""
}) => {
  return (
    <section className={`gallery-section ${className}`}>
      <div className="gallery-container">
        
        {/* Gallery Title */}
        <div className="gallery-header">
          <h2 className="gallery-title">
            {title}
          </h2>
          <div className="gallery-accent-bar"></div>
        </div>

        {/* Three Column Image Grid */}
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              
              {/* Image Container */}
              <div className="gallery-image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-fallback.jpg';
                  }}
                />
                <div className="gallery-image-overlay"></div>
              </div>

              {/* Image Description */}
              <div className="gallery-description">
                <p className="gallery-text">
                  {image.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Optional Gallery Footer */}
        <div className="gallery-footer">
          <p className="gallery-footer-text">
            Explore more photos and stories from this vibrant neighborhood community.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Gallery;

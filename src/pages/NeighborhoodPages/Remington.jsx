import React from 'react';
import NbdLanding from '../../components/NBDComponents/NbdLanding.jsx';
import LongFormVideo from '../../components/NBDComponents/LongFormVideo.jsx';
import Article from '../../components/NBDComponents/Article.jsx';
import Gallery from '../../components/NBDComponents/Gallery.jsx';
import useNeighborhoodData from '../../hooks/useNeighborhoodData.js';

function Remington() {
  const { data: neighborhoodData, loading, error } = useNeighborhoodData('remington');

  if (loading) {
    return (
      <div className="neighborhood-page">
        <div className="loading-container">
          <p>Loading neighborhood data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="neighborhood-page">
        <div className="error-container">
          <p>Error loading neighborhood data: {error}</p>
        </div>
      </div>
    );
  }

  if (!neighborhoodData) {
    return (
      <div className="neighborhood-page">
        <div className="error-container">
          <p>No neighborhood data found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="neighborhood-page">
      
      {/* Landing Section */}
      <NbdLanding 
        title={neighborhoodData.name}
        publishedMonth={neighborhoodData.publishedMonth}
        mapImageSrc={neighborhoodData.mapImage}
        mapImageAlt={`Map of ${neighborhoodData.name} neighborhood`}
        sections={neighborhoodData.sections}
      />

      {/* Video Section */}
      <div id="video">
        <LongFormVideo 
          title={neighborhoodData.video.title}
          description={neighborhoodData.video.description}
          youtubeId={neighborhoodData.video.youtubeId}
        />
      </div>

      {/* Article Section */}
      <div id="about">
        <Article 
          title={neighborhoodData.article.title}
          content={neighborhoodData.article.content}
          imageSrc={neighborhoodData.article.imageSrc}
          imageAlt={neighborhoodData.article.imageAlt}
          imagePosition={neighborhoodData.article.imagePosition}
        />
      </div>

      {/* Gallery Section */}
      <div id="gallery">
        <Gallery 
          title={neighborhoodData.gallery.title}
          images={neighborhoodData.gallery.images}
        />
      </div>

    </div>
  );
}

export default Remington;    
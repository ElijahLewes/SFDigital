import React from 'react';
import NbdLanding from '../../components/NBDComponents/NbdLanding.jsx';
import LongFormVideo from '../../components/NBDComponents/LongFormVideo.jsx';
import Article from '../../components/NBDComponents/Article.jsx';
import Gallery from '../../components/NBDComponents/Gallery.jsx';

function Remington() {
  return (
    <div className="neighborhood-page">
      
      {/* Landing Section */}
      <NbdLanding 
        title="Remington"
        publishedMonth="October 2025"
        mapImageSrc="/images/l212/remington-map.svg"
        mapImageAlt="Map of Remington neighborhood"
        sections={[
          { id: "video", title: "Community Stories", icon: "video" },
          { id: "about", title: "About Remington", icon: "info" },
          { id: "gallery", title: "Photo Gallery", icon: "gallery" }
        ]}
      />

      {/* Video Section */}
      <div id="video">
        <LongFormVideo 
          title="Discovering Remington: A Neighborhood Story"
          description="Join us as we explore the vibrant community of Remington, where industrial heritage meets modern innovation. Meet the residents, business owners, and community leaders who make this neighborhood special."
          youtubeId="dQw4w9WgXcQ"
        />
      </div>

      {/* Article Section */}
      <div id="about">
        <Article 
          title="The Heart of Remington"
          content="Remington is a neighborhood that perfectly balances its rich industrial past with a promising future. Once home to textile mills and manufacturing, today it's a thriving community of artists, young professionals, and long-time residents who have created something truly unique in Baltimore."
          imageSrc="/images/l212/remington.JPG"
          imageAlt="Remington neighborhood street view"
          imagePosition="right"
        />
      </div>

      {/* Gallery Section */}
      <div id="gallery">
        <Gallery 
          title="Remington Through the Lens"
          images={[
            {
              src: "/images/l212/remington.JPG",
              alt: "Historic Remington building",
              description: "The architectural heritage of Remington tells the story of Baltimore's industrial evolution and community resilience."
            },
            {
              src: "/images/carousel2.JPG",
              alt: "Community gathering space",
              description: "Modern community spaces where neighbors come together to celebrate, create, and build lasting connections."
            },
            {
              src: "/images/carousel3.JPG",
              alt: "Local business district",
              description: "Thriving local businesses that serve as the economic and social backbone of the Remington community."
            }
          ]}
        />
      </div>

    </div>
  );
}

export default Remington;    
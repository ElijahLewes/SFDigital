//Landing page for neighborhood project
import React from 'react';
import { Link } from 'react-router-dom';
function ProjectLanding() {                                     
  return (
    <div className="link212-container ">
      <section className= "page-container">
      <div className="link212-title-container">
        <h1>Link 212 Project</h1>
      </div>
          <div className="divider"></div>
      <div className="link212-description-container">
        <p>This is the landing page for the Link 212 project. Here you can find more information about the project and how to get involved.</p>
      </div>
    </section>
    <section className="page-contaimer">
      <div className="interactive-map-container">
        <h2>Interactive Map</h2>
        <p>Explore the neighborhood through our interactive map. Click on the markers to learn more about each location.</p>
        <div className="map">
          {/* Placeholder for interactive map */}
          <img src="/public/images/map-placeholder.png" alt="Interactive Map" className="map-placeholder" />
        </div>
      </div>
      <div className="neighborhood-menu-container">
        <h2>Neighborhood Menu</h2>
        <ul>
          <li><Link to="/neighborhood/1">Neighborhood 1</Link></li>
          <li><Link to="/neighborhood/2">Neighborhood 2</Link></li>
          <li><Link to="/neighborhood/3">Neighborhood 3</Link></li>
        </ul>
      </div>
      <div className="community-engagement-container">
        <h2>Community Engagement</h2>
        <p>Learn how you can get involved in the Link 212 project and make a difference in your neighborhood.</p>
      </div>
    </section>
    </div>
  );
}   
export default ProjectLanding;
//Landing page for neighborhood project
import React from 'react';
import { Link } from 'react-router-dom';
function ProjectLanding() {                                     
  return (
    <div className="section-container flex flex-col justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/public/images/Link212BackgroundLight.svg)' }}>
      <section id="Link212-page-container" className="page-container-column items-center justify-center">
        <div className="section container flex flex-row w-full h-screen items-center justify-center">
          <div className="subtitle-container">
            <h1 className="link212-subtitle basis-1/2">The Link 212 Project</h1>
          </div>
          <div className="divider"></div>
          <div className="mission-statement-text-container content-center justify-items-center basis-1/2">
            <p>The Link 212 Project is a multimedia project aimed at showcasing the vibrant culture and community the 250 Baltimore neighborhoods found in the 212 zipcode.</p>
          </div>
        </div>
      </section>


{/* // Minimum height of a section options are defined in tailwind.config.js. Current options area: 1/4, 1/3, 1/2, 2/3, 3/4, full */}
    <h2 className="link212-subtitle">Find your neighborhood</h2>
     <section className="page-container-row ">
      <div className="interactive-map-container flex flex-col  items-center justify-center 
      h-3/4 bg-cover bg-center bg-[var(--green-base)] text-[var(--text-light)] bg-opacity-60 
      p-6 rounded-lg shadow-lg basis-1/2">
        <h2>Interactive Map</h2>
        <p>Explore the neighborhood through our interactive map. Click on the markers to learn more about each location.</p>
        <div className="map">
          {/* Placeholder for interactive map */}
          
        </div>
      </div>
      <div className="neighborhood-menu-container basis-1/2 p-6">
        
        <aside className="basis-1/2 h-3/4 text-white p-5" >
          <ul className="space-y-4 items-end">
            <li><a href="#" className="link212-menu-item hover:text-blue-400 bg-cover bg-[var(--green-highlight)] ">Remington: COMING SOON</a></li>
            <li><a href="#" className="link212-menu-item hover:text-blue-400">Jones-Falls: COMING SOON</a></li>
            <li><a href="#" className="link212-menu-item hover:text-blue-400">Abell: COMING SOON</a></li>
          </ul>
        </aside>
      </div>
      
    </section>
  
  </div>
  );
}   
export default ProjectLanding;


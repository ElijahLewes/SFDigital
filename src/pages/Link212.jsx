//Landing page for neighborhood project
import React from 'react';
import { Link } from 'react-router-dom';
function ProjectLanding() {                                     
  return (
    <div>
      <h1>Project Landing Page</h1>
      <p>Welcome to the project landing page. Select a project to see more details.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}   
export default ProjectLanding;
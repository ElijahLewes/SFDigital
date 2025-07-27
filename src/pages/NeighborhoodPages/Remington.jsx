//Populates differently based on neighborhood selected
import React from 'react';
import { Link } from 'react-router-dom';        
function Neighborhood() {
  return (
    <div>
      <h1>Remington</h1>
      <p>This is the neighborhood page. Select a neighborhood to see more details.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}
export default Neighborhood;    
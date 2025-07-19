//Professional contact page with about the team section
import React from 'react';
import { Link } from 'react-router-dom';          
function ContactUs() {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <p>This is the contact us page. Reach out to us for more information.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}
export default ContactUs;

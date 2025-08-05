//Professional contact page with about the team section
import React from 'react';
import { Link } from 'react-router-dom';   

function ContactUs() {
  return (
    <div className="section-container flex flex-col justify-center min-h-screen">
      <section className="contact-us-title-container flex flex-row items-center">
        <div className="contact-form-title">
          <h1>LET'S WORK TOGETHER!</h1>
        </div>
        <p>This is the contact us page. Reach out to us for more information.</p>
        <nav>
          <div className="icon-container">
            {/* add icons for social media links */}
          </div>
        </nav>
      </section>

      <section id="contact-page-container" className="flex flex-row items-center justify-center">
        <div className="contact-right-column flex flex-col text-center items-center justify-center">
          <h2>Operating Hours</h2>
          <p>Monday-Friday: 9 AM - 5 PM</p>
          <p>Saturday: 10 AM - 4 PM</p>
        </div>
        <div className="contact-left-column flex flex-col text-center items-center justify-center">
        
        </div>
      </section>
    </div>
  );
}

export default ContactUs;

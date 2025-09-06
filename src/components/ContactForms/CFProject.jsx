import React, { useState } from 'react';
import ContactFormSubmitBtn from './ContactFormSubmitBtn';
import ArrowAngularTopRight from '../../icons/ArrowLight';

function CFProject({ activeTab }) {
  const [showForm, setShowForm] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormSubmit = () => {
    setShowForm(false);
    setShowThankYou(true);
  };

  const handleNewMessage = () => {
    setShowForm(true);
    setShowThankYou(false);
  };

  if (activeTab !== 'project') return null;

  return (
    <div className="form-container">
      {showThankYou ? (
        <div className="ty-msg-project-form">
          <p className="text-[var(--Charcoal)] w-[450px]">
            Thank you for contacting us! <br /> We will do our best to get back to you within the next 3 business days.
          </p>
          <button 
            onClick={handleNewMessage}
            className=" new-msg-btn text-[var(--Charcoal)]] rounded hover:opacity-100"
            
          >
             <ArrowAngularTopRight />
            Send Another Message
          </button>
        </div>
      ) : (
        <div className={`project-form-wrapper transition-all duration-500 ${showForm ? 'opacity-100' : 'opacity-0 overflow-hidden'}`}>
          <form className="contact-form flex flex-col">
            <h3 className="text-[25px] font-bold">Project Inquiry</h3>
            <input 
              type="text" 
              placeholder="Company Name" 
              className="project-form-input"
              required
            />
            <input 
              type="text" 
              placeholder="Project Type" 
              className="project-form-input"
              required
            />
            <input 
              type="text" 
              placeholder="Budget Range" 
              className="project-form-input"
              required
            />
            <textarea 
              placeholder="Project Description" 
              rows="2" 
              className="project-form-input"
              style={{ paddingTop: '5px' }}
              required
            />
            <ContactFormSubmitBtn onFormSubmit={handleFormSubmit} />
          </form>
        </div>
      )}
    </div>
  );
}

export default CFProject;
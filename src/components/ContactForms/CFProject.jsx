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
    <div className="form__wrapper">
      {showThankYou ? (
        <div className="form__wrapper-ty-project">
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
        <div className={`form__wrapper-project transition-all duration-500 ${showForm ? 'opacity-100' : 'opacity-0 overflow-hidden'}`}>
          <form className="form__wrapper-userinput flex flex-col">
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
              className="form__input-project"
              required
            />
            <input 
              type="text" 
              placeholder="Budget Range" 
              className="form__input-project"
              required
            />
            <textarea 
              placeholder="Project Description" 
              rows="2" 
              className="form__input-project"
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
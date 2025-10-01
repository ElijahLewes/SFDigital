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
    <div className="form__wrapper-project">
      {showThankYou ? (
         <div className="form__wrapper-ty-project">
            <p>
              Thank you for contacting us! <br />We will do our best to get back to you within 3 business days.
            </p>
            <div className="form__newmsg-wrapper">
              <button 
                onClick={handleNewMessage}
                className="form__btn-newmsg-project"
              >
                <ArrowAngularTopRight />
                  Send Another Message
              </button>
            </div>
          </div>
      ) : (
          <form className="form__wrapper-userinput">
            <input 
              type="text" 
              placeholder="Company Name" 
              className="form__input-project"
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
      )}
    </div>
  );
}

export default CFProject;
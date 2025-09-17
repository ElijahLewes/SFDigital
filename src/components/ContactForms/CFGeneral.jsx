import React, { useState } from 'react';
import ContactFormSubmitBtn from './ContactFormSubmitBtn';
import ArrowAngularTopRight from '../../icons/ArrowLight';

function CFGeneral({ activeTab }) {
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

  if (activeTab !== 'general') return null;

  return (
    <div className="form__wrapper-general">
      {showThankYou ? (
        <div className="form__wrapper-ty-general">
          <p>
            Thank you for contacting us! <br />We will do our best to get back to you within 3 business days.
          </p>
          <button 
            onClick={handleNewMessage}
            className="new-msg-btn"
          >
            <ArrowAngularTopRight />
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="form__wrapper-userinput">
          <h3 className="body__font">General Inquiry</h3>
          <input 
            type="text"
            placeholder="Your Name" 
            className="form__input-general"
            required
          />
          <input 
            type="email"
            placeholder="Your Email" 
            className="form__input-general"
            required
          />
          <textarea 
            placeholder="Your Message" 
            rows="4" 
            className="form__input-general"
            required
          />
          <ContactFormSubmitBtn onFormSubmit={handleFormSubmit} />
        </form>
      )}
    </div>
  );
}

export default CFGeneral;

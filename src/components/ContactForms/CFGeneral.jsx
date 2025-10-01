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
          <div className="form__newmsg-wrapper">
          <button 
            onClick={handleNewMessage}
            className="form__btn-newmsg-general"
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

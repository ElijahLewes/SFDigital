import React, { useState } from 'react';
import ContactFormSubmitBtn from './ContactFormSubmitBtn';
import ArrowAngularTopRight from '../../icons/ArrowLight';

function CFLink212({ activeTab }) {
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

  // Updated to check for the correct activeTab value
  if (activeTab !== 'l212') return null;

  return (
    <div className="form__wrapper-l212">
      {showThankYou ? (
         <div className="form__wrapper-ty-l212">
            <p>
              Thank you for contacting us! <br />We will do our best to get back to you within 3 business days.
            </p>
            <div className="form__newmsg-wrapper">
              <button 
                onClick={handleNewMessage}
                className="form__btn-newmsg-l212"
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
              className="form__input-l212"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="form__input-l212"
              required
            />
            <select className="form__input-l212" required>
              <option value="">Select Issue Type</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
            <textarea 
              placeholder="Describe Your Issue" 
              rows="2" 
              className="form__input-l212"
              style={{ paddingTop: '5px' }}
              required
            />
            <ContactFormSubmitBtn onFormSubmit={handleFormSubmit} />
          </form>
      )}
    </div>
  );
}

export default CFLink212;
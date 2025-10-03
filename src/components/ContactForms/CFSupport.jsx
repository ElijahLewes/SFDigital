import React, { useState } from 'react';
import ContactFormSubmitBtn from './ContactFormSubmitBtn';
import ArrowAngularTopRight from '../../icons/ArrowLight';

function CFSupport({ activeTab }) {
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
  if (activeTab !== 'support') return null;

  return (
    <div className="form__wrapper-support">
      {showThankYou ? (
         <div className="form__wrapper-ty-support">
            <p>
              Thank you for contacting us! <br />We will do our best to get back to you within 3 business days.
            </p>
            <div className="form__newmsg-wrapper">
              <button 
                onClick={handleNewMessage}
                className="form__btn-newmsg-support"
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
              className="form__input-support"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="form__input-support"
              required
            />
            <select className="form__input-support" required>
              <option value="">Select Issue Type</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
            <textarea 
              placeholder="Describe Your Issue" 
              rows="2" 
              className="form__input-support"
              style={{ paddingTop: '5px' }}
              required
            />
            <ContactFormSubmitBtn onFormSubmit={handleFormSubmit} />
          </form>
      )}
    </div>
  );
}

export default CFSupport;
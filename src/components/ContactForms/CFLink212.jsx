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
  if (activeTab !== 'support') return null;

  return (
    <div className="form-container">
      {showThankYou ? (
        <div className="ty-msg-l212-form">
          <p className="text-[var(--Light)] w-[450px]">
            Thank you for contacting us! <br />We will do our best to get back to you within the next 3 business days.
          </p>
          <button 
            onClick={handleNewMessage}
            className="new-msg-btn text-[var(--Light)] hover:opacity-100"
          >
            <ArrowAngularTopRight />
            Send Another Message
          </button>
        </div>
      ) : (
        <div className={`l212-form-wrapper transition-all duration-500 ${showForm ? 'opacity-100' : 'opacity-50 overflow-hidden'}`}>
          <form className="contact-form flex flex-col gap-4">
            <h3 className="text-[25px] font-bold text-[var(--Light)]">Link 212 Support</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="l212-form-input"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="l212-form-input"
              required
            />
            <select className="l212-form-input" required>
              <option value="">Select Issue Type</option>
              <option value="technical">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
            <textarea 
              placeholder="Describe Your Issue" 
              rows="2" 
              className="l212-form-input"
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

export default CFLink212;
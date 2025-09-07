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
    <div className="form-container">
      {showThankYou ? (
        <div className="ty-msg-general-form">
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
       <div className="general-form-wrapper">
            <form
               className={`contact-form flex flex-col transition-opacity duration-500 ease-in-out ${
                activeTab === 'general' ? 'opacity-100' : 'opacity-20 pointer-events-none'
                }`}>
            <h3 className="text-[25px] font-bold text-[var(--Light)]">General Inquiry</h3>
            <input 
              type="text"
              placeholder="Your Name" 
              className="general-form-input"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="general-form-input"
              required
            />
            <textarea 
              placeholder="Your Message" 
              rows="2" 
              className="general-form-input"
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

export default CFGeneral;
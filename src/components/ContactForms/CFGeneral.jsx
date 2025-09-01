import React, { useState } from 'react';
import ContactFormSubmitBtn from './ContactFormSubmitBtn';

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
        <div className="thank-you-message text-center p-6 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-3">Thank You!</h3>
          <p className="text-green-700 mb-4">
            Thank you for contacting us! We will do our best to get back to you within the next 3 business days.
          </p>
          <button 
            onClick={handleNewMessage}
            className="bg-[var(--green-base)] text-white px-4 py-2 rounded hover:opacity-80"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <div className={`form-wrapper transition-all duration-500 ${showForm ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <form className="contact-form flex flex-col gap-4">
            <h3 className="text-xl font-bold">General Inquiry</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-2 border rounded"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-2 border rounded"
              required
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="p-2 border rounded"
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
import React, { useState } from 'react';

function ContactFormSubmitBtn({ onFormSubmit }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Set submitted state
    setIsSubmitted(true);
    
    // Notify parent component to close form and show message
    if (onFormSubmit) {
      setTimeout(() => {
        onFormSubmit();
      }, 1000); // Wait 1 second before closing to show "Message Sent!" feedback
    }
  };

  return (
    <button 
      type="submit"
      onClick={handleSubmit} 
      className="contact-form-submit-btn bg-[var(--green-base)] text-white p-2 rounded hover:opacity-80 transition-all duration-300"
      disabled={isSubmitted}
    >
      {isSubmitted ? 'Message Sent!' : 'Send Message'}
    </button>
  );
}

export default ContactFormSubmitBtn;
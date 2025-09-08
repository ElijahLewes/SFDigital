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
    <div className="submit-btn-wrapper flex w-full justify-end pr-[20px]">
    <button 
      type="submit"
      onClick={handleSubmit} 
      className="contact-form-submit-btn hover:opacity-100 transition-all duration-300"
      disabled={isSubmitted}
    >
      {isSubmitted ? 'Sent!' : 'Submit'}
    </button>
    </div>
  );
}

export default ContactFormSubmitBtn;
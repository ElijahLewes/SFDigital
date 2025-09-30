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
    <div className="form__btn-wrapper">
    <button 
      type="submit"
      onClick={handleSubmit} 
      className="form__btn-submit"
      disabled={isSubmitted}
    >
      {isSubmitted ? 'Sent!' : 'Submit'}
    </button>
    </div>
  );
}

export default ContactFormSubmitBtn;
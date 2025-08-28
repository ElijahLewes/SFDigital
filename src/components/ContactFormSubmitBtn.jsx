import {react, useState} from 'react';


function ContactFormSubmitBtn() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission goes here
    setIsSubmitted(true);
  };

  return (
    <button 
      type="submit"
      onClick={handleSubmit} 
      className="contact-form-submit-btn bg-[var(--green-base)] text-white p-2 rounded hover:opacity-80"
    >
      {isSubmitted ? 'Message Sent!' : 'Send Message'}
    </button>
  );
}
export default ContactFormSubmitBtn;
import React, { useState } from 'react';

function ContactForms() {
  const [activeTab, setActiveTab] = useState('general');

  // form renderer
  const renderForm = () => {
    switch (activeTab) {
      case 'general':
        return (
          <form className="contact-form flex flex-col gap-4 max-w-md">
            <h3 className="text-xl font-bold">General Inquiry</h3>
            <input type="text" placeholder="Your Name" className="p-2 border rounded-md" />
            <input type="email" placeholder="Your Email" className="p-2 border rounded-md" />
            <textarea placeholder="Your Message" rows="4" className="p-2 border rounded-md" />
            <button type="submit" className="contact-form-submit-btn">Send Message</button>
          </form>
        );

      case 'services':
        return (
          <form className="contact-form flex flex-col gap-4 max-w-md">
            <h3 className="text-xl font-bold">Services Inquiry</h3>
            <input type="text" placeholder="Company / Organization" className="p-2 border rounded-md" />
            <input type="text" placeholder="Service Type (e.g. Web Design, Branding)" className="p-2 border rounded-md" />
            <input type="text" placeholder="Budget Range" className="p-2 border rounded-md" />
            <textarea placeholder="Project Details" rows="4" className="p-2 border rounded-md" />
            <button type="submit" className="contact-form-submit-btn">Submit Services Request</button>
          </form>
        );

      case 'link212':
        return (
          <form className="contact-form flex flex-col gap-4 max-w-md">
            <h3 className="text-xl font-bold">Link 212 Request</h3>
            <input type="text" placeholder="Your Name" className="p-2 border rounded-md" />
            <input type="email" placeholder="Your Email" className="p-2 border rounded-md" />
            <select className="p-2 border rounded-md">
              <option>Select Request Type</option>
              <option>Technical Support</option>
              <option>Billing Question</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Describe your request" rows="4" className="p-2 border rounded-md" />
            <button type="submit" className="contact-form-submit-btn">Submit Link 212 Request</button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="section-container flex flex-col justify-center min-h-screen p-8">
      <section className="contact-us-title-container flex flex-col items-center mb-8">
        <div className="contact-form-title mb-4">
          <h1 className="text-4xl font-bold">LET&apos;S WORK TOGETHER!</h1>
        </div>
        <p className="text-center mb-6">Choose the type of inquiry below and fill out the form.</p>
        
        {/* Tab Navigation */}
        <div className="tab-container flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('general')}
            className={`tab-button px-6 py-2 rounded ${
              activeTab === 'general'
                ? 'text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            style={{ backgroundColor: activeTab === 'general' ? 'var(--Charcoal)' : '' }}
          >
            General
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`tab-button px-6 py-2 rounded ${
              activeTab === 'services'
                ? 'text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            style={{ backgroundColor: activeTab === 'services' ? 'var(--Light)' : '' }}
          >
            Services
          </button>

          <button
            onClick={() => setActiveTab('link212')}
            className={`tab-button px-6 py-2 rounded ${
              activeTab === 'link212'
                ? 'text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            style={{ backgroundColor: activeTab === 'link212' ? 'var(--Collard-Green)' : '' }}
          >
            Link 212
          </button>
        </div>

        {/* Form Container */}
        <div className="form-container">
          {renderForm()}
        </div>
      </section>

      {/* Info Section */}
      <section id="contact-page-container" className="flex flex-row items-center justify-center gap-12 mt-8">
        <div className="contact-right-column flex flex-col text-center items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
          <p>Monday-Friday: 9 AM - 5 PM</p>
          <p>Saturday: 10 AM - 4 PM</p>
        </div>
        <div className="contact-left-column flex flex-col text-center items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: contact@sf.com</p>
        </div>
      </section>
    </div>
  );
}

export default ContactForms;

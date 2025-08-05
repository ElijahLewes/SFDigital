import React, { useState } from 'react';

function ContactForms() {
  const [activeTab, setActiveTab] = useState('general');

  const renderForm = () => {
    switch (activeTab) {
      case 'general':
        return (
          <form className="contact-form flex flex-col gap-4 max-w-md">
            <h3 className="text-xl font-bold">General Inquiry</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-2 border rounded"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-2 border rounded"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="p-2 border rounded"
            />
            <button 
              type="submit" 
              className="bg-[var(--green-base)] text-white p-2 rounded hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        );
      
      case 'project':
        return (
          <form className="contact-form flex flex-col gap-4 max-w-md">
            <h3 className="text-xl font-bold">Project Inquiry</h3>
            <input 
              type="text" 
              placeholder="Company Name" 
              className="p-2 border rounded"
            />
            <input 
              type="text" 
              placeholder="Project Type" 
              className="p-2 border rounded"
            />
            <input 
              type="text" 
              placeholder="Budget Range" 
              className="p-2 border rounded"
            />
            <textarea 
              placeholder="Project Description" 
              rows="4" 
              className="p-2 border rounded"
            />
            <button 
              type="submit" 
              className="bg-[var(--green-base)] text-white p-2 rounded hover:opacity-80"
            >
              Submit Project Inquiry
            </button>
          </form>
        );
      
      case 'support':
        return (
          <form className="contact-form flex flex-col gap-4 max-w-md">
            <h3 className="text-xl font-bold">Support Request</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-2 border rounded"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-2 border rounded"
            />
            <select className="p-2 border rounded">
              <option>Select Issue Type</option>
              <option>Technical Support</option>
              <option>Billing Question</option>
              <option>Other</option>
            </select>
            <textarea 
              placeholder="Describe your issue" 
              rows="4" 
              className="p-2 border rounded"
            />
            <button 
              type="submit" 
              className="bg-[var(--green-base)] text-white p-2 rounded hover:opacity-80"
            >
              Submit Support Request
            </button>
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
          <h1 className="text-4xl font-bold">LET'S WORK TOGETHER!</h1>
        </div>
        <p className="text-center mb-6">Choose the type of inquiry below and fill out the form.</p>
        
        {/* Tab Navigation */}
        <div className="tab-container flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('general')}
            className={`tab-button px-6 py-2 rounded ${
              activeTab === 'general' 
                ? 'bg-[var(--green-base)] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('project')}
            className={`tab-button px-6 py-2 rounded ${
              activeTab === 'project' 
                ? 'bg-[var(--green-base)] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Project
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`tab-button px-6 py-2 rounded ${
              activeTab === 'support' 
                ? 'bg-[var(--green-base)] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Support
          </button>
        </div>

        {/* Form Container */}
        <div className="form-container">
          {renderForm()}
        </div>
      </section>

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

export default ContactUs;
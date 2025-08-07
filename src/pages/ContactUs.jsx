//Professional contact page with about the team section
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ContactUs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'General' },
    { id: 'tab2', label: 'Project' },
    { id: 'tab3', label: 'Support' }
  ];

  return (
    <div className="section-container flex flex-col justify-center min-h-screen">
      <section className="contact-us-title-container flex flex-col items-center mb-8">
        <div className="contact-form-title mb-4">
          <h1 className="text-4xl font-bold">LET'S WORK TOGETHER!</h1>
        </div>
        <p className="text-center">This is the contact us page. Reach out to us for more information.</p>
        <nav>
          <div className="icon-container">
            {/* add icons for social media links */}
          </div>
        </nav>
      </section>

      <section id="contact-page-container" className="flex flex-row items-start justify-center gap-8">
        <div className="contact-right-column flex flex-col text-center items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
          <p>Monday-Friday: 9 AM - 5 PM</p>
          <p>Saturday: 10 AM - 4 PM</p>
        </div>
        
        <div className="contact-left-column flex flex-col text-center items-center justify-center">
          <div className="flex h-64 w-full max-w-4xl mx-auto border rounded-xl shadow overflow-hidden">
            {/* Sidebar Tabs */}
            <div className="flex flex-col bg-gray-100">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center transition-all duration-300 ease-in-out overflow-hidden
                      ${isActive ? 'w-48 bg-white font-semibold' : 'w-16 bg-gray-100 hover:bg-gray-200'}
                      px-4 py-3 border-b border-gray-300`}
                  >
                    <span className="text-xl mr-2">{tab.icon}</span>
                    {isActive && <span className="whitespace-nowrap">{tab.label}</span>}
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6">
              {activeTab === 'tab1' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">General Inquiry</h3>
                  <p>Submit a general inquiry form here.</p>
                </div>
              )}
              {activeTab === 'tab2' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Project Request</h3>
                  <p>Tell us about your project needs.</p>
                </div>
              )}
              {activeTab === 'tab3' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Support</h3>
                  <p>Get help with existing services.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;

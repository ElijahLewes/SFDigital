// Professional contact page with about the team section
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactForms from '../components/ContactForms.jsx';

function ContactUs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'General', icon: <FiHome /> },
    { id: 'tab2', label: 'Project', icon: <FiFolder /> },
    { id: 'tab3', label: 'Support', icon: <FiLifeBuoy /> }
  ];

  return (
    <div className="contact-page-container">
      {/* Title + Socials */}
      <section className="contact-us-title-container flex flex-col justify-start px-32">


        <div className="contact-form-title mb-6">
          <h1 className="text-5xl font-bold text-left Career leading-[3.5rem]">
            LET'S CREATE <br /> TOGETHER!
          </h1>
        </div>
        <p className="text-left text-base">
          Interested in collaborating, <br /> getting featured or working with us?
          <br />
          Leave us a message and we’ll be in touch!
        </p>


        <nav>
          <div className="sm-btns-container flex flex-row gap-x-10 mt-[50px] mb-20">
            <div className="sm-container flex flex-row justify-center items-center rounded-full bg-[#2E4052] w-[160px] h-[40px]">
              <p className="text-center text-[#F2E5D7]">@SFDigital</p>
            </div>

            <div className="sm-container flex flex-row justify-center items-center rounded-full bg-[#2E4052] w-[165px] h-[40px]">
              <p className="text-center text-[#F2E5D7]">@SFDigital</p>
            </div>

            <div className="sm-container flex flex-row justify-center items-center rounded-full bg-[#2E4052] w-[180px] h-[40px]">
              <p className="text-center text-[#F2E5D7]">@StreetfrontDigital</p>
            </div>
            {/* add icons for social media links */}
          </div>
        </nav>
      </section>

      {/* Operating Hours */}
      <div className="contact-right-column flex flex-col text-center items-center justify-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
        <p>Monday-Friday: 9 AM - 5 PM</p>
        <p>Saturday: 10 AM - 4 PM</p>
      </div>
\
      {/* Contact Form Tabs */}
      <section id="contact-form-section">
          {/* Sidebar Tabs */}
          <div className="tabs">
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
          <div className="contact-form-container">
            {activeTab === 'tab1' && (
              <div className="gen-form">
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
      </section>
   </div>
  );  
}

export default ContactUs;

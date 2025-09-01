// Professional contact page with about the team section
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CFGeneral from '../components/ContactForms/CFGeneral.jsx';
import CFProject from '../components/ContactForms/CFProject.jsx';
import CFLink212 from '../components/ContactForms/CFLink212.jsx';


function ContactUs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'General' },
    { id: 'tab2', label: 'Project' },
    { id: 'tab3', label: 'Support' }
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
      <div className="hours-container">
        <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
        <p>Monday-Friday: 9 AM - 5 PM</p>
        <p>Saturday: 10 AM - 4 PM</p>
      </div>


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
            Services
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`tab-button px-6 py-2 rounded ${
              activeTab === 'support' 
                ? 'bg-[var(--green-base)] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Link 212
          </button>
        </div>


          {/* Content Area */}
          <div className="contact-form-container">
            {<CFGeneral activeTab={activeTab} />}
            {<CFProject activeTab={activeTab} />}
            {<CFLink212 activeTab={activeTab} />}
          </div>
      </section>
    </div>
   </div>
  );
}

export default ContactUs;

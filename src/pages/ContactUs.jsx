// Professional contact page with about the team section
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CFGeneral from '../components/ContactForms/CFGeneral.jsx';
import CFProject from '../components/ContactForms/CFProject.jsx';
import CFLink212 from '../components/ContactForms/CFLink212.jsx';


function ContactUs() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'tab1', label: 'General' },
    { id: 'tab2', label: 'Project' },
    { id: 'tab3', label: 'Support' }
  ];

  return (
    <div className="contact-page-container">
      {/* Title + Socials */}
      <section className="contact-us-title-container flex flex-col justify-start px-20 mb-[10px]">
        <div className="contact-form-title mb-6">
          <p className="contact-page-title">
            LET'S CREATE <br /> TOGETHER!
          </p>
        </div>
        <p className="text-left text-base">
          Interested in collaborating, <br /> getting featured or working with us?
          <br />
          Leave us a message and we’ll be in touch!
        </p>

          <div className="sm-btns-container flex flex-row gap-x-10 mt-[50px] mb-20">

            <a 
              href="https://www.instagram.com/streetfrontdigital/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline text-[var(--Light)] hover:no-underline"
            >
            <button className="sm-container-ig">
            <img src="/images/ig-icon-light.svg" 
            alt="instagram icon" 
            className="w-[30px] h-[30px]"
            />
             @SFDigital
            </button>
            </a>

            <a 
              href="https://www.youtube.com/@StreetfrontDigital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline text-[var(--Light)] hover:no-underline"
            >
            <button className="sm-container-yt">
            <img src="/images/yt-icon-light.svg" 
            alt="youtube icon" 
            className="w-[40px] h-[40px]" 
            />
              @StreetfrontDigital
            </button>
            </a>


            {/* add icons for social media links */}
          </div>

      </section>

        <div className="section-container flex flex-col justify-center min-h-screen p-8">
          <section className="contact-us-title-container flex flex-col items-center mb-8">
      
    <div className="Parent-Cont-Form flex"> {/*CONTACT FORM WRAPPER*/}

        {/* Tab Navigation */}
        <div className="tab-container flex flex-col">
          <button
            onClick={() => setActiveTab('general')}
            className={`tab-button transform transition-all duration-300 ease-in-out ${
              activeTab === 'general' 
                ? 'bg-[var(--Charcoal)] text-[var(--Light)] translate-x-0' 
                : 'bg-[var(--Charcoal)] text-[var(--Light)] translate-x-60'
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('project')}
            className={`tab-button transform transition-all duration-500 ease-in-out ${
              activeTab === 'project' 
                ? 'bg-[#E1D5C8] text-[var(--Charcoal)] translate-x-0' 
                : 'bg-[#E1D5C8] text-[var(--Charcoal)] translate-x-60'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`tab-button transform transition-all duration-500 ease-in-out ${
              activeTab === 'support' 
                ? 'bg-[var(--Collard-Green)] text-[var(--Light)] translate-x-0' 
                : 'bg-[var(--Collard-Green)] text-[var(--Light)] translate-x-60'
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

    </div> {/*CONTACT FORM WRAPPER*/}
      </section>
    </div>
   </div>
  );
}

export default ContactUs;

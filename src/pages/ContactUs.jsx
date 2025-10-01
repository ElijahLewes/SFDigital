 import React, { useState } from 'react';
import CFGeneral from '../components/ContactForms/CFGeneral.jsx';
import CFProject from '../components/ContactForms/CFProject.jsx';
import CFLink212 from '../components/ContactForms/CFLink212.jsx';
import "../css/App.scss";

function ContactUs() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="page-container">
    <div className="contactus__container">
      {/* Title + Socials */}
      <section className="contactform__section">
        <div className="sfd__title">
          <p>
            LET'S CREATE <br /> TOGETHER!
          </p>
        </div>
        <p className="body__font">
          Interested in collaborating, <br /> getting featured or working with us?
          <br />
          Leave us a message and we’ll be in touch!
        </p>

        <div className="sm__container">
          <a 
            href="https://www.instagram.com/streetfrontdigital/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="sm__container-ig">
              <img src="/images/ig-icon-light.svg" alt="Instagram icon"/>
              @SFDigital
            </button>
          </a>

          <a 
            href="https://www.youtube.com/@StreetfrontDigital" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="sm__container-yt">
              <img src="/images/yt-icon-light.svg" alt="YouTube icon"/>
              @StreetfrontDigital
            </button>
          </a>
        </div>
      </section>

      {/* Form Section */}
      <div className="contactform__wrapper">
        {/* Tab Navigation */}
       <div className="tab__container">
          <button
            className={`tab__button-general ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>

          <button
            className={`tab__button-project ${activeTab === 'project' ? 'active' : ''}`}
            onClick={() => setActiveTab('project')}
          >
            Projects
          </button>

          <button
            className={`tab__button-l212 ${activeTab === 'l212' ? 'active' : ''}`}
            onClick={() => setActiveTab('l212')}
          >
            Link 212
          </button>
        </div>

        {/* Content Area */}
        <div className="form__wrapper-userinput">
          <CFGeneral activeTab={activeTab} />
          <CFProject activeTab={activeTab} />
          <CFLink212 activeTab={activeTab} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default ContactUs;

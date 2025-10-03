 import React, { useState } from 'react';
import CFGeneral from '../components/ContactForms/CFGeneral.jsx';
import CFProject from '../components/ContactForms/CFProject.jsx';
import CFSupport from '../components/ContactForms/CFSupport.jsx';
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
            className={`tab__button-general ${activeTab === 'general' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('general')}
          >
             <p className="tab__title">
              General
            </p>
            <div className="tab__divider-general"></div>
            <p className="tab__body">
              Interested in collaborating with us? <br></br> Tell us about yourself!
            </p>
          </button>

          <button
            className={`tab__button-project ${activeTab === 'project' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('project')}
          >
            <p className="tab__title">
              Project
            </p>
            <div className="tab__divider-project"></div>
            <p className="tab__body">
              Interested in collaborating with us? <br></br> Tell us about yourself!
            </p>
          </button>

          <button
            className={`tab__button-support ${activeTab === 'support' ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab('support')}
          >
            <p className="tab__title">
              Support
            </p>
            <div className="tab__divider-support"></div>
            <p className="tab__body">
              Interested in collaborating with us? <br></br> Tell us about yourself!
            </p>
          </button>
        </div>

        {/* Content Area */}
        <div className="form__wrapper-userinput">
          <CFGeneral activeTab={activeTab} />
          <CFProject activeTab={activeTab} />
          <CFSupport activeTab={activeTab} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default ContactUs;

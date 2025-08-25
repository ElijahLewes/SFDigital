//Professional contact page with about the team section
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
    <div className="section-container flex flex-col justify-center mt-[80px] min-h-screen">
      <section className="contact-us-title-container flex flex-col justify-start px-32">
        <div className="contact-form-title mb-6 ">
          <h1 className="text-5xl font-bold text-left font-[Career] leading-[3.5rem]">LET'S CREATE <br></br>TOGETHER!</h1>
        </div>
        <p className="text-left text-base">Interested in collaborating, <br></br> getting featured or working with us?<br></br>
      Leave us a message and we’ll be in touch!</p>
        <nav>
          <div className="sm-btns-container flex flex-row gap-x-10 mt-[50px] mb-20">
            <div className='sm-container flex flex-row justify-center items-center rounded-full bg-[#2E4052] w-[160px] h-[40px]'>
              <p className="text-center text-[#F2E5D7]"> @SFDigital </p>
            </div>

            <div className='sm-container flex flex-row justify-center items-center rounded-full bg-[#2E4052] w-[165px] h-[40px]'>
            <p className="text-center text-[#F2E5D7]"> @SFDigital </p>
            </div>

            <div className='sm-container flex flex-row justify-center items-center rounded-full bg-[#2E4052] w-[180px] h-[40px]'>
            <p className="text-center text-[#F2E5D7]"> @StreetfrontDigital </p>
            </div>
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
           <ContactForms activeTab={activeTab} />
            </div>
          </div>
        
      </section>
   </div>
  );  
}

export default ContactUs;

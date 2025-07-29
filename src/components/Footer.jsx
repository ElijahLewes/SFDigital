import React from 'react';

function Footer() {
  return (
    <footer className="footer-container h-[33vh] flex flex-row bg-[var(--green-base)] text-[var(--text-light)] p-4">
      <div className="left-side-footer w-1/2 flex flex-col items-start justify-between h-full">
        <div className="property items-start justify-start w-full">
          <span className="text-xs font-bold text-left w-full">
            &copy; {new Date().getFullYear()} SFD. All Rights Reserved.
          </span>
        </div>
        <div className="footer-subtitle text-[10rem] font-bold leading-none" style={{ fontSize: 'clamp(3rem, 15vw, 10rem)' }}>
          SFD
        </div>
      </div>
      {/* Vertical divider */}
      <div className="h-full w-px bg-[var(--text-light)] mx-6 self-center"></div>
      <div className="right-side-footer w-1/2 flex flex-col items-center justify-start">
        <div className="flex flex-row justify-center items-start gap-12 w-full mt-0">
          {/* ABOUT column */}
          <div className="flex flex-col items-center">
            <span className="font-[Career] text-lg mb-2">ABOUT</span>
            <a href="/team" className="hover:underline">Team</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </div>
          {/* PROJECTS column */}
          <div className="flex flex-col items-center">
            <span className="font-[Career] text-lg mb-2">PROJECTS</span>
            <a href="/link212" className="hover:underline">Link 212</a>
            {/* Add more project links as needed */}
          </div>
          {/* CONTACT column */}
          <div className="flex flex-col items-center">
            <span className="font-[Career] text-lg mb-2">CONTACT</span>
            <a href="/contact" className="hover:underline">Contact Form</a>
            {/* Add more contact links as needed */}
          </div>
        </div>
        <div className="footer-credits text-xs text-center mt-4 w-full">
          <span>Powered by SFD</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React, { useState } from "react";
import "../css/state/_notifs.scss";
import "../css/App.scss";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("contactus@streetfrontdigital.com");
    setCopied(true);

    // auto-hide after 4 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <footer className="footer__parent-container">

      {/* LEFT SIDE */}
      <div className="footer__left-container">
        <div className="footer__icon-wrapper">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/streetfrontdigital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer__icon-ig">
              <img src="images/footer-ig-light.svg" alt="footer instagram icon" />
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@StreetfrontDigital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer__icon">
              <img src="images/footer-yt-light.svg" alt="footer youtube icon" />
            </div>
          </a>

          {/* Email */}
          <button className="footer__icon-mail" onClick={copyEmail}>
            <img src="images/footer-mail-light.svg" alt="footer email icon" />
          </button>
        </div>

        <p className="footer__tagline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        <div className="footer__title-wrapper">
          <p className="footer__title">SFD</p>
          <img
            src="images/footer-arrow.svg"
            alt="diagonal arrow"
            className="footer__arrow"
          />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="divider__vertical"></div>

      {/* RIGHT SIDE */}
      <div className="footer__right-container">
        <div className="footer__right-column">
          <p className="footer__subtitle">About</p>
          <p className="footer__body-title">Who We Are</p>
          <p className="footer__body-title">Our Mission</p>
          <p className="footer__body-title">Meet the Team</p>
        </div>

        <div className="footer__right-column">
          <p className="footer__subtitle">Projects</p>
          <p className="footer__body-title">Link 212</p>
        </div>

        <div className="footer__right-column">
          <p className="footer__subtitle">Contact</p>
        </div>
      </div>

      {/* NOTIFICATION */}
      <div className={`notif__copy ${copied ? "show" : ""}`}>
        📋 Email copied to clipboard!
        <button
          className="notif__copy-delete"
          onClick={() => setCopied(false)}
        ></button>
      </div>
    </footer>
  );
}

export default Footer;

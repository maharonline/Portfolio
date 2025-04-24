import React from 'react';
import './Contact.css';
import {
  FaDribbble,
  FaEnvelopeOpen,
  FaFacebookF,
  FaPhoneSquareAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="contact-component">

      <section className='contact section' >
        <h2 className="section_title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact_container container">
          <div className="contact_data">
            <h3 className="contact_title">Let’s Connect</h3>

            <p className="contact_description">
              I’m always open to discussing new projects, innovative ideas, or opportunities to collaborate and bring your vision to life. Feel free to reach out!
            </p>

            <div className="contact_info">
              <div className="info_item">
                <FaEnvelopeOpen className="info_icon" />
                <div>
                  <span className="info_title">Mail Me</span> <br />
                  <span className="info_des">ha698174@gmail.com</span>
                </div>
              </div>

              <div className="info_item">
                <FaPhoneSquareAlt className="info_icon" />
                <div>
                  <span className="info_title">Call Me</span> <br />
                  <span className="info_des">+92 3226075308</span>
                </div>
              </div>
            </div>

            <div className="contact_socials">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="contact_social-link"><FaFacebookF /></a>
              <a href="https://x.com/?lang=en" target="_blank" rel="noreferrer" className="contact_social-link"><FaXTwitter /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="contact_social-link"><FaYoutube /></a>
              <a href="https://www.dribble.com" target="_blank" rel="noreferrer" className="contact_social-link"><FaDribbble /></a>
            </div>
          </div>

          <form className="contact_form">
            <div className="form_input-group">
              <input type="text" placeholder="Your Name" className="form_control" />
              <input type="email" placeholder="Your Email" className="form_control" />
              <input type="text" placeholder="Your Subject" className="form_control" />
            </div>

            <textarea
              className="form_control textarea"
              placeholder="Your Message"
            ></textarea>

            <a className="button"><span className="button_icon contact_button-icon"><FiSend /></span>Send Message </a>
          </form>
        </div>
      </section>
    </div>
  );
}

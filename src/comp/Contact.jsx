import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
import translation from './translation';

const Contact = ({language}) => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-links'>
          <h3>__{translation[language].Company}__</h3>
          <span>- {translation[language].AboutUs}</span>
          <span>- {translation[language].ContactUs}</span>
          <span>- {translation[language].Reservation}</span>
          <span>- {translation[language].PrivacyPolicy}</span>
          <span>- {translation[language].TermsCondition}</span>
        </div>
        
        <div className='footer-details'>
          <h3>__{translation[language].ContactDetails}__</h3>
          <p>{translation[language].Location}</p>
          <span>{translation[language].locationsite}</span>
          <p>{translation[language].Phone}</p>
          <span>+20 1000 452 793</span>
          <p>{translation[language].Email}</p>
          <span>tasneemjanina@gmail.com</span>
        </div>

        <div className='footer-social'>
          <h3>__{translation[language].FollowUs}__</h3>
          <div className='social-icons'>
            <a href='https://web.facebook.com/profile.php?id=100006902475228' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='icon facebook-icon' />
            </a>
            <a href='https://www.instagram.com/tasnem_salim/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='icon instagram-icon' />
            </a>
            <a href='https://www.linkedin.com/in/tasneem-salim-1b1480287/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='icon linkedin-icon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;


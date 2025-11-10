import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-title">{t('footer.title')}</h2>
          <p>
            {t('footer.description')}
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">{t('footer.quickLinks')}</h2>
          <ul>
            <li><a href="#home">{t('footer.home')}</a></li>
            <li><a href="#about">{t('footer.about')}</a></li>
            <li><a href="#services">{t('footer.services')}</a></li>
            <li><a href="#">{t('footer.schemes')}</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">{t('footer.contactUs')}</h2>
          <ul>
            <li>{t('footer.email')}</li>
            <li>{t('footer.phone')}</li>
            <li>{t('footer.address')}</li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2 className="footer-title">{t('footer.followUs')}</h2>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;

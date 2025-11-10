// File: src/components/LoginPage.jsx
import React, { useState } from "react";
import { FaGoogle, FaPhoneAlt } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";


export default function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${t('login.successMessage')} ${email}`);
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="login-page" id="login">
      <div className="login-container">
        <h2 className="login-title">{t('login.welcome')}</h2>
        <p className="login-subtitle">{t('login.subtitle')}</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder={t('login.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder={t('login.passwordPlaceholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            {t('login.loginButton')}
          </button>
        </form>

        <div className="divider">
          <span>{t('login.or')}</span>
        </div>

        <div className="alt-login">
          <GoogleOAuthProvider clientId="1080131777071-12e17j2s8jd732ohetvc9tjr96foao4s.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  setIsLoggedIn(true);
                  navigate("/");
                }}
                onError={() => {
                  console.log('Login Failed')
                }}
              />
            </GoogleOAuthProvider>
{/* 
          <button className="google-btn">
            
            <FaGoogle /> {t('login.signInGoogle')}
          </button> */}
          {/* <button className="phone-btn">
            <FaPhoneAlt /> {t('login.signInPhone')}
          </button> */}
        </div>

        <p className="signup-text">
          {t('login.noAccount')} <a href="#">{t('login.signUpHere')}</a>
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FaGlobe } from "react-icons/fa";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
  ];

  const seasons = [
    { code: 'kharif', name: t('seasons.kharif') },
    { code: 'rabi', name: t('seasons.rabi') },
    { code: 'zaid', name: t('seasons.zaid') }
  ];

  const handleCropInfoWithSeason = (season) => {
    setSelectedSeason(season);
    navigate('/crop-info', { state: { selectedSeason: season } });
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <h1
              style={{
                fontSize: "40px",
                margin: 0,
                color: "#228B22",
                fontWeight: "bold",
              }}
            >
              {t('header.title')}
            </h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  {t('header.home')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  {t('header.about')}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  {t('header.services')}
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#more"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t('header.more')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/schemes">
                      {t('header.schemes')}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/market-info">
                      {t('header.marketInfo')}
                    </Link>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="dropdown-item dropdown-toggle" href="#crop-info">
                      {t('header.cropInfo')}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/crop-info">
                          {t('cropInfo.allSeasons')}
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      {seasons.map((season) => (
                        <li key={season.code}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleCropInfoWithSeason(season.code)}
                          >
                            {season.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/weather-forecast">
                      {t('header.weatherUpdates')}
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" to="/crop-disease">
                      {t('header.cropDisease')}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/medicines">
                      {t('header.medicines')}
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Language Selector */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#language"
                  id="languageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaGlobe className="me-1" />
                  {t('header.language')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        className={`dropdown-item ${language === lang.code ? 'active' : ''}`}
                        onClick={() => setLanguage(lang.code)}
                      >
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <form className="d-flex align-items-center" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2"
                type="search"
                placeholder={t('header.search')}
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-3" type="submit">
                {t('header.search')}
              </button>

              {isLoggedIn ? (
                <button
                  className="btn btn-danger"
                  onClick={() => setIsLoggedIn(false)}
                >
                  {t('header.logout')}
                </button>
              ) : (
                <Link to="/login" className="btn btn-success">
                  {t('header.login')}
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

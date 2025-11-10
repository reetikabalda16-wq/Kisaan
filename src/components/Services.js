import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCarrot, FaTractor, FaLeaf, FaFlask, FaAppleAlt, FaHeadset, FaUserTie, FaThumbsUp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [expandedCards, setExpandedCards] = useState({});

  const services = [
    { 
      icon: <FaCarrot />, 
      title: t('services.cropAdvisory.title'),
      description: t('services.cropAdvisory.description'),
      path: "/crop-advisory"
    },
    { 
      icon: <FaTractor />, 
      title: t('services.farmMechanization.title'),
      description: t('services.farmMechanization.description'),
      path: "/farm-mechanization"
    },
    { 
      icon: <FaLeaf />, 
      title: t('services.organicFarming.title'),
      description: t('services.organicFarming.description'),
      path: "/organic-farming"
    },
    { 
      icon: <FaFlask />, 
      title: t('services.soilTesting.title'),
      description: t('services.soilTesting.description'),
      path: "/soil-testing"
    },
    { 
      icon: <FaAppleAlt />, 
      title: t('services.marketLinkages.title'),
      description: t('services.marketLinkages.description'),
      path: "/market-linkages"
    },
    { 
      icon: <FaHeadset />, 
      title: t('services.farmerHelpline.title'),
      description: t('services.farmerHelpline.description'),
      path: "/farmer-helpline"
    },
    { 
      icon: <FaUserTie />, 
      title: t('services.financialServices.title'),
      description: t('services.financialServices.description'),
      path: "/financial-services"
    },
    { 
      icon: <FaThumbsUp />, 
      title: t('services.weatherForecast.title'),
      description: t('services.weatherForecast.description'),
      path: "/weather-forecast"
    },
  ];

  const handleVisit = (path) => {
    navigate(path);
  };

  const toggleLearnMore = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="services-section" id="services">
      <h4 className="service-subtitle">{t('services.subtitle')}</h4>
      <h2 className="service-title">{t('services.title')}</h2>

      <div className="service-grid">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            {expandedCards[index] && (
              <p className="service-description">{item.description}</p>
            )}
            {!expandedCards[index] ? (
              <button className="read-more" onClick={() => toggleLearnMore(index)}>
                {t('services.learnMore')}
              </button>
            ) : (
              <div className="button-group">
                <button className="show-less" onClick={() => toggleLearnMore(index)}>
                  {t('services.showLess')}
                </button>
                <button className="visit-button" onClick={() => handleVisit(item.path)}>
                  {t('services.visit')}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

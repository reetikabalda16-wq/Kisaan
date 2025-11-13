import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const SoilTesting = () => {
  const navigate = useNavigate();
 const { t } = useLanguage();
  return (
    <div className="service-page">
      <div className="container py-5">
        <button 
          className="back-button mb-4"
          onClick={() => navigate('/#services')}
        >
          <FaArrowLeft /> {t('services.backToServices')}
        </button>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600" 
              alt="Soil Testing"
              className="img-fluid rounded shadow-lg service-page-image"
            />
          </div>
          <div className="col-md-6">
            <h1 className="service-page-title mb-4">{t('soilTestingPage.title')}</h1>
            <p className="service-page-intro">
              {t('soilTestingPage.intro')}
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">{t('soilTestingPage.services')}</h3>
          
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>{t('soilTestingPage.comprehensive')}</strong></h5>
              <p>{t('soilTestingPage.comprehensiveDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('soilTestingPage.fertility')}</strong></h5>
              <p>{t('soilTestingPage.fertilityDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('soilTestingPage.micronutrients')}</strong></h5>
              <p>{t('soilTestingPage.micronutrientsDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('soilTestingPage.recommendations')}</strong></h5>
              <p>{t('soilTestingPage.recommendationsDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('soilTestingPage.periodic')}</strong></h5>
              <p>{t('soilTestingPage.periodicDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('soilTestingPage.reports')}</strong></h5>
              <p>{t('soilTestingPage.reportsDesc')}</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>{t('soilTestingPage.benefits')}</h4>
            <p className="mb-0">
              {t('soilTestingPage.benefitsDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilTesting;

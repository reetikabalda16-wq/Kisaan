import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const OrganicFarmingSupport = () => {
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
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600" 
              alt="Organic Farming"
              className="img-fluid rounded shadow-lg service-page-image"
            />
          </div>
          <div className="col-md-6">
            <h1 className="service-page-title mb-4">{t('organicFarmingPage.title')}</h1>
            <p className="service-page-intro">
              {t('organicFarmingPage.intro')}
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>{t('organicFarmingPage.certification')}</strong></h5>
              <p>{t('organicFarmingPage.certificationDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('organicFarmingPage.inputs')}</strong></h5>
              <p>{t('organicFarmingPage.inputsDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('organicFarmingPage.training')}</strong></h5>
              <p>{t('organicFarmingPage.trainingDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('organicFarmingPage.marketing')}</strong></h5>
              <p>{t('organicFarmingPage.marketingDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('organicFarmingPage.soilHealth')}</strong></h5>
              <p>{t('organicFarmingPage.soilHealthDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('organicFarmingPage.pestControl')}</strong></h5>
              <p>{t('organicFarmingPage.pestControlDesc')}</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>{t('organicFarmingPage.benefits')}</h4>
            <p className="mb-0">
              {t('organicFarmingPage.benefitsDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicFarmingSupport;

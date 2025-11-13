import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const FarmMechanization = () => {
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
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600" 
              alt="Farm Mechanization"
              className="img-fluid rounded shadow-lg service-page-image"
            />
          </div>
          <div className="col-md-6">
            <h1 className="service-page-title mb-4">{t('farmMechanizationPage.title')}</h1>
            <p className="service-page-intro">
              {t('farmMechanizationPage.intro')}
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">{t('farmMechanizationPage.availableEquipment')}</h3>
          
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>{t('farmMechanizationPage.tractors')}</strong></h5>
              <p>{t('farmMechanizationPage.tractorsDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmMechanizationPage.harvesters')}</strong></h5>
              <p>{t('farmMechanizationPage.harvestersDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmMechanizationPage.seeders')}</strong></h5>
              <p>{t('farmMechanizationPage.seedersDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmMechanizationPage.sprayers')}</strong></h5>
              <p>{t('farmMechanizationPage.sprayersDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmMechanizationPage.tillers')}</strong></h5>
              <p>{t('farmMechanizationPage.tillersDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmMechanizationPage.irrigation')}</strong></h5>
              <p>{t('farmMechanizationPage.irrigationDesc')}</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>{t('farmMechanizationPage.benefits')}</h4>
            <p className="mb-0">
              {t('farmMechanizationPage.benefitsDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmMechanization;

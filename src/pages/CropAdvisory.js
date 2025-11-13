import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const CropAdvisory = () => {
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
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600" 
              alt="Crop Advisory"
              className="img-fluid rounded shadow-lg service-page-image"
            />
          </div>
          <div className="col-md-6">
            <h1 className="service-page-title mb-4">{t('cropAdvisoryPage.title')}</h1>
            <p className="service-page-intro">
              {t('cropAdvisoryPage.intro')}
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">{t('cropAdvisoryPage.howWeHelp')}</h3>
          <p>
            {t('cropAdvisoryPage.description')}
          </p>
          
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>{t('cropAdvisoryPage.cropSelection')}</strong></h5>
              <p>{t('cropAdvisoryPage.cropSelectionDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('cropAdvisoryPage.sowingPlanting')}</strong></h5>
              <p>{t('cropAdvisoryPage.sowingPlantingDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('cropAdvisoryPage.fertilization')}</strong></h5>
              <p>{t('cropAdvisoryPage.fertilizationDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('cropAdvisoryPage.pestManagement')}</strong></h5>
              <p>{t('cropAdvisoryPage.pestManagementDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('cropAdvisoryPage.harvesting')}</strong></h5>
              <p>{t('cropAdvisoryPage.harvestingDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('cropAdvisoryPage.marketIntelligence')}</strong></h5>
              <p>{t('cropAdvisoryPage.marketIntelligenceDesc')}</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>{t('cropAdvisoryPage.ourGoal')}</h4>
            <p className="mb-0">
              {t('cropAdvisoryPage.goalDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisory;

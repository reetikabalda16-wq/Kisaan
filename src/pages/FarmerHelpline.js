import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const FarmerHelpline = () => {
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
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600" 
              alt="Farmer Helpline"
              className="img-fluid rounded shadow-lg service-page-image"
            />
          </div>
          <div className="col-md-6">
            <h1 className="service-page-title mb-4">{t('farmerHelplinePage.title')}</h1>
            <p className="service-page-intro">
              {t('farmerHelplinePage.intro')}
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <div className="alert alert-primary mb-4">
            <h3 className="text-center">
              <strong>{t('farmerHelplinePage.phoneNumber')}</strong>
            </h3>
            <p className="text-center mb-0">{t('farmerHelplinePage.availability')}</p>
          </div>
          
          <h3 className="mb-4">{t('farmerHelplinePage.services')}</h3>
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>{t('farmerHelplinePage.cropAdvice')}</strong></h5>
              <p>{t('farmerHelplinePage.cropAdviceDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmerHelplinePage.pestIssues')}</strong></h5>
              <p>{t('farmerHelplinePage.pestIssuesDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmerHelplinePage.weather')}</strong></h5>
              <p>{t('farmerHelplinePage.weatherDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmerHelplinePage.schemes')}</strong></h5>
              <p>{t('farmerHelplinePage.schemesDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmerHelplinePage.technical')}</strong></h5>
              <p>{t('farmerHelplinePage.technicalDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('farmerHelplinePage.market')}</strong></h5>
              <p>{t('farmerHelplinePage.marketDesc')}</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>{t('farmerHelplinePage.contactInfo')}</h4>
            <p><strong>{t('farmerHelplinePage.phoneNumber')}</strong></p>
            <p><strong>{t('farmerHelplinePage.email')}</strong></p>
            <p className="mb-0">{t('farmerHelplinePage.availability')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerHelpline;

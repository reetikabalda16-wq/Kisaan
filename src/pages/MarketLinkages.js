import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const MarketLinkages = () => {
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
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600" 
              alt="Market Linkages"
              className="img-fluid rounded shadow-lg service-page-image"
            />
          </div>
          <div className="col-md-6">
            <h1 className="service-page-title mb-4">{t('marketLinkagesPage.title')}</h1>
            <p className="service-page-intro">
              {t('marketLinkagesPage.intro')}
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">{t('marketLinkagesPage.features')}</h3>
      
          <div className="features-grid">
            <div className="feature-card">
              <h5><strong>{t('marketLinkagesPage.directSales')}</strong></h5>
              <p>{t('marketLinkagesPage.directSalesDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('marketLinkagesPage.pricing')}</strong></h5>
              <p>{t('marketLinkagesPage.pricingDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('marketLinkagesPage.quality')}</strong></h5>
              <p>{t('marketLinkagesPage.qualityDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('marketLinkagesPage.payments')}</strong></h5>
              <p>{t('marketLinkagesPage.paymentsDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('marketLinkagesPage.logistics')}</strong></h5>
              <p>{t('marketLinkagesPage.logisticsDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('marketLinkagesPage.contracts')}</strong></h5>
              <p>{t('marketLinkagesPage.contractsDesc')}</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>{t('marketLinkagesPage.benefits')}</h4>
            <p className="mb-0">
              {t('marketLinkagesPage.benefitsDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketLinkages;

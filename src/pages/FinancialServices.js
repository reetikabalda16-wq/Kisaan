import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const FinancialServices = () => {
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
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600" 
              alt="Financial Services"
              className="img-fluid rounded shadow-lg service-page-image"
            />
          </div>
          <div className="col-md-6">
            <h1 className="service-page-title mb-4">{t('financialServicesPage.title')}</h1>
            <p className="service-page-intro">
              {t('financialServicesPage.intro')}
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">{t('financialServicesPage.services')}</h3>
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>{t('financialServicesPage.cropInsurance')}</strong></h5>
              <p>{t('financialServicesPage.cropInsuranceDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('financialServicesPage.farmLoans')}</strong></h5>
              <p>{t('financialServicesPage.farmLoansDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('financialServicesPage.subsidies')}</strong></h5>
              <p>{t('financialServicesPage.subsidiesDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('financialServicesPage.kcc')}</strong></h5>
              <p>{t('financialServicesPage.kccDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('financialServicesPage.inputCredit')}</strong></h5>
              <p>{t('financialServicesPage.inputCreditDesc')}</p>
            </div>
            <div className="feature-card">
              <h5><strong>{t('financialServicesPage.advisory')}</strong></h5>
              <p>{t('financialServicesPage.advisoryDesc')}</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>{t('financialServicesPage.benefits')}</h4>
            <p className="mb-0">
              {t('financialServicesPage.benefitsDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;

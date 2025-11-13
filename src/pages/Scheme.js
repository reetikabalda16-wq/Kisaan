import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const GovernmentSchemes = () => {
  const { t } = useLanguage();
  
  const schemes = [
    {
      id: 1,
      title: t('schemesPage.schemes.pmKisan.title'),
      description: t('schemesPage.schemes.pmKisan.description'),
      eligibility: t('schemesPage.schemes.pmKisan.eligibility'),
      benefits: t('schemesPage.schemes.pmKisan.benefits'),
      link: "https://pmkisan.gov.in"
    },
    {
      id: 2,
      title: t('schemesPage.schemes.pmfby.title'),
      description: t('schemesPage.schemes.pmfby.description'),
      eligibility: t('schemesPage.schemes.pmfby.eligibility'),
      benefits: t('schemesPage.schemes.pmfby.benefits'),
      link: "https://pmfby.gov.in"
    },
    {
      id: 3,
      title: t('schemesPage.schemes.kcc.title'),
      description: t('schemesPage.schemes.kcc.description'),
      eligibility: t('schemesPage.schemes.kcc.eligibility'),
      benefits: t('schemesPage.schemes.kcc.benefits'),
      link: "https://www.nabard.org/kcc"
    },
    {
      id: 4,
      title: t('schemesPage.schemes.soilHealth.title'),
      description: t('schemesPage.schemes.soilHealth.description'),
      eligibility: t('schemesPage.schemes.soilHealth.eligibility'),
      benefits: t('schemesPage.schemes.soilHealth.benefits'),
      link: "https://soilhealth.dac.gov.in"
    },
    {
      id: 5,
      title: t('schemesPage.schemes.digitalAg.title'),
      description: t('schemesPage.schemes.digitalAg.description'),
      eligibility: t('schemesPage.schemes.digitalAg.eligibility'),
      benefits: t('schemesPage.schemes.digitalAg.benefits'),
      link: "https://digitalagriculture.gov.in"
    },
    {
      id: 6,
      title: t('schemesPage.schemes.eNam.title'),
      description: t('schemesPage.schemes.eNam.description'),
      eligibility: t('schemesPage.schemes.eNam.eligibility'),
      benefits: t('schemesPage.schemes.eNam.benefits'),
      link: "https://enam.gov.in"
    },
    {
      id: 7,
      title: t('schemesPage.schemes.kusum.title'),
      description: t('schemesPage.schemes.kusum.description'),
      eligibility: t('schemesPage.schemes.kusum.eligibility'),
      benefits: t('schemesPage.schemes.kusum.benefits'),
      link: "https://pmkusum.mnre.gov.in"
    },
    {
      id: 8,
      title: t('schemesPage.schemes.smam.title'),
      description: t('schemesPage.schemes.smam.description'),
      eligibility: t('schemesPage.schemes.smam.eligibility'),
      benefits: t('schemesPage.schemes.smam.benefits'),
      link: "https://smam.dac.gov.in"
    }
  ];
  return (
    <div className="container my-5" id ="schemes">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success">{t('schemesPage.title')}</h1>
        <p className="lead text-muted">
          {t('schemesPage.subtitle')}
        </p>
      </div>

      {/* Schemes Grid */}
      <div className="row g-4">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 hover-shadow transition">
              <div className="card-header bg-success text-white border-0 py-3">
                <h5 className="mb-0 fw-semibold">{scheme.title}</h5>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="text-muted small mb-3">{scheme.description}</p>

                <div className="mt-auto">
                  <p className="mb-1">
                    <strong className="text-success">{t('schemesPage.eligibility')}</strong>{" "}
                    <span className="text-dark">{scheme.eligibility}</span>
                  </p>
                  <p className="mb-3">
                    <strong className="text-success">{t('schemesPage.benefits')}</strong>{" "}
                    <span className="text-dark">{scheme.benefits}</span>
                  </p>

                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm w-100"
                  >
                    {t('schemesPage.learnMore')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home */}
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-primary btn-lg px-5">
          {t('schemesPage.backToHome')}
        </Link>
      </div>
    </div>
  );
};

export default GovernmentSchemes;

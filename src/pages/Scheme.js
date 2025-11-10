import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const GovernmentSchemes = () => {
  const schemes = [
    {
      id: 1,
      title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      description: "Provides income support of Rs. 6,000 per year to small and marginal farmers through Direct Benefit Transfer (DBT).",
      eligibility: "Landholding farmers with up to 2 hectares.",
      benefits: "Financial aid for crop inputs and household needs.",
      link: "https://pmkisan.gov.in"
    },
    {
      id: 2,
      title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      description: "Crop insurance scheme covering yield losses due to natural calamities, pests, and diseases.",
      eligibility: "Farmers with crop loans or insured crops.",
      benefits: "Affordable premiums with comprehensive coverage for over 50 crops.",
      link: "https://pmfby.gov.in"
    },
    {
      id: 3,
      title: "Kisan Credit Card (KCC)",
      description: "Provides short-term credit for cultivation needs at subsidized interest rates.",
      eligibility: "All farmers engaged in agriculture and allied activities.",
      benefits: "Interest subvention of 2% with additional 3% for prompt repayment.",
      link: "https://www.nabard.org/kcc"
    },
    {
      id: 4,
      title: "Soil Health Card Scheme",
      description: "Issues soil health cards with nutrient status and fertilizer recommendations.",
      eligibility: "All farmers across India.",
      benefits: "Promotes balanced fertilizer use for improved soil health.",
      link: "https://soilhealth.dac.gov.in"
    },
    {
      id: 5,
      title: "Digital Agriculture Mission 2025",
      description: "Integrates AI, IoT, satellite tech, and data analytics for smart farming.",
      eligibility: "Farmers and agri-entrepreneurs adopting digital tools.",
      benefits: "Real-time crop monitoring, advisory systems, and resource optimization.",
      link: "https://digitalagriculture.gov.in"
    },
    {
      id: 6,
      title: "National Agriculture Market (e-NAM)",
      description: "Digital platform linking APMC mandis for pan-India trading.",
      eligibility: "Registered farmers and traders.",
      benefits: "Transparent pricing, online bidding, and efficient settlements.",
      link: "https://enam.gov.in"
    },
    {
      id: 7,
      title: "PM Kusum Scheme",
      description: "Promotes solar energy in agriculture through pumps and grid-connected plants.",
      eligibility: "Farmers with barren/fallow land or existing pumps.",
      benefits: "Subsidies up to 50% for solar pumps; sell power to DISCOMs.",
      link: "https://pmkusum.mnre.gov.in"
    },
    {
      id: 8,
      title: "Sub-Mission on Agricultural Mechanization (SMAM)",
      description: "Supports farm mechanization for small and marginal farmers.",
      eligibility: "Farmers purchasing equipment like tractors and harvesters.",
      benefits: "Subsidies for machinery; custom hiring centers.",
      link: "https://smam.dac.gov.in"
    }
  ];
 const { t } = useLanguage();
  return (
    <div className="container my-5" id ="schemes">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success">Government Schemes for Agriculture</h1>
        <p className="lead text-muted">
          Explore key initiatives by the Government of India to empower farmers in 2025.
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
                    <strong className="text-success">Eligibility:</strong>{" "}
                    <span className="text-dark">{scheme.eligibility}</span>
                  </p>
                  <p className="mb-3">
                    <strong className="text-success">Benefits:</strong>{" "}
                    <span className="text-dark">{scheme.benefits}</span>
                  </p>

                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm w-100"
                  >
                    Learn More & Apply
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
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default GovernmentSchemes;

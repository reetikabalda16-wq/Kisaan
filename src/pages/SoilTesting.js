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
          <FaArrowLeft /> Back to Services
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
            <h1 className="service-page-title mb-4">Soil Testing & Analysis</h1>
            <p className="service-page-intro">
              Get comprehensive soil analysis from our state-of-the-art labs with customized recommendations for your farm.
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">Our Testing Services</h3>
          <p>
            We provide detailed analysis of your soil's nutrient content, pH level, and composition, followed by customized fertilizer and soil enrichment recommendations.
          </p>
          
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>Nutrient Analysis</strong></h5>
              <p>Complete NPK (Nitrogen, Phosphorus, Potassium) and micronutrient testing.</p>
            </div>
            <div className="feature-card">
              <h5><strong>pH Level Testing</strong></h5>
              <p>Accurate soil pH measurement with recommendations for adjustment.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Organic Matter Content</strong></h5>
              <p>Analysis of organic carbon and matter content in your soil.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Soil Texture Analysis</strong></h5>
              <p>Detailed evaluation of soil composition - sand, silt, and clay percentages.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Custom Recommendations</strong></h5>
              <p>Personalized fertilizer plans based on your soil test results.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Quick Results</strong></h5>
              <p>Get your comprehensive soil test report within 3-5 business days.</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>Why Soil Testing Matters</h4>
            <p className="mb-0">
              Regular soil testing helps you optimize fertilizer use, improve crop yields, reduce costs, and practice sustainable farming. Our expert agronomists provide actionable insights tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilTesting;

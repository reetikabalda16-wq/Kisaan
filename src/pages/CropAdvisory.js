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
          <FaArrowLeft /> Back to Services
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
            <h1 className="service-page-title mb-4">Crop Advisory</h1>
            <p className="service-page-intro">
              Our AI-powered crop advisory service provides personalized recommendations to help you maximize your yield and profitability.
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">How We Help You</h3>
          <p>
            We analyze various factors, including your soil type, local weather conditions, and market demand, to offer the best advice on:
          </p>
          
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>Crop Selection</strong></h5>
              <p>Choosing the most suitable crops for your farm based on soil analysis and market trends.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Sowing and Planting</strong></h5>
              <p>Optimal timing and techniques for sowing and planting to ensure best germination.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Fertilization</strong></h5>
              <p>Customized fertilizer plans to ensure your crops get the right nutrients at the right time.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Pest and Disease Management</strong></h5>
              <p>Early detection and effective treatment strategies for pests and diseases.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Harvesting</strong></h5>
              <p>Best practices for harvesting to ensure maximum quality and quantity of produce.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Market Intelligence</strong></h5>
              <p>Real-time market insights to help you sell your produce at the best prices.</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>Our Goal</h4>
            <p className="mb-0">
              Our goal is to empower you with the data and insights you need to make informed decisions and achieve a successful harvest. With our expert guidance, you can increase productivity while reducing costs and environmental impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropAdvisory;

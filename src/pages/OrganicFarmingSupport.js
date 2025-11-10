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
          <FaArrowLeft /> Back to Services
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
            <h1 className="service-page-title mb-4">Organic Farming Support</h1>
            <p className="service-page-intro">
              Embrace sustainable and eco-friendly farming with our comprehensive organic farming support. We provide end-to-end guidance to help you transition from conventional to organic farming practices.
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">Our Services</h3>
          
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>Certification Assistance</strong></h5>
              <p>We guide you through the process of obtaining organic certification for your farm.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Organic Inputs</strong></h5>
              <p>Access to high-quality organic seeds, fertilizers, and pest control solutions.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Training and Workshops</strong></h5>
              <p>Regular training sessions and workshops on organic farming techniques.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Market Access</strong></h5>
              <p>Connect with a premium market of buyers for your organic produce.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Soil Management</strong></h5>
              <p>Expert advice on organic soil enrichment and composting methods.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Pest Control</strong></h5>
              <p>Natural and organic pest control solutions without harmful chemicals.</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>Join the Organic Revolution</h4>
            <p className="mb-0">
              Join the organic farming revolution and contribute to a healthier planet and a more sustainable future. Increase your farm's value while protecting the environment for future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicFarmingSupport;

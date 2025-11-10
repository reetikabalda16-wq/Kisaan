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
          <FaArrowLeft /> Back to Services
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
            <h1 className="service-page-title mb-4">Farm Mechanization</h1>
            <p className="service-page-intro">
              Access modern farming equipment and machinery on a rental basis to improve efficiency and reduce manual labor.
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">Our Equipment & Services</h3>
          <p>
            From tractors to drones, we provide all the tools you need to modernize your farm operations. Book equipment through our app and have it delivered directly to your farm.
          </p>
          
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>Tractors & Tillers</strong></h5>
              <p>Modern tractors and power tillers for efficient land preparation and cultivation.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Harvesting Equipment</strong></h5>
              <p>Combined harvesters and threshers for quick and efficient crop harvesting.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Spraying Systems</strong></h5>
              <p>Advanced spraying equipment for efficient pesticide and fertilizer application.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Irrigation Systems</strong></h5>
              <p>Drip and sprinkler irrigation systems for water-efficient farming.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Drone Technology</strong></h5>
              <p>Agricultural drones for crop monitoring, spraying, and aerial surveys.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Storage Solutions</strong></h5>
              <p>Modern grain storage facilities and cold storage units for post-harvest management.</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>Why Choose Our Services?</h4>
            <p className="mb-0">
              We offer flexible rental plans, trained operators, timely delivery, and 24/7 technical support. Our equipment is regularly maintained and updated to ensure optimal performance and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmMechanization;

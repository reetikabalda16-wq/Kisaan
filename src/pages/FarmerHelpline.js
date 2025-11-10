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
          <FaArrowLeft /> Back to Services
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
            <h1 className="service-page-title mb-4">24/7 Farmer Helpline</h1>
            <p className="service-page-intro">
              Get instant expert advice whenever you need it. Our dedicated helpline connects you with agricultural experts around the clock.
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <div className="alert alert-primary mb-4">
            <h3 className="text-center">
              <strong>Call Us: 1800-XXX-FARM (3276)</strong>
            </h3>
            <p className="text-center mb-0">Available 24 hours a day, 7 days a week</p>
          </div>
          
          <h3 className="mb-4">How We Can Help</h3>
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>Pest & Disease ID</strong></h5>
              <p>Send photos of affected plants and get instant diagnosis and treatment recommendations.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Crop Management</strong></h5>
              <p>Expert guidance on irrigation, fertilization, and crop protection.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Weather Alerts</strong></h5>
              <p>Timely warnings about adverse weather conditions affecting your area.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Government Schemes</strong></h5>
              <p>Information about subsidies, insurance, and welfare programs for farmers.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Technical Support</strong></h5>
              <p>Help with using our app and digital services.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Emergency Support</strong></h5>
              <p>Immediate assistance during agricultural emergencies.</p>
            </div>
          </div>

          <h3 className="mt-5">Multiple Ways to Connect</h3>
          <div className="row mt-3">
            <div className="col-md-4 mb-3">
              <div className="feature-card">
                <h5>📞 Phone Call</h5>
                <p>Speak directly with our experts. Available in multiple regional languages.</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-card">
                <h5>💬 WhatsApp</h5>
                <p>Send messages, photos, or videos. Get quick responses from our team.</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="feature-card">
                <h5>📱 App Chat</h5>
                <p>Chat with experts directly through our mobile app.</p>
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>Languages Supported</h4>
            <p>Our helpline supports multiple languages including Hindi, English, Punjabi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, and Gujarati.</p>
            
            <h4 className="mt-3">Expert Team</h4>
            <ul className="mb-3">
              <li>Agronomists with 10+ years of field experience</li>
              <li>Plant pathologists specializing in crop diseases</li>
              <li>Soil scientists and fertility experts</li>
              <li>Agricultural engineers for mechanization advice</li>
              <li>Market analysts for price and trend information</li>
            </ul>

            <div className="alert alert-success">
              <h5>Free Service!</h5>
              <p className="mb-0">Our helpline service is completely FREE for all registered farmers. No hidden charges, no call costs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerHelpline;

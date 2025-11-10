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
          <FaArrowLeft /> Back to Services
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
            <h1 className="service-page-title mb-4">Market Linkages</h1>
            <p className="service-page-intro">
              Connect directly with buyers and get the best price for your produce. Our digital marketplace eliminates middlemen and ensures fair prices for farmers.
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">What We Offer</h3>
      <p>
        Connect directly with buyers and get the best price for your produce. Our digital marketplace eliminates middlemen and ensures fair prices for farmers.
      </p>
      
          <div className="features-grid">
            <div className="feature-card">
              <h5><strong>Direct Buyer Network</strong></h5>
              <p>Access to a wide network of retailers, wholesalers, exporters, and food processing companies.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Real-Time Price Information</strong></h5>
              <p>Stay updated with current market prices for various crops across different markets.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Quality Certification</strong></h5>
              <p>Get your produce certified to access premium markets and better prices.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Bulk Purchase Options</strong></h5>
              <p>Connect with buyers looking for large quantities of produce.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Export Opportunities</strong></h5>
              <p>Access international markets with our export partners.</p>
            </div>
            <div className="feature-card">
              <h5><strong>Contract Farming</strong></h5>
              <p>Secure pre-harvest contracts with guaranteed prices.</p>
            </div>
          </div>

          <h3 className="mt-4">How to Use Our Platform</h3>
          <ol className="mt-3">
            <li><strong>Register Your Produce:</strong> List the crops you have available for sale with quantity and quality details.</li>
            <li><strong>Receive Offers:</strong> Get competitive bids from verified buyers on our platform.</li>
            <li><strong>Compare & Choose:</strong> Compare offers and select the best buyer based on price and payment terms.</li>
            <li><strong>Logistics Support:</strong> We can arrange transportation and cold storage if needed.</li>
            <li><strong>Secure Payment:</strong> Receive payment directly to your bank account after delivery confirmation.</li>
          </ol>

          <h3 className="mt-4">Benefits</h3>
          <ul className="mt-3">
            <li>Eliminate middlemen and increase your profit margins by up to 30%</li>
            <li>Access to premium and niche markets</li>
            <li>Transparent pricing and fair trade practices</li>
            <li>Reduce post-harvest losses with timely sales</li>
            <li>Build long-term relationships with buyers</li>
            <li>Digital invoicing and secure payment processing</li>
          </ul>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>Success Story</h4>
            <p><em>"Thanks to the Market Linkages platform, I was able to sell my organic vegetables directly to a premium retailer chain. My income increased by 35% compared to selling through traditional channels."</em></p>
            <p className="mb-0"><strong>- Ramesh Kumar, Organic Farmer, Punjab</strong></p>
          </div>

          <div className="alert alert-success mt-4">
            <h4>Join Our Marketplace Today!</h4>
            <p className="mb-0">Start selling your produce at better prices. Register now and get access to hundreds of verified buyers!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketLinkages;

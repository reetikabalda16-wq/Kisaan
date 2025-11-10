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
          <FaArrowLeft /> Back to Services
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
            <h1 className="service-page-title mb-4">Financial Services</h1>
            <p className="service-page-intro">
              Access comprehensive financial solutions designed specifically for farmers. We partner with leading financial institutions to provide you with the capital and security you need to grow your farming business.
            </p>
          </div>
        </div>

        <div className="service-page-content">
          <h3 className="mb-4">Our Financial Solutions</h3>
          <div className="features-grid mt-4">
            <div className="feature-card">
              <h5><strong>🌾 Crop Insurance</strong></h5>
              <p>Protection against crop failure due to natural calamities, droughts, floods, pests, and diseases with quick claim settlement.</p>
            </div>
            <div className="feature-card">
              <h5><strong>💰 Agricultural Loans</strong></h5>
              <p>Low-interest farm loans up to ₹10 lakhs with flexible repayment schedules aligned with harvest cycles.</p>
            </div>
            <div className="feature-card">
              <h5><strong>🏛️ Government Subsidies</strong></h5>
              <p>Assistance with subsidy applications, PM-KISAN, and other direct benefit transfers.</p>
            </div>
            <div className="feature-card">
              <h5><strong>📊 Investment Planning</strong></h5>
              <p>Financial planning for farm expansion, retirement planning, and tax-saving investment options.</p>
            </div>
          </div>

          <h3 className="mt-5">Why Choose Our Services</h3>
          <ul className="mt-3">
            <li><strong>Farmer-Centric:</strong> Products designed specifically for agricultural needs</li>
            <li><strong>Easy Access:</strong> Apply online through our app or visit partner branches</li>
            <li><strong>Quick Approval:</strong> Loan decisions within 48 hours</li>
            <li><strong>Competitive Rates:</strong> Best interest rates in the market</li>
            <li><strong>Trusted Partners:</strong> Collaboration with leading banks and NBFCs</li>
            <li><strong>Financial Literacy:</strong> Free workshops on money management</li>
          </ul>

          <h3 className="mt-4">Application Process</h3>
          <ol className="mt-3">
            <li><strong>Registration:</strong> Create your profile with basic farm details</li>
            <li><strong>Document Upload:</strong> Submit required documents digitally</li>
            <li><strong>Eligibility Check:</strong> Instant eligibility assessment</li>
            <li><strong>Application Review:</strong> Our team reviews your application</li>
            <li><strong>Approval & Disbursement:</strong> Quick approval and fund transfer</li>
          </ol>

          <div className="mt-5 p-4 bg-light rounded">
            <h4>Required Documents</h4>
            <ul className="mb-0">
              <li>Aadhaar Card and PAN Card</li>
              <li>Land ownership documents</li>
              <li>Bank account statements (last 6 months)</li>
              <li>Passport-size photographs</li>
              <li>Income proof (for larger loans)</li>
            </ul>
          </div>

          <div className="alert alert-success mt-4">
            <h4>Special Offer for New Applicants!</h4>
            <p className="mb-0">Get 0.5% reduction in interest rates on your first loan. Limited time offer!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;

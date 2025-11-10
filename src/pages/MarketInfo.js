import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const MarketInfo = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [cropPrices, setCropPrices] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample crop data - In production, this would come from a live API
  const cropData = [
    { id: 1, name: 'Rice', price: 2850, unit: 'per quintal', change: '+2.5%', highlighted: true, market: 'Delhi' },
    { id: 2, name: 'Wheat', price: 2150, unit: 'per quintal', change: '+1.8%', highlighted: true, market: 'Punjab' },
    { id: 3, name: 'Maize', price: 1850, unit: 'per quintal', change: '-0.5%', highlighted: false, market: 'Karnataka' },
    { id: 4, name: 'Bajra', price: 2200, unit: 'per quintal', change: '+3.2%', highlighted: false, market: 'Rajasthan' },
    { id: 5, name: 'Jowar', price: 2950, unit: 'per quintal', change: '+1.1%', highlighted: false, market: 'Maharashtra' },
    { id: 6, name: 'Cotton', price: 6500, unit: 'per quintal', change: '+4.5%', highlighted: true, market: 'Gujarat' },
    { id: 7, name: 'Sugarcane', price: 315, unit: 'per quintal', change: '+0.8%', highlighted: false, market: 'Uttar Pradesh' },
    { id: 8, name: 'Groundnut', price: 5850, unit: 'per quintal', change: '+2.3%', highlighted: false, market: 'Gujarat' },
    { id: 9, name: 'Soybean', price: 4200, unit: 'per quintal', change: '-1.2%', highlighted: true, market: 'Madhya Pradesh' },
    { id: 10, name: 'Mustard', price: 5450, unit: 'per quintal', change: '+3.7%', highlighted: false, market: 'Haryana' },
    { id: 11, name: 'Sunflower', price: 6200, unit: 'per quintal', change: '+1.5%', highlighted: false, market: 'Karnataka' },
    { id: 12, name: 'Turmeric', price: 7800, unit: 'per quintal', change: '+5.2%', highlighted: true, market: 'Telangana' },
    { id: 13, name: 'Onion', price: 2200, unit: 'per quintal', change: '-3.5%', highlighted: false, market: 'Maharashtra' },
    { id: 14, name: 'Potato', price: 1850, unit: 'per quintal', change: '+2.1%', highlighted: false, market: 'West Bengal' },
    { id: 15, name: 'Tomato', price: 3200, unit: 'per quintal', change: '+8.5%', highlighted: true, market: 'Karnataka' },
    { id: 16, name: 'Chilli', price: 8500, unit: 'per quintal', change: '+6.3%', highlighted: false, market: 'Andhra Pradesh' },
    { id: 17, name: 'Garlic', price: 4500, unit: 'per quintal', change: '+4.2%', highlighted: false, market: 'Gujarat' },
    { id: 18, name: 'Ginger', price: 5200, unit: 'per quintal', change: '+3.8%', highlighted: false, market: 'Kerala' },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCropPrices(cropData);
      setFilteredPrices(cropData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPrices(cropPrices);
    } else {
      const filtered = cropPrices.filter(crop =>
        crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crop.market.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPrices(filtered);
    }
  }, [searchQuery, cropPrices]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="market-info-page">
      <div className="container py-5">
        {/* Header Section */}
        <div className="market-header mb-5">
          <button 
            className="back-button mb-3"
            onClick={() => navigate('/')}
          >
            <FaArrowLeft /> {t('marketInfo.backToHome')}
          </button>
          <h1 className="page-title">{t('marketInfo.title')}</h1>
          <p className="page-subtitle">{t('marketInfo.subtitle')}</p>
        </div>

        {/* Search Bar */}
        <div className="search-container mb-4">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder={t('marketInfo.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* Highlighted Crops Section */}
        <div className="highlighted-section mb-5">
          <h2 className="section-title">{t('marketInfo.featuredCrops')}</h2>
          <div className="highlighted-crops">
            {loading ? (
              <div className="loading-spinner">{t('marketInfo.loading')}</div>
            ) : (
              filteredPrices
                .filter(crop => crop.highlighted)
                .map(crop => (
                  <div key={crop.id} className="highlighted-card">
                    <div className="crop-icon">🌾</div>
                    <h3 className="crop-name">{crop.name}</h3>
                    <div className="crop-price">₹{crop.price}</div>
                    <div className="crop-unit">{crop.unit}</div>
                    <div className={`crop-change ${crop.change.startsWith('+') ? 'positive' : 'negative'}`}>
                      {crop.change}
                    </div>
                    <div className="crop-market">{crop.market}</div>
                  </div>
                ))
            )}
          </div>
        </div>

        {/* All Crops Table */}
        <div className="all-crops-section">
          <h2 className="section-title">{t('marketInfo.allCropPrices')}</h2>
          <div className="table-responsive">
            <table className="crops-table">
              <thead>
                <tr>
                  <th>{t('marketInfo.cropName')}</th>
                  <th>{t('marketInfo.market')}</th>
                  <th>{t('marketInfo.price')}</th>
                  <th>{t('marketInfo.unit')}</th>
                  <th>{t('marketInfo.change')}</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center">{t('marketInfo.loading')}</td>
                  </tr>
                ) : filteredPrices.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">{t('marketInfo.noCropsFound')}</td>
                  </tr>
                ) : (
                  filteredPrices.map(crop => (
                    <tr key={crop.id}>
                      <td className="crop-name-cell">
                        <span className="crop-icon-small">🌾</span>
                        {crop.name}
                      </td>
                      <td>{crop.market}</td>
                      <td className="price-cell">₹{crop.price}</td>
                      <td>{crop.unit}</td>
                      <td>
                        <span className={`change-badge ${crop.change.startsWith('+') ? 'positive' : 'negative'}`}>
                          {crop.change}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Note */}
        <div className="info-note mt-4">
          <p>
            <strong>{t('marketInfo.noteTitle')}</strong> {t('marketInfo.noteText')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketInfo;

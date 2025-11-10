import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaSeedling, FaTint, FaLeaf, FaSun, FaSnowflake, FaCloudRain } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

// Comprehensive crop database
const cropDatabase = {
  rice: {
    icon: '🌾',
    season: ['Kharif', 'Rabi'],
    growthPeriod: '120-150 days',
    temperature: '20-35°C',
    rainfall: '100-200 cm',
    soil: 'Clay loam, silty clay',
    stagesDays: [
      { days: '0-7' },
      { days: '20-25' },
      { days: '30-50' },
      { days: '55-65' },
      { days: '70-90' },
      { days: '90-110' },
      { days: '120-150' }
    ]
  },
  wheat: {
    icon: '🌾',
    season: ['Rabi'],
    growthPeriod: '120-150 days',
    temperature: '10-25°C',
    rainfall: '50-75 cm',
    soil: 'Loamy, well-drained',
    stagesDays: [
      { days: '0-7' },
      { days: '7-15' },
      { days: '25-35' },
      { days: '45-60' },
      { days: '70-85' },
      { days: '90-110' },
      { days: '120-150' }
    ]
  },
  maize: {
    icon: '🌽',
    season: ['Kharif', 'Rabi', 'Zaid'],
    growthPeriod: '80-120 days',
    temperature: '15-35°C',
    rainfall: '50-100 cm',
    soil: 'Well-drained loamy',
    stagesDays: [
      { days: '0-5' },
      { days: '5-10' },
      { days: '15-50' },
      { days: '55-65' },
      { days: '65-75' },
      { days: '75-100' },
      { days: '100-120' }
    ]
  },
  cotton: {
    icon: '☁️',
    season: ['Kharif'],
    growthPeriod: '150-180 days',
    temperature: '21-30°C',
    rainfall: '50-100 cm',
    soil: 'Deep, well-drained black soil',
    stagesDays: [
      { days: '0-7' },
      { days: '7-15' },
      { days: '30-60' },
      { days: '60-80' },
      { days: '80-100' },
      { days: '100-140' },
      { days: '140-180' }
    ]
  },
  sugarcane: {
    icon: '🎋',
    season: ['Year-round'],
    growthPeriod: '10-18 months',
    temperature: '20-35°C',
    rainfall: '150-250 cm',
    soil: 'Deep loamy, well-drained',
    stagesDays: [
      { days: '0-30' },
      { days: '30-45' },
      { days: '60-120' },
      { days: '120-270' },
      { days: '270-360' }
    ]
  },
  tomato: {
    icon: '🍅',
    season: ['Kharif', 'Rabi'],
    growthPeriod: '90-120 days',
    temperature: '15-30°C',
    rainfall: '60-150 cm',
    soil: 'Well-drained loamy',
    stagesDays: [
      { days: '0-25' },
      { days: '25-30' },
      { days: '30-45' },
      { days: '45-60' },
      { days: '60-75' },
      { days: '75-100' },
      { days: '100-120' }
    ]
  },
  potato: {
    icon: '🥔',
    season: ['Rabi'],
    growthPeriod: '90-120 days',
    temperature: '15-25°C',
    rainfall: '50-70 cm',
    soil: 'Well-drained sandy loam',
    stagesDays: [
      { days: '0-10' },
      { days: '10-20' },
      { days: '20-50' },
      { days: '50-70' },
      { days: '70-90' },
      { days: '90-120' }
    ]
  },
  onion: {
    icon: '🧅',
    season: ['Kharif', 'Rabi'],
    growthPeriod: '120-150 days',
    temperature: '13-24°C',
    rainfall: '65-100 cm',
    soil: 'Well-drained loamy',
    stagesDays: [
      { days: '0-35' },
      { days: '35-40' },
      { days: '40-80' },
      { days: '80-110' },
      { days: '110-140' },
      { days: '140-150' }
    ]
  },
  soybean: {
    icon: '🫘',
    season: ['Kharif'],
    growthPeriod: '90-120 days',
    temperature: '20-30°C',
    rainfall: '50-75 cm',
    soil: 'Well-drained loamy',
    stagesDays: [
      { days: '0-5' },
      { days: '5-15' },
      { days: '15-40' },
      { days: '40-60' },
      { days: '60-80' },
      { days: '80-100' },
      { days: '100-120' }
    ]
  },
  mustard: {
    icon: '🌻',
    season: ['Rabi'],
    growthPeriod: '100-120 days',
    temperature: '10-25°C',
    rainfall: '40-50 cm',
    soil: 'Well-drained loamy',
    stagesDays: [
      { days: '0-7' },
      { days: '7-15' },
      { days: '15-40' },
      { days: '40-65' },
      { days: '65-90' },
      { days: '100-120' }
    ]
  }
};

const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1;
  if (month >= 6 && month <= 10) return 'Kharif'; // Monsoon
  if (month >= 11 || month <= 3) return 'Rabi'; // Winter
  return 'Zaid'; // Summer
};

const CropInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [plantingDate, setPlantingDate] = useState('');
  const [currentDay, setCurrentDay] = useState(0);
  const [currentStage, setCurrentStage] = useState(null);
  const [showSeasonalCrops, setShowSeasonalCrops] = useState(false);
  const [currentSeason, setCurrentSeason] = useState('');
  const [filterSeason, setFilterSeason] = useState('');

  useEffect(() => {
    setCurrentSeason(getCurrentSeason());
    // Check if season was passed from header
    if (location.state?.selectedSeason) {
      setFilterSeason(location.state.selectedSeason);
      setShowSeasonalCrops(true);
    }
  }, [location.state]);

  useEffect(() => {
    if (plantingDate && selectedCrop) {
      const planted = new Date(plantingDate);
      const today = new Date();
      const diffTime = Math.abs(today - planted);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setCurrentDay(diffDays);

      // Find current stage
      const crop = cropDatabase[selectedCrop];
      const translatedStages = t(`cropInfo.crops.${selectedCrop}.stages`);
      const stage = translatedStages.find((s, idx) => {
        const [start, end] = crop.stagesDays[idx].days.split('-').map(Number);
        return diffDays >= start && diffDays <= end;
      });
      setCurrentStage(stage);
    }
  }, [plantingDate, selectedCrop, language, t]);

  const getSeasonalCrops = (seasonFilter = null) => {
    const targetSeason = seasonFilter || filterSeason || currentSeason;
    const seasonMap = {
      'kharif': 'Kharif',
      'rabi': 'Rabi',
      'zaid': 'Zaid'
    };
    const mappedSeason = seasonMap[targetSeason.toLowerCase()] || targetSeason;
    
    return Object.entries(cropDatabase).filter(([key, crop]) => 
      crop.season.includes(mappedSeason) || crop.season.includes('Year-round')
    );
  };

  const getDisplayedCrops = () => {
    if (filterSeason) {
      return getSeasonalCrops(filterSeason);
    }
    return Object.entries(cropDatabase);
  };

  const handleCropSelect = (cropKey) => {
    setSelectedCrop(cropKey);
    setPlantingDate('');
    setCurrentDay(0);
    setCurrentStage(null);
  };

  return (
    <div className="service-page">
      <div className="container py-5">
        <button 
          className="back-button mb-4"
          onClick={() => navigate('/#services')}
        >
          <FaArrowLeft /> {t('cropInfo.back')}
        </button>

        <div className="text-center mb-5">
          <h1 className="service-page-title mb-3">
            <FaSeedling className="me-2" />
            {t('cropInfo.title')}
          </h1>
          <p className="service-page-intro">
            {t('cropInfo.subtitle')}
          </p>
        </div>

        {/* Current Season Display */}
        <div className="alert alert-info mb-4">
          <h5>
            {currentSeason === 'Kharif' && <FaCloudRain className="me-2" />}
            {currentSeason === 'Rabi' && <FaSnowflake className="me-2" />}
            {currentSeason === 'Zaid' && <FaSun className="me-2" />}
            {t('cropInfo.currentSeason')}: <strong>{t(`cropInfo.${currentSeason.toLowerCase()}`)}</strong>
          </h5>
          {filterSeason && (
            <div className="mt-2">
              <span className="badge bg-success me-2">
                {t('cropInfo.selectSeason')}: {t(`cropInfo.${filterSeason}`)}
              </span>
              <button 
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  setFilterSeason('');
                  setShowSeasonalCrops(false);
                }}
              >
                {t('cropInfo.allSeasons')}
              </button>
            </div>
          )}
          <button 
            className="btn btn-primary btn-sm mt-2"
            onClick={() => setShowSeasonalCrops(!showSeasonalCrops)}
          >
            {showSeasonalCrops ? t('cropInfo.hideCrops') : t('cropInfo.showCrops')}
          </button>
        </div>

        {/* Seasonal Crops List */}
        {showSeasonalCrops && (
          <div className="mb-5 p-4 bg-light rounded">
            <h4 className="mb-3">
              {t('cropInfo.suitableFor')} {filterSeason ? t(`cropInfo.${filterSeason}`) : t(`cropInfo.${currentSeason.toLowerCase()}`)} {t('cropInfo.season')}
            </h4>
            <div className="row">
              {getSeasonalCrops().map(([key, crop]) => (
                <div key={key} className="col-md-4 col-sm-6 mb-3">
                  <div className="feature-card text-center h-100">
                    <div style={{ fontSize: '2rem' }}>{crop.icon}</div>
                    <h5 className="mt-2"><strong>{t(`cropInfo.crops.${key}.name`)}</strong></h5>
                    <p className="mb-2">{t('cropInfo.growth')}: {crop.growthPeriod}</p>
                    <p className="mb-2">{t('cropInfo.temperature')}: {crop.temperature}</p>
                    <button 
                      className="btn btn-success btn-sm"
                      onClick={() => {
                        handleCropSelect(key);
                        setShowSeasonalCrops(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {t('cropInfo.selectThisCrop')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Crop Selection */}
        <div className="service-page-content">
          <h3 className="mb-4">{t('cropInfo.selectCrop')}</h3>
          <div className="row mb-4">
            {getDisplayedCrops().map(([key, crop]) => (
              <div key={key} className="col-md-3 col-sm-4 col-6 mb-3">
                <button
                  className={`btn w-100 ${selectedCrop === key ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => handleCropSelect(key)}
                  style={{ padding: '15px', fontSize: '1.1rem' }}
                >
                  <div>{crop.icon}</div>
                  {t(`cropInfo.crops.${key}.name`)}
                </button>
              </div>
            ))}
          </div>

          {/* Crop Details */}
          {selectedCrop && (
            <div className="mt-5">
              <div className="row align-items-center mb-4">
                <div className="col-md-8">
                  <h2 className="mb-3">
                    <span style={{ fontSize: '2rem' }} className="me-2">
                      {cropDatabase[selectedCrop].icon}
                    </span>
                    {t(`cropInfo.crops.${selectedCrop}.name`)}
                  </h2>
                </div>
                <div className="col-md-4">
                  <label className="form-label"><strong>{t('cropInfo.whenPlanted')}</strong></label>
                  <input
                    type="date"
                    className="form-control"
                    value={plantingDate}
                    onChange={(e) => setPlantingDate(e.target.value)}
                    max={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              {/* Crop Basic Info */}
              <div className="features-grid mb-4">
                <div className="feature-card">
                  <h5><FaLeaf className="me-2" /><strong>{t('cropInfo.season')}</strong></h5>
                  <p>{cropDatabase[selectedCrop].season.join(', ')}</p>
                </div>
                <div className="feature-card">
                  <h5><strong>{t('cropInfo.growth')} Period</strong></h5>
                  <p>{cropDatabase[selectedCrop].growthPeriod}</p>
                </div>
                <div className="feature-card">
                  <h5><strong>{t('cropInfo.temperature')}</strong></h5>
                  <p>{cropDatabase[selectedCrop].temperature}</p>
                </div>
                <div className="feature-card">
                  <h5><FaTint className="me-2" /><strong>{t('cropInfo.rainfall')}</strong></h5>
                  <p>{cropDatabase[selectedCrop].rainfall}</p>
                </div>
                <div className="feature-card">
                  <h5><strong>{t('cropInfo.soilType')}</strong></h5>
                  <p>{cropDatabase[selectedCrop].soil}</p>
                </div>
              </div>

              {/* Current Stage Alert */}
              {plantingDate && currentStage && (
                <div className="alert alert-success mb-4">
                  <h4>
                    <FaSeedling className="me-2" />
                    {t('cropInfo.currentStage')} ({t('cropInfo.day')} {currentDay})
                  </h4>
                  <h5 className="mt-3"><strong>{currentStage.name}</strong></h5>
                  <p className="mb-0">
                    <strong>{t('cropInfo.actionRequired')}:</strong> {currentStage.action}
                  </p>
                </div>
              )}

              {/* Growth Stages Timeline */}
              <h3 className="mb-4">{t('cropInfo.completeTimeline')}</h3>
              <div className="timeline">
                {t(`cropInfo.crops.${selectedCrop}.stages`).map((stage, index) => (
                  <div 
                    key={index} 
                    className={`timeline-item ${currentStage?.name === stage.name ? 'active' : ''}`}
                  >
                    <div className="timeline-marker">{index + 1}</div>
                    <div className="timeline-content">
                      <h5><strong>{stage.name}</strong></h5>
                      <p className="mb-1"><em>Days {cropDatabase[selectedCrop].stagesDays[index].days}</em></p>
                      <p className="mb-0">{stage.action}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Tips */}
              <div className="mt-5 p-4 bg-light rounded">
                <h4>{t('cropInfo.generalTips')} {t(`cropInfo.crops.${selectedCrop}.name`)}</h4>
                <ul>
                  <li>Monitor weather forecasts regularly and adjust irrigation accordingly</li>
                  <li>Perform regular field inspections for pest and disease signs</li>
                  <li>Maintain proper field drainage to prevent waterlogging</li>
                  <li>Use quality seeds from certified sources</li>
                  <li>Keep records of all farming activities and inputs used</li>
                  <li>Consult with agricultural experts for specific problems</li>
                </ul>
              </div>
            </div>
          )}

          {!selectedCrop && (
            <div className="text-center p-5 bg-light rounded">
              <FaSeedling style={{ fontSize: '4rem', color: '#0d4d27' }} />
              <h4 className="mt-3">{t('cropInfo.selectToStart')}</h4>
              <p>{t('cropInfo.chooseFromAbove')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropInfo;

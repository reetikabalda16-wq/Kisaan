import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPrescriptionBottleAlt, FaSearch, FaSeedling, FaExclamationTriangle, FaLeaf, FaVirus } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Medicines.css';

const Medicines = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedNutrient, setSelectedNutrient] = useState('all');

  // Comprehensive medicine data
  const medicines = [
    {
      id: 1,
      name: 'Chlorpyrifos',
      category: 'insecticide',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
      diseases: ['Aphids', 'Termites', 'Cutworms', 'Stem Borers'],
      whenNeeded: 'When insect infestation is observed on leaves and stems',
      sideEffects: ['Toxic to bees and aquatic life', 'Can cause skin irritation', 'Avoid during flowering'],
      nutrients: ['None - Pure insecticide'],
      dosage: '2-3 ml per liter of water',
      applicationMethod: 'Foliar spray',
      waitingPeriod: '15 days before harvest'
    },
    {
      id: 2,
      name: 'Mancozeb',
      category: 'fungicide',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400',
      diseases: ['Late Blight', 'Early Blight', 'Downy Mildew', 'Leaf Spot'],
      whenNeeded: 'At first sign of fungal infection or as preventive measure',
      sideEffects: ['Can cause respiratory irritation', 'Wear protective gear', 'Keep away from water sources'],
      nutrients: ['Contains Manganese and Zinc'],
      dosage: '2.5 grams per liter of water',
      applicationMethod: 'Foliar spray every 7-10 days',
      waitingPeriod: '7 days before harvest'
    },
    {
      id: 3,
      name: '2,4-D (2,4-Dichlorophenoxyacetic acid)',
      category: 'herbicide',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
      diseases: ['Broadleaf Weeds', 'Dandelions', 'Clover', 'Wild Mustard'],
      whenNeeded: 'When broadleaf weeds emerge in crop fields',
      sideEffects: ['Can damage broadleaf crops', 'Toxic to fish', 'Drift sensitive - avoid windy conditions'],
      nutrients: ['None'],
      dosage: '1-2 liters per acre',
      applicationMethod: 'Post-emergence spray',
      waitingPeriod: 'Not for edible crops - use in cereals only'
    },
    {
      id: 4,
      name: 'Imidacloprid',
      category: 'insecticide',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400',
      diseases: ['Whiteflies', 'Aphids', 'Thrips', 'Leafhoppers'],
      whenNeeded: 'Early stage of pest attack or as preventive measure',
      sideEffects: ['Harmful to bees', 'Do not apply during flowering', 'Can persist in soil'],
      nutrients: ['None'],
      dosage: '0.5 ml per liter of water',
      applicationMethod: 'Soil drench or foliar spray',
      waitingPeriod: '21 days before harvest'
    },
    {
      id: 5,
      name: 'Copper Oxychloride',
      category: 'fungicide',
      image: 'https://images.unsplash.com/photo-1609339022985-161225eaa0c9?w=400',
      diseases: ['Bacterial Blight', 'Anthracnose', 'Cercospora Leaf Spot', 'Powdery Mildew'],
      whenNeeded: 'During humid conditions or at first disease symptoms',
      sideEffects: ['Can cause phytotoxicity in some plants', 'Toxic to aquatic organisms', 'Avoid in copper-rich soils'],
      nutrients: ['Contains Copper - essential micronutrient'],
      dosage: '3 grams per liter of water',
      applicationMethod: 'Protective foliar spray',
      waitingPeriod: '3-5 days before harvest'
    },
    {
      id: 6,
      name: 'Neem Oil (Azadirachtin)',
      category: 'organic',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400',
      diseases: ['Aphids', 'Mites', 'Whiteflies', 'Fungal infections'],
      whenNeeded: 'As preventive or at early pest/disease detection',
      sideEffects: ['Minimal - safe for beneficial insects', 'May cause leaf burn in hot sun', 'Completely biodegradable'],
      nutrients: ['Natural plant compounds', 'Rich in fatty acids'],
      dosage: '5-10 ml per liter of water',
      applicationMethod: 'Spray in early morning or evening',
      waitingPeriod: 'Safe - can harvest same day'
    }
  ];

  // Comprehensive fertilizer data
  const fertilizers = [
    {
      id: 1,
      name: 'NPK 19-19-19',
      category: 'fertilizer',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400',
      nutrients: ['Nitrogen (19%)', 'Phosphorus (19%)', 'Potassium (19%)'],
      diseases: ['Prevents nutrient deficiency', 'Strengthens overall plant health'],
      whenNeeded: 'During active growth phase, every 2-3 weeks',
      sideEffects: ['Over-application can burn plants', 'Can leach into groundwater', 'Use recommended dosage only'],
      soilNutrient: 'balanced',
      benefits: ['Promotes vegetative growth', 'Enhances flowering', 'Improves fruit quality'],
      dosage: '5 grams per liter of water',
      applicationMethod: 'Soil application or fertigation'
    },
    {
      id: 2,
      name: 'Urea (46% N)',
      category: 'fertilizer',
      image: 'https://images.unsplash.com/photo-1625246282780-14e0d3b2b724?w=400',
      nutrients: ['Nitrogen (46%)'],
      diseases: ['Prevents nitrogen deficiency', 'Yellowing of leaves'],
      whenNeeded: 'During vegetative growth phase',
      sideEffects: ['Can volatilize if not incorporated', 'Excessive use leads to lodging', 'May acidify soil over time'],
      soilNutrient: 'nitrogen',
      benefits: ['Rapid green growth', 'Increases protein content', 'Cost-effective nitrogen source'],
      dosage: '20-25 kg per acre',
      applicationMethod: 'Broadcast and incorporate into soil'
    },
    {
      id: 3,
      name: 'Single Super Phosphate (SSP)',
      category: 'fertilizer',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400',
      nutrients: ['Phosphorus (16%)', 'Sulfur (11%)', 'Calcium (20%)'],
      diseases: ['Prevents phosphorus deficiency', 'Poor root development'],
      whenNeeded: 'At sowing or transplanting time',
      sideEffects: ['Can fix in alkaline soils', 'Relatively safe with proper use'],
      soilNutrient: 'phosphorus',
      benefits: ['Strong root development', 'Better flowering and fruiting', 'Energy transfer in plants'],
      dosage: '50-75 kg per acre',
      applicationMethod: 'Basal application before sowing'
    },
    {
      id: 4,
      name: 'Muriate of Potash (MOP)',
      category: 'fertilizer',
      image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400',
      nutrients: ['Potassium (60%)'],
      diseases: ['Prevents potassium deficiency', 'Weak stems and poor fruit quality'],
      whenNeeded: 'During flowering and fruit development',
      sideEffects: ['High chloride content - not suitable for chloride-sensitive crops', 'Can cause salt buildup'],
      soilNutrient: 'potassium',
      benefits: ['Improves fruit quality', 'Disease resistance', 'Water regulation'],
      dosage: '25-30 kg per acre',
      applicationMethod: 'Split application during crop growth'
    },
    {
      id: 5,
      name: 'DAP (Diammonium Phosphate)',
      category: 'fertilizer',
      image: 'https://images.unsplash.com/photo-1590274823469-c3b9f49facc2?w=400',
      nutrients: ['Nitrogen (18%)', 'Phosphorus (46%)'],
      diseases: ['Prevents early growth deficiency', 'Poor seedling establishment'],
      whenNeeded: 'At planting time or early growth stage',
      sideEffects: ['Can increase soil pH temporarily', 'Over-use may cause salt accumulation'],
      soilNutrient: 'phosphorus',
      benefits: ['Quick nutrient availability', 'Promotes early root growth', 'Suitable for most crops'],
      dosage: '50 kg per acre',
      applicationMethod: 'Basal application at sowing'
    },
    {
      id: 6,
      name: 'Zinc Sulfate',
      category: 'fertilizer',
      image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=400',
      nutrients: ['Zinc (21%)', 'Sulfur (11%)'],
      diseases: ['Prevents zinc deficiency', 'Stunted growth', 'Chlorosis'],
      whenNeeded: 'When zinc deficiency symptoms appear or as preventive',
      sideEffects: ['Excessive zinc is toxic to plants', 'Can reduce iron uptake if over-applied'],
      soilNutrient: 'micronutrients',
      benefits: ['Essential for enzyme function', 'Improves crop quality', 'Increases yield'],
      dosage: '5-10 kg per acre or 0.5% foliar spray',
      applicationMethod: 'Soil application or foliar spray'
    },
    {
      id: 7,
      name: 'Vermicompost',
      category: 'organic',
      image: 'https://images.unsplash.com/photo-1621452193481-0db1e7165e0c?w=400',
      nutrients: ['NPK (variable)', 'Micronutrients', 'Organic matter', 'Beneficial microbes'],
      diseases: ['Prevents all nutrient deficiencies', 'Improves soil health'],
      whenNeeded: 'Can be used throughout growth cycle',
      sideEffects: ['Minimal side effects', 'Completely safe and organic', 'Improves soil structure'],
      soilNutrient: 'organic',
      benefits: ['Enhances soil fertility', 'Improves water retention', 'Rich in beneficial microbes'],
      dosage: '2-5 tons per acre',
      applicationMethod: 'Broadcast and mix with soil'
    },
    {
      id: 8,
      name: 'Calcium Nitrate',
      category: 'fertilizer',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400',
      nutrients: ['Nitrogen (15.5%)', 'Calcium (19%)'],
      diseases: ['Prevents calcium deficiency', 'Blossom end rot', 'Tip burn'],
      whenNeeded: 'During fruit development, especially in tomatoes and peppers',
      sideEffects: ['Can increase soil pH', 'Highly water soluble - risk of leaching'],
      soilNutrient: 'calcium',
      benefits: ['Prevents fruit disorders', 'Strengthens cell walls', 'Quick nitrogen source'],
      dosage: '10-15 kg per acre or 2-3 grams per liter foliar spray',
      applicationMethod: 'Fertigation or foliar application'
    }
  ];

  // Combine all items
  const allItems = [...medicines, ...fertilizers];

  // Filter items based on search and category
  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.diseases.some(d => d.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    const matchesNutrient = selectedNutrient === 'all' || 
                           (item.soilNutrient && item.soilNutrient === selectedNutrient) ||
                           (item.nutrients && item.nutrients.some(n => n.toLowerCase().includes(selectedNutrient.toLowerCase())));
    
    return matchesSearch && matchesCategory && matchesNutrient;
  });

  return (
    <div className="medicines-page">
      <div className="container py-5">
        <button 
          className="back-button mb-4"
          onClick={() => navigate('/')}
        >
          <FaArrowLeft /> Back
        </button>

        <div className="text-center mb-5">
          <h1 className="medicines-page-title mb-3">
            <FaPrescriptionBottleAlt className="me-2" />
            Agricultural Medicines & Fertilizers
          </h1>
          <p className="medicines-page-intro">
            Comprehensive database of medicines and fertilizers for crop health
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="search-filter-section mb-5">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search by name, disease, or nutrient..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="col-md-3">
              <select 
                className="form-select filter-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="insecticide">Insecticides</option>
                <option value="fungicide">Fungicides</option>
                <option value="herbicide">Herbicides</option>
                <option value="fertilizer">Fertilizers</option>
                <option value="organic">Organic Solutions</option>
              </select>
            </div>

            <div className="col-md-3">
              <select 
                className="form-select filter-select"
                value={selectedNutrient}
                onChange={(e) => setSelectedNutrient(e.target.value)}
              >
                <option value="all">All Nutrients</option>
                <option value="nitrogen">Nitrogen (N)</option>
                <option value="phosphorus">Phosphorus (P)</option>
                <option value="potassium">Potassium (K)</option>
                <option value="balanced">Balanced NPK</option>
                <option value="calcium">Calcium</option>
                <option value="micronutrients">Micronutrients</option>
                <option value="organic">Organic Matter</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count mb-4">
          <p className="text-muted">
            Showing {filteredItems.length} results
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Items Grid */}
        <div className="row g-4">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="medicine-card">
                  <div className="medicine-image-container">
                    <img src={item.image} alt={item.name} className="medicine-image" />
                    <span className={`category-badge ${item.category}`}>
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="medicine-content">
                    <h3 className="medicine-name">{item.name}</h3>
                    
                    <div className="medicine-section">
                      <h5 className="section-title">
                        <FaVirus className="me-2" />
                        Effective Against
                      </h5>
                      <div className="disease-tags">
                        {item.diseases.map((disease, idx) => (
                          <span key={idx} className="disease-tag">{disease}</span>
                        ))}
                      </div>
                    </div>

                    <div className="medicine-section">
                      <h5 className="section-title">
                        <FaLeaf className="me-2" />
                        Nutrients/Components
                      </h5>
                      <ul className="nutrient-list">
                        {item.nutrients.map((nutrient, idx) => (
                          <li key={idx}>{nutrient}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="medicine-section">
                      <h5 className="section-title">
                        <FaSeedling className="me-2" />
                        When to Use
                      </h5>
                      <p className="when-needed">{item.whenNeeded}</p>
                    </div>

                    <div className="medicine-section">
                      <h5 className="section-title">
                        <FaExclamationTriangle className="me-2" />
                        Side Effects / Precautions
                      </h5>
                      <ul className="side-effects-list">
                        {item.sideEffects.map((effect, idx) => (
                          <li key={idx}>{effect}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="medicine-details">
                      <div className="detail-row">
                        <strong>Dosage:</strong> {item.dosage}
                      </div>
                      <div className="detail-row">
                        <strong>Application:</strong> {item.applicationMethod}
                      </div>
                      {item.waitingPeriod && (
                        <div className="detail-row">
                          <strong>Waiting Period:</strong> {item.waitingPeriod}
                        </div>
                      )}
                      {item.benefits && (
                        <div className="detail-row">
                          <strong>Benefits:</strong>
                          <ul className="benefits-list">
                            {item.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="no-results">
                <FaSearch size={50} className="mb-3" />
                <h4>No results found</h4>
                <p>Try adjusting your search or filters</p>
              </div>
            </div>
          )}
        </div>

        {/* Safety Information */}
        <div className="safety-section mt-5">
          <div className="alert alert-warning">
            <h4 className="alert-heading">
              <FaExclamationTriangle className="me-2" />
              Important Safety Guidelines
            </h4>
            <hr />
            <ul className="mb-0">
              <li>Always read and follow the product label instructions carefully</li>
              <li>Use appropriate personal protective equipment (PPE) - gloves, masks, goggles</li>
              <li>Store all products in a secure, well-ventilated area away from children and animals</li>
              <li>Never mix different chemicals unless specifically recommended</li>
              <li>Respect pre-harvest intervals (PHI) and re-entry intervals (REI)</li>
              <li>Dispose of empty containers properly according to local regulations</li>
              <li>Consult agricultural experts for proper application and dosage</li>
              <li>Keep emergency contact numbers readily available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicines;

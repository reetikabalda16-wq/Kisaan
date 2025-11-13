import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBug, FaSearch, FaCamera, FaMicrophone, FaLeaf, FaPrescriptionBottle, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './CropDisease.css';

const CropDisease = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Comprehensive disease database
  const diseases = [
    {
      id: 1,
      name: 'Powdery Mildew',
      category: 'Fungal',
      crops: ['Wheat', 'Barley', 'Peas', 'Cucurbits'],
      symptoms: 'White powdery spots on leaves, stems, and sometimes fruit. Leaves may yellow and die.',
      organicTreatment: [
        'Spray with baking soda solution (1 tablespoon per gallon of water)',
        'Apply neem oil spray weekly',
        'Use milk spray (1 part milk to 9 parts water)',
        'Sulfur dust application',
        'Ensure good air circulation between plants'
      ],
      chemicalTreatment: [
        'Sulfur-based fungicides',
        'Potassium bicarbonate',
        'Myclobutanil',
        'Propiconazole',
        'Trifloxystrobin'
      ],
      prevention: [
        'Plant resistant varieties',
        'Avoid overhead watering',
        'Provide adequate spacing between plants',
        'Remove infected plant parts',
        'Apply preventive sulfur sprays'
      ]
    },
    {
      id: 2,
      name: 'Late Blight',
      category: 'Fungal',
      crops: ['Tomatoes', 'Potatoes'],
      symptoms: 'Dark brown spots on leaves, white fuzzy growth on undersides, rapid plant death.',
      organicTreatment: [
        'Copper-based fungicides',
        'Bordeaux mixture application',
        'Remove and destroy infected plants immediately',
        'Apply compost tea as preventive',
        'Bacillus subtilis bio-fungicide'
      ],
      chemicalTreatment: [
        'Chlorothalonil',
        'Mancozeb',
        'Metalaxyl',
        'Cymoxanil + Famoxadone',
        'Fluazinam'
      ],
      prevention: [
        'Plant certified disease-free seed potatoes',
        'Avoid overhead irrigation',
        'Space plants properly for air circulation',
        'Destroy volunteer potato and tomato plants',
        'Crop rotation (3-4 years)'
      ]
    },
    {
      id: 3,
      name: 'Bacterial Leaf Spot',
      category: 'Bacterial',
      crops: ['Peppers', 'Tomatoes'],
      symptoms: 'Small dark spots with yellow halos on leaves, leaf drop, reduced fruit quality.',
      organicTreatment: [
        'Copper hydroxide spray',
        'Remove infected plant material',
        'Apply hydrogen peroxide solution',
        'Use biological control agents (beneficial bacteria)',
        'Neem oil application'
      ],
      chemicalTreatment: [
        'Copper-based bactericides',
        'Streptomycin sulfate (in severe cases)',
        'Fixed copper sprays',
        'Copper oxychloride',
        'Kasugamycin'
      ],
      prevention: [
        'Use disease-free seeds',
        'Avoid overhead watering',
        'Practice crop rotation',
        'Disinfect tools between plants',
        'Remove plant debris after harvest'
      ]
    },
    {
      id: 4,
      name: 'Root Rot',
      category: 'Fungal',
      crops: ['Most crops', 'Particularly common in vegetables'],
      symptoms: 'Wilting plants, yellowing leaves, brown/black roots, stunted growth, plant death.',
      organicTreatment: [
        'Improve soil drainage immediately',
        'Apply Trichoderma harzianum bio-fungicide',
        'Use mycorrhizal fungi',
        'Add perlite or sand to improve soil structure',
        'Reduce watering frequency'
      ],
      chemicalTreatment: [
        'Metalaxyl',
        'Fosetyl-Al',
        'Propamocarb',
        'Thiophanate-methyl',
        'Azoxystrobin'
      ],
      prevention: [
        'Ensure proper drainage',
        'Avoid overwatering',
        'Use raised beds in wet areas',
        'Sterilize potting mix',
        'Plant in well-draining soil'
      ]
    },
    {
      id: 5,
      name: 'Leaf Rust',
      category: 'Fungal',
      crops: ['Wheat', 'Barley', 'Coffee', 'Beans'],
      symptoms: 'Orange to brown pustules on leaves, premature leaf drop, reduced yield.',
      organicTreatment: [
        'Sulfur dust application',
        'Neem oil spray',
        'Remove infected leaves',
        'Apply compost to boost plant immunity',
        'Garlic and chili spray'
      ],
      chemicalTreatment: [
        'Tebuconazole',
        'Propiconazole',
        'Azoxystrobin',
        'Trifloxystrobin',
        'Mancozeb'
      ],
      prevention: [
        'Plant rust-resistant varieties',
        'Avoid late planting',
        'Remove volunteer plants',
        'Ensure balanced fertilization',
        'Monitor regularly for early detection'
      ]
    },
    {
      id: 6,
      name: 'Mosaic Virus',
      category: 'Viral',
      crops: ['Tomatoes', 'Cucumbers', 'Tobacco', 'Peppers'],
      symptoms: 'Mottled yellow and green patterns on leaves, stunted growth, distorted leaves.',
      organicTreatment: [
        'Remove and destroy infected plants immediately',
        'Control aphid vectors with neem oil',
        'Use reflective mulches to deter aphids',
        'Apply insecticidal soap for aphid control',
        'No cure available - focus on prevention'
      ],
      chemicalTreatment: [
        'No direct cure available',
        'Insecticides for vector control (Imidacloprid)',
        'Systemic insecticides (Thiamethoxam)',
        'Pyrethroid insecticides for aphids',
        'Focus on preventing virus spread'
      ],
      prevention: [
        'Use virus-resistant varieties',
        'Control aphid populations',
        'Remove infected plants immediately',
        'Wash hands and disinfect tools',
        'Use certified disease-free seeds'
      ]
    },
    {
      id: 7,
      name: 'Anthracnose',
      category: 'Fungal',
      crops: ['Mango', 'Papaya', 'Beans', 'Cucurbits'],
      symptoms: 'Dark, sunken lesions on fruits and leaves, fruit rot, premature fruit drop.',
      organicTreatment: [
        'Copper-based fungicides',
        'Bordeaux mixture spray',
        'Neem oil application',
        'Remove infected fruit and plant parts',
        'Apply compost tea as foliar spray'
      ],
      chemicalTreatment: [
        'Mancozeb',
        'Chlorothalonil',
        'Azoxystrobin',
        'Carbendazim',
        'Thiophanate-methyl'
      ],
      prevention: [
        'Prune trees for better air circulation',
        'Avoid overhead irrigation',
        'Remove fallen fruit and debris',
        'Apply preventive sprays before rainy season',
        'Use disease-free planting material'
      ]
    },
    {
      id: 8,
      name: 'Downy Mildew',
      category: 'Fungal',
      crops: ['Grapes', 'Cucumbers', 'Lettuce', 'Onions'],
      symptoms: 'Yellow spots on upper leaf surface, grayish-purple growth on undersides.',
      organicTreatment: [
        'Copper fungicides',
        'Potassium bicarbonate spray',
        'Bacillus subtilis application',
        'Improve air circulation',
        'Remove infected leaves'
      ],
      chemicalTreatment: [
        'Metalaxyl-M',
        'Fosetyl-Al',
        'Cymoxanil',
        'Dimethomorph',
        'Mandipropamid'
      ],
      prevention: [
        'Plant resistant varieties',
        'Space plants adequately',
        'Water in morning hours',
        'Avoid overhead irrigation',
        'Practice crop rotation'
      ]
    },
    {
      id: 9,
      name: 'Fusarium Wilt',
      category: 'Fungal',
      crops: ['Tomatoes', 'Bananas', 'Cotton', 'Chickpeas'],
      symptoms: 'Yellowing leaves starting from bottom, wilting in hot weather, brown vascular tissue.',
      organicTreatment: [
        'Apply Trichoderma harzianum to soil',
        'Use biofungicides with beneficial bacteria',
        'Improve soil health with compost',
        'Solarize soil before planting',
        'Remove and destroy infected plants'
      ],
      chemicalTreatment: [
        'No effective chemical cure for infected plants',
        'Soil fumigation with Metam sodium (pre-planting)',
        'Carbendazim soil drench',
        'Benomyl (where available)',
        'Focus on prevention and soil treatment'
      ],
      prevention: [
        'Use resistant varieties',
        'Practice crop rotation (4+ years)',
        'Maintain soil pH 6.5-7.0',
        'Avoid soil compaction',
        'Use disease-free transplants'
      ]
    },
    {
      id: 10,
      name: 'Blast Disease',
      category: 'Fungal',
      crops: ['Rice', 'Wheat'],
      symptoms: 'Gray or brown lesions on leaves, neck rot, reduced grain filling.',
      organicTreatment: [
        'Silicon fertilizer application',
        'Neem cake in soil',
        'Pseudomonas fluorescens seed treatment',
        'Ash application in fields',
        'Proper field drainage'
      ],
      chemicalTreatment: [
        'Tricyclazole',
        'Carbendazim',
        'Isoprothiolane',
        'Kasugamycin',
        'Edifenphos'
      ],
      prevention: [
        'Use resistant varieties',
        'Balanced fertilization (avoid excess nitrogen)',
        'Proper water management',
        'Remove infected stubble',
        'Adjust planting dates'
      ]
    },
    {
      id: 11,
      name: 'Bacterial Wilt',
      category: 'Bacterial',
      crops: ['Tomatoes', 'Potatoes', 'Eggplant', 'Peppers'],
      symptoms: 'Rapid wilting without yellowing, brown vascular tissue, bacterial ooze.',
      organicTreatment: [
        'Remove and destroy infected plants immediately',
        'Solarize soil between crops',
        'Apply beneficial bacteria to soil',
        'Use resistant rootstocks for grafting',
        'Improve soil drainage'
      ],
      chemicalTreatment: [
        'No effective cure once infected',
        'Streptomycin sulfate (preventive)',
        'Copper compounds (limited effectiveness)',
        'Soil fumigation before planting',
        'Focus on prevention and field sanitation'
      ],
      prevention: [
        'Use certified disease-free seeds',
        'Practice long crop rotation',
        'Control solanaceous weeds',
        'Avoid field operations when wet',
        'Disinfect equipment between fields'
      ]
    },
    {
      id: 12,
      name: 'Septoria Leaf Spot',
      category: 'Fungal',
      crops: ['Tomatoes'],
      symptoms: 'Small circular spots with dark borders and gray centers on lower leaves.',
      organicTreatment: [
        'Copper fungicide spray',
        'Remove infected lower leaves',
        'Mulch to prevent soil splash',
        'Baking soda spray solution',
        'Compost tea application'
      ],
      chemicalTreatment: [
        'Chlorothalonil',
        'Mancozeb',
        'Copper hydroxide',
        'Azoxystrobin',
        'Maneb'
      ],
      prevention: [
        'Stake and prune plants for air circulation',
        'Water at soil level',
        'Rotate crops (3-4 years)',
        'Remove plant debris after harvest',
        'Apply preventive fungicide sprays'
      ]
    }
  ];

  // Filter diseases based on search query
  const filteredDiseases = diseases.filter(disease =>
    disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    disease.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    disease.crops.some(crop => crop.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Camera/Image Upload Handler
  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
        // Simulate AI analysis
        alert('Image captured! In a full implementation, this would:\n\n1. Send the image to an AI model for disease identification\n2. Analyze plant symptoms\n3. Suggest possible diseases\n4. Recommend treatments\n\nFor now, you can search manually using the search bar.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setCapturedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Voice Recognition Handler
  const handleMicrophoneClick = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in your browser. Please try Chrome or Edge.');
      return;
    }

    if (isListening) {
      // Stop listening
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    // Start listening
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      if (event.error === 'no-speech') {
        alert('No speech detected. Please try again.');
      } else if (event.error === 'not-allowed') {
        alert('Microphone access denied. Please allow microphone access in your browser settings.');
      } else {
        alert('Error: ' + event.error);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleDiseaseClick = (disease) => {
    setSelectedDisease(selectedDisease?.id === disease.id ? null : disease);
  };

  return (
    <div className="crop-disease-page">
      <div className="container py-5">
        <button 
          className="back-button mb-4"
          onClick={() => navigate('/')}
        >
          <FaArrowLeft /> Back
        </button>

        <div className="text-center mb-5">
          <h1 className="disease-page-title mb-3">
            <FaBug className="me-2" />
            Crop Disease Management
          </h1>
          <p className="disease-page-intro">
            Comprehensive guide to identify, treat, and prevent crop diseases
          </p>
        </div>

        {/* Search Bar with Camera and Microphone */}
        <div className="search-section mb-5">
          <div className="search-container">
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search by disease name, category, or crop..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <button className="icon-button camera-button" onClick={handleCameraClick}>
              <FaCamera />
              <span>Camera</span>
            </button>
            <button 
              className={`icon-button microphone-button ${isListening ? 'listening' : ''}`}
              onClick={handleMicrophoneClick}
            >
              <FaMicrophone />
              <span>{isListening ? 'Listening...' : 'Voice'}</span>
            </button>
          </div>
        </div>

        {/* Captured Image Preview */}
        {capturedImage && (
          <div className="image-preview-container mb-4">
            <div className="image-preview-card">
              <button className="remove-image-btn" onClick={handleRemoveImage}>
                <FaTimes />
              </button>
              <img src={capturedImage} alt="Captured plant" className="captured-image" />
              <p className="mt-2 text-center">
                <small>Image captured. Use the search bar to find matching diseases.</small>
              </p>
            </div>
          </div>
        )}

        {/* Disease Results Count */}
        <div className="results-info mb-3">
          <p className="text-muted">
            {filteredDiseases.length} {filteredDiseases.length === 1 ? 'disease' : 'diseases'} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Disease Cards */}
        <div className="disease-grid">
          {filteredDiseases.map((disease) => (
            <div key={disease.id} className="disease-card">
              <div 
                className="disease-card-header"
                onClick={() => handleDiseaseClick(disease)}
              >
                <div className="disease-header-content">
                  <h3 className="disease-name">{disease.name}</h3>
                  <span className={`disease-category ${disease.category.toLowerCase()}`}>
                    {disease.category}
                  </span>
                </div>
                <button className="expand-button">
                  {selectedDisease?.id === disease.id ? '−' : '+'}
                </button>
              </div>

              <div className="disease-crops mb-3">
                <strong>Affected Crops:</strong> {disease.crops.join(', ')}
              </div>

              <div className="disease-symptoms">
                <strong>Symptoms:</strong>
                <p>{disease.symptoms}</p>
              </div>

              {selectedDisease?.id === disease.id && (
                <div className="disease-details">
                  {/* Organic Treatment */}
                  <div className="treatment-section organic-section">
                    <h4 className="treatment-title">
                      <FaLeaf className="me-2" />
                      Organic Treatment
                    </h4>
                    <ul className="treatment-list">
                      {disease.organicTreatment.map((treatment, index) => (
                        <li key={index}>{treatment}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Chemical/Medicine Treatment */}
                  <div className="treatment-section medicine-section">
                    <h4 className="treatment-title">
                      <FaPrescriptionBottle className="me-2" />
                      Chemical Treatment (Medicines)
                    </h4>
                    <ul className="treatment-list">
                      {disease.chemicalTreatment.map((treatment, index) => (
                        <li key={index}>{treatment}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention */}
                  <div className="treatment-section prevention-section">
                    <h4 className="treatment-title">
                      Prevention Measures
                    </h4>
                    <ul className="treatment-list">
                      {disease.prevention.map((measure, index) => (
                        <li key={index}>{measure}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredDiseases.length === 0 && (
          <div className="no-results">
            <FaBug className="no-results-icon" />
            <h3>No diseases found</h3>
            <p>Try adjusting your search or browse all diseases</p>
          </div>
        )}

        {/* Additional Information */}
        <div className="info-section mt-5">
          <div className="alert alert-warning">
            <h5><strong>Important Notes:</strong></h5>
            <ul className="mb-0">
              <li>Always read product labels and follow recommended dosages</li>
              <li>Wear protective equipment when applying chemicals</li>
              <li>Consult agricultural experts for severe infestations</li>
              <li>Consider integrated pest management (IPM) approaches</li>
              <li>Keep records of disease occurrences and treatments applied</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropDisease;

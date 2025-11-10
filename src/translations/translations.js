const translations = {
  en: {
    header: {
      title: 'KISAAN UDAY',
      home: 'Home',
      about: 'About',
      services: 'Services',
      more: 'More',
      schemes: 'Schemes',
      marketInfo: 'Market Info',
      cropInfo: 'Crop Info',
      weatherUpdates: 'Weather Updates',
      search: 'Search',
      login: 'Login',
      logout: 'Logout',
      language: 'Language',
      cropDisease: 'Crop Disease',
      medicines: 'Medicines'
    },
    services: {
      title: 'What We\'re Doing',
      subtitle: 'OUR SERVICES',
      learnMore: 'Learn More',
      showLess: 'Show Less',
      visit: 'Visit',
      backToServices: 'Back to Services',
      cropAdvisory: {
        title: 'Crop Advisory',
        description: 'Receive personalized advice on crop selection, sowing, and harvesting based on your soil type, weather conditions, and market demand.'
      },
      farmMechanization: {
        title: 'Farm Mechanization',
        description: 'Access a wide range of modern farming equipment and machinery on a rental basis.'
      },
      organicFarming: {
        title: 'Organic Farming Support',
        description: 'Transition to organic farming with our expert guidance.'
      },
      soilTesting: {
        title: 'Soil Testing & Analysis',
        description: 'Get your soil tested in our state-of-the-art labs.'
      },
      marketLinkages: {
        title: 'Market Linkages',
        description: 'Sell your produce directly to buyers through our digital marketplace.'
      },
      farmerHelpline: {
        title: '24/7 Farmer Helpline',
        description: 'Our dedicated helpline is available 24/7 to answer all your farming-related queries.'
      },
      financialServices: {
        title: 'Financial Services',
        description: 'Access a range of financial services, including crop insurance, loans, and government subsidies.'
      },
      weatherForecast: {
        title: 'Weather Forecasting',
        description: 'Receive accurate and timely weather forecasts for your location.'
      }
    },
    cropInfo: {
      title: 'Crop Information & Advisory',
      subtitle: 'Get personalized crop management advice based on your crop\'s growth stage',
      currentSeason: 'Current Season',
      selectSeason: 'Select Season',
      showCrops: 'Show Crops for This Season',
      hideCrops: 'Hide',
      suitableFor: 'Crops Suitable for',
      season: 'Season',
      selectCrop: 'Select Your Crop',
      whenPlanted: 'When did you plant?',
      growth: 'Growth',
      temperature: 'Temperature',
      rainfall: 'Rainfall',
      soilType: 'Soil Type',
      selectThisCrop: 'Select This Crop',
      currentStage: 'Current Growth Stage',
      day: 'Day',
      actionRequired: 'Action Required',
      completeTimeline: 'Complete Growth Timeline',
      generalTips: 'General Tips for',
      selectToStart: 'Select a crop to get started',
      chooseFromAbove: 'Choose your crop from the options above to receive personalized growth stage advice',
      back: 'Back',
      kharif: 'Kharif',
      rabi: 'Rabi',
      zaid: 'Zaid',
      allSeasons: 'All Seasons',
      crops: {
        rice: {
          name: 'Rice',
          stages: [
            { name: 'Sowing', action: 'Prepare nursery beds, soak seeds for 24 hours' },
            { name: 'Transplanting', action: 'Transplant seedlings, ensure proper spacing' },
            { name: 'Tillering', action: 'Apply first dose of nitrogen, maintain water level 5-7cm' },
            { name: 'Panicle Initiation', action: 'Apply second nitrogen dose, ensure adequate water' },
            { name: 'Flowering', action: 'Keep fields flooded, apply potash fertilizer' },
            { name: 'Grain Filling', action: 'Maintain moisture, watch for pests' },
            { name: 'Maturity', action: 'Drain field 10-15 days before harvest' }
          ]
        },
        wheat: {
          name: 'Wheat',
          stages: [
            { name: 'Sowing', action: 'Sow seeds at 5-6cm depth, use seed treatment' },
            { name: 'Germination', action: 'Light irrigation if needed, remove weeds' },
            { name: 'Tillering', action: 'Apply first nitrogen dose, irrigate fields' },
            { name: 'Stem Elongation', action: 'Apply second nitrogen dose, monitor for rust' },
            { name: 'Heading', action: 'Ensure adequate moisture, watch for aphids' },
            { name: 'Grain Filling', action: 'Light irrigation, apply potash if needed' },
            { name: 'Maturity', action: 'Stop irrigation, prepare for harvest' }
          ]
        },
        maize: {
          name: 'Maize/Corn',
          stages: [
            { name: 'Sowing', action: 'Plant seeds 5cm deep, maintain 60cm row spacing' },
            { name: 'Germination', action: 'Ensure moisture, protect from birds' },
            { name: 'Vegetative', action: 'Apply nitrogen fertilizer, irrigate regularly' },
            { name: 'Tasseling', action: 'Ensure water availability, apply potash' },
            { name: 'Silking', action: 'Critical water period, monitor pests' },
            { name: 'Grain Filling', action: 'Maintain moisture, watch for fall armyworm' },
            { name: 'Maturity', action: 'Reduce water, harvest when kernels are hard' }
          ]
        },
        cotton: {
          name: 'Cotton',
          stages: [
            { name: 'Sowing', action: 'Treat seeds, sow at 5cm depth' },
            { name: 'Germination', action: 'Thin to maintain plant spacing' },
            { name: 'Vegetative', action: 'Apply nitrogen, control weeds' },
            { name: 'Squaring', action: 'Monitor for bollworms, apply fertilizer' },
            { name: 'Flowering', action: 'Ensure water, watch for pest attack' },
            { name: 'Boll Development', action: 'Regular irrigation, apply potash' },
            { name: 'Boll Opening', action: 'Reduce water, start picking when bolls open' }
          ]
        },
        sugarcane: {
          name: 'Sugarcane',
          stages: [
            { name: 'Planting', action: 'Use healthy setts, plant in furrows' },
            { name: 'Germination', action: 'Apply light irrigation, remove weeds' },
            { name: 'Tillering', action: 'Apply nitrogen fertilizer, earthing up' },
            { name: 'Grand Growth', action: 'Regular irrigation, apply NPK fertilizers' },
            { name: 'Maturity', action: 'Reduce water, prepare for harvest' }
          ]
        },
        tomato: {
          name: 'Tomato',
          stages: [
            { name: 'Nursery', action: 'Prepare seedlings in nursery beds' },
            { name: 'Transplanting', action: 'Transplant seedlings, water immediately' },
            { name: 'Vegetative', action: 'Apply nitrogen, support plants with stakes' },
            { name: 'Flowering', action: 'Ensure pollination, apply balanced fertilizer' },
            { name: 'Fruit Setting', action: 'Regular watering, remove side shoots' },
            { name: 'Fruit Development', action: 'Apply potash, watch for blight' },
            { name: 'Harvesting', action: 'Pick fruits when fully colored' }
          ]
        },
        potato: {
          name: 'Potato',
          stages: [
            { name: 'Planting', action: 'Plant seed tubers 7-10cm deep' },
            { name: 'Emergence', action: 'Light irrigation, remove weeds' },
            { name: 'Vegetative', action: 'Earthing up, apply nitrogen fertilizer' },
            { name: 'Tuber Initiation', action: 'Ensure moisture, apply potash' },
            { name: 'Tuber Bulking', action: 'Regular irrigation, monitor for blight' },
            { name: 'Maturity', action: 'Stop irrigation 10 days before harvest' }
          ]
        },
        onion: {
          name: 'Onion',
          stages: [
            { name: 'Nursery', action: 'Prepare seedlings in raised beds' },
            { name: 'Transplanting', action: 'Transplant seedlings 10cm apart' },
            { name: 'Vegetative', action: 'Apply nitrogen, light irrigation' },
            { name: 'Bulb Formation', action: 'Reduce nitrogen, increase potash' },
            { name: 'Bulb Development', action: 'Maintain moisture, remove weeds' },
            { name: 'Maturity', action: 'Stop watering when tops fall over' }
          ]
        },
        soybean: {
          name: 'Soybean',
          stages: [
            { name: 'Sowing', action: 'Sow seeds 3-4cm deep, treat with rhizobium' },
            { name: 'Germination', action: 'Light irrigation if needed' },
            { name: 'Vegetative', action: 'Apply phosphorus, control weeds' },
            { name: 'Flowering', action: 'Ensure adequate moisture' },
            { name: 'Pod Formation', action: 'Critical water period, apply potash' },
            { name: 'Seed Filling', action: 'Maintain moisture, watch for pests' },
            { name: 'Maturity', action: 'Leaves turn yellow, pods ready to harvest' }
          ]
        },
        mustard: {
          name: 'Mustard',
          stages: [
            { name: 'Sowing', action: 'Sow seeds 2-3cm deep' },
            { name: 'Germination', action: 'Thin plants, apply light irrigation' },
            { name: 'Vegetative', action: 'Apply nitrogen fertilizer, weed control' },
            { name: 'Flowering', action: 'Ensure water availability' },
            { name: 'Pod Formation', action: 'Apply sulfur fertilizer, irrigate' },
            { name: 'Maturity', action: 'Harvest when pods turn brown' }
          ]
        }
      }
    },
    seasons: {
      kharif: 'Kharif (Monsoon)',
      rabi: 'Rabi (Winter)',
      zaid: 'Zaid (Summer)'
    },
    about: {
      title: 'About Our Agriculture Initiative',
      mission: 'Our mission is to empower farmers with modern, sustainable, and data-driven agricultural practices. By combining innovation and technology, we help farmers improve productivity, reduce environmental impact, and ensure food security for future generations.',
      focus: 'We focus on integrating smart tools like drones, IoT sensors, and AI-based analytics to optimize crop yield and promote eco-friendly farming methods.',
      platform: 'Kisaan Uday is a comprehensive platform designed to bridge the gap between traditional farming and modern technology. We provide real-time data on weather patterns, soil health, and market prices to help farmers make informed decisions. Our platform also offers access to a network of agricultural experts, financial services, and government schemes.',
      features: 'Our key features include personalized crop advisories, pest and disease detection using image recognition, and a marketplace for buying and selling produce directly, eliminating middlemen and ensuring fair prices for farmers. We are committed to building a resilient and profitable agricultural ecosystem for a prosperous India.',
      learnMore: 'Learn More',
      showLess: 'Show Less'
    },
    slider: {
      welcome: 'Welcome to Kisaan Uday',
      subtitle: 'Empowering Farmers with Technology',
      description: 'Get started with modern farming tools and expert guidance'
    },
    footer: {
      title: 'KISAAN UDAY',
      description: 'Empowering farmers with the latest technology and information to improve their livelihoods.',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About',
      services: 'Services',
      schemes: 'Schemes',
      contactUs: 'Contact Us',
      email: 'Email: support@kisaanuday.com',
      phone: 'Phone: +91 123 456 7890',
      address: 'Address: 123 Agri Tech Park, New Delhi, India',
      followUs: 'Follow Us',
      copyright: '© 2025 KISAAN UDAY. All rights reserved.'
    },
    login: {
      welcome: 'Welcome',
      subtitle: 'Login to continue exploring our services',
      emailPlaceholder: 'Email Address',
      passwordPlaceholder: 'Password',
      loginButton: 'Login',
      or: 'or',
      signInGoogle: 'Sign in with Google',
      signInPhone: 'Sign in with Phone',
      noAccount: "Don't have an account?",
      signUpHere: 'Sign up here',
      successMessage: 'Successfully logged in with email:'
    },
    marketInfo: {
      title: 'Live Market Prices',
      subtitle: 'Real-time agricultural commodity prices across India',
      backToHome: 'Back to Home',
      searchPlaceholder: 'Search for crops or markets...',
      featuredCrops: 'Featured Crops',
      allCropPrices: 'All Crop Prices',
      cropName: 'Crop Name',
      market: 'Market',
      price: 'Price (₹)',
      unit: 'Unit',
      change: 'Change',
      loading: 'Loading...',
      noCropsFound: 'No crops found',
      noteTitle: 'Note:',
      noteText: 'Prices are updated regularly from various agricultural markets across India. Prices may vary based on quality, quantity, and location.',
      perQuintal: 'per quintal'
    },
    cropAdvisoryPage: {
      title: 'Crop Advisory',
      intro: 'Our AI-powered crop advisory service provides personalized recommendations to help you maximize your yield and profitability.',
      howWeHelp: 'How We Help You',
      description: 'We analyze various factors, including your soil type, local weather conditions, and market demand, to offer the best advice on:',
      cropSelection: 'Crop Selection',
      cropSelectionDesc: 'Choosing the most suitable crops for your farm based on soil analysis and market trends.',
      sowingPlanting: 'Sowing and Planting',
      sowingPlantingDesc: 'Optimal timing and techniques for sowing and planting to ensure best germination.',
      fertilization: 'Fertilization',
      fertilizationDesc: 'Customized fertilizer plans to ensure your crops get the right nutrients at the right time.',
      pestManagement: 'Pest and Disease Management',
      pestManagementDesc: 'Early detection and effective treatment strategies for pests and diseases.',
      harvesting: 'Harvesting',
      harvestingDesc: 'Best practices for harvesting to ensure maximum quality and quantity of produce.',
      marketIntelligence: 'Market Intelligence',
      marketIntelligenceDesc: 'Real-time market insights to help you sell your produce at the best prices.',
      ourGoal: 'Our Goal',
      goalDesc: 'Our goal is to empower you with the data and insights you need to make informed decisions and achieve a successful harvest. With our expert guidance, you can increase productivity while reducing costs and environmental impact.'
    },
    farmMechanizationPage: {
      title: 'Farm Mechanization',
      intro: 'Access modern farming equipment and machinery to increase efficiency and reduce labor costs.',
      availableEquipment: 'Available Equipment',
      tractors: 'Tractors',
      tractorsDesc: 'Latest models with various HP options for different farm sizes.',
      harvesters: 'Harvesters',
      harvestersDesc: 'Efficient harvesting machines for various crops.',
      seeders: 'Seeders and Planters',
      seedersDesc: 'Precision seeding equipment for optimal planting.',
      sprayers: 'Sprayers',
      sprayersDesc: 'Modern spraying equipment for effective pest and disease management.',
      tillers: 'Tillers and Cultivators',
      tillersDesc: 'Soil preparation equipment for better crop establishment.',
      irrigation: 'Irrigation Systems',
      irrigationDesc: 'Modern irrigation solutions for water efficiency.',
      benefits: 'Benefits',
      benefitsDesc: 'Our mechanization services help you save time, reduce labor costs, and improve overall farm productivity.'
    },
    organicFarmingPage: {
      title: 'Organic Farming Support',
      intro: 'Transition to sustainable and profitable organic farming with our expert guidance.',
      certification: 'Organic Certification',
      certificationDesc: 'Complete support for organic certification process.',
      inputs: 'Organic Inputs',
      inputsDesc: 'Quality organic fertilizers, pesticides, and bio-inputs.',
      training: 'Training Programs',
      trainingDesc: 'Comprehensive training on organic farming practices.',
      marketing: 'Market Access',
      marketingDesc: 'Connect with premium organic produce buyers.',
      soilHealth: 'Soil Health Management',
      soilHealthDesc: 'Natural methods to improve and maintain soil fertility.',
      pestControl: 'Natural Pest Control',
      pestControlDesc: 'Biological and natural pest management solutions.',
      benefits: 'Benefits',
      benefitsDesc: 'Organic farming provides better prices, healthier soil, and sustainable long-term profitability.'
    },
    soilTestingPage: {
      title: 'Soil Testing & Analysis',
      intro: 'Get detailed soil analysis to optimize your crop nutrition and improve yields.',
      services: 'Our Services',
      comprehensive: 'Comprehensive Soil Analysis',
      comprehensiveDesc: 'Complete nutrient profile and pH analysis.',
      fertility: 'Fertility Assessment',
      fertilityDesc: 'Detailed evaluation of soil fertility status.',
      micronutrients: 'Micronutrient Testing',
      micronutrientsDesc: 'Analysis of essential micronutrient levels.',
      recommendations: 'Fertilizer Recommendations',
      recommendationsDesc: 'Customized fertilizer and amendment suggestions.',
      periodic: 'Periodic Monitoring',
      periodicDesc: 'Regular testing to track soil health improvements.',
      reports: 'Digital Reports',
      reportsDesc: 'Easy to understand digital analysis reports.',
      benefits: 'Benefits',
      benefitsDesc: 'Soil testing helps optimize fertilizer use, improve crop yields, and reduce input costs.'
    },
    marketLinkagesPage: {
      title: 'Market Linkages',
      intro: 'Connect directly with buyers and get fair prices for your produce.',
      features: 'Key Features',
      directSales: 'Direct to Buyer',
      directSalesDesc: 'Sell directly to buyers without middlemen.',
      pricing: 'Fair Pricing',
      pricingDesc: 'Transparent pricing based on current market rates.',
      quality: 'Quality Assurance',
      qualityDesc: 'Quality checks ensure premium prices.',
      payments: 'Quick Payments',
      paymentsDesc: 'Fast and secure payment processing.',
      logistics: 'Logistics Support',
      logisticsDesc: 'Assistance with transportation and delivery.',
      contracts: 'Contract Farming',
      contractsDesc: 'Secure contracts with advance price agreements.',
      benefits: 'Benefits',
      benefitsDesc: 'Direct market access ensures better prices, reduced wastage, and guaranteed sales for your produce.'
    },
    farmerHelplinePage: {
      title: '24/7 Farmer Helpline',
      intro: 'Get instant expert advice on all your farming queries anytime, anywhere.',
      services: 'Services Available',
      cropAdvice: 'Crop Advisory',
      cropAdviceDesc: 'Expert guidance on crop management.',
      pestIssues: 'Pest & Disease',
      pestIssuesDesc: 'Immediate help for pest and disease problems.',
      weather: 'Weather Advisory',
      weatherDesc: 'Weather-based farming recommendations.',
      schemes: 'Government Schemes',
      schemesDesc: 'Information on available schemes and subsidies.',
      technical: 'Technical Support',
      technicalDesc: 'Help with farm equipment and technology.',
      market: 'Market Information',
      marketDesc: 'Current market prices and trends.',
      contactInfo: 'Contact Information',
      phoneNumber: 'Phone: +91 123 456 7890',
      email: 'Email: helpline@kisaanuday.com',
      availability: 'Available 24/7 in multiple languages'
    },
    financialServicesPage: {
      title: 'Financial Services',
      intro: 'Access comprehensive financial solutions designed specifically for farmers.',
      services: 'Our Services',
      cropInsurance: 'Crop Insurance',
      cropInsuranceDesc: 'Protect your crops against natural calamities.',
      farmLoans: 'Farm Loans',
      farmLoansDesc: 'Easy loans for equipment, seeds, and inputs.',
      subsidies: 'Government Subsidies',
      subsidiesDesc: 'Complete assistance for subsidy applications.',
      kcc: 'Kisan Credit Card',
      kccDesc: 'Simple KCC application process.',
      inputCredit: 'Input Credit',
      inputCreditDesc: 'Credit facilities for seeds, fertilizers, and pesticides.',
      advisory: 'Financial Advisory',
      advisoryDesc: 'Expert guidance on farm financial planning.',
      benefits: 'Benefits',
      benefitsDesc: 'Our financial services provide security, easy access to credit, and help you grow your farming business.'
    },
    weatherForecastPage: {
      title: 'Weather Forecasting',
      intro: 'Get accurate and localized weather forecasts to plan your farming activities.',
      features: 'Features',
      daily: 'Daily Forecasts',
      dailyDesc: 'Detailed daily weather predictions.',
      weekly: 'Weekly Outlook',
      weeklyDesc: '7-day advance weather information.',
      rainfall: 'Rainfall Alerts',
      rainfallDesc: 'Timely alerts for expected rainfall.',
      temperature: 'Temperature Trends',
      temperatureDesc: 'Min/max temperature forecasts.',
      advisory: 'Farm Advisory',
      advisoryDesc: 'Weather-based crop management suggestions.',
      notifications: 'SMS/App Alerts',
      notificationsDesc: 'Instant weather alerts on your phone.',
      benefits: 'Benefits',
      benefitsDesc: 'Accurate weather forecasting helps you plan irrigation, spraying, and harvesting activities effectively.'
    }
  },
  hi: {
    header: {
      title: 'किसान उदय',
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      more: 'अधिक',
      schemes: 'योजनाएं',
      marketInfo: 'बाजार जानकारी',
      cropInfo: 'फसल जानकारी',
      weatherUpdates: 'मौसम अपडेट',
      search: 'खोजें',
      login: 'लॉगिन',
      logout: 'लॉगआउट',
      language: 'भाषा',
      cropDisease: 'फसल रोग',
      medicines: 'दवाइयाँ'
    },
    services: {
      title: 'हम क्या कर रहे हैं',
      subtitle: 'हमारी सेवाएं',
      learnMore: 'और जानें',
      showLess: 'कम दिखाएं',
      visit: 'जाएं',
      backToServices: 'सेवाओं पर वापस जाएं',
      cropAdvisory: {
        title: 'फसल सलाहकार',
        description: 'अपनी मिट्टी के प्रकार, मौसम की स्थिति और बाजार की मांग के आधार पर फसल चयन, बुवाई और कटाई पर व्यक्तिगत सलाह प्राप्त करें।'
      },
      farmMechanization: {
        title: 'कृषि यंत्रीकरण',
        description: 'किराए के आधार पर आधुनिक कृषि उपकरण और मशीनरी की विस्तृत श्रृंखला तक पहुंच प्राप्त करें।'
      },
      organicFarming: {
        title: 'जैविक खेती सहायता',
        description: 'हमारे विशेषज्ञ मार्गदर्शन के साथ जैविक खेती की ओर संक्रमण करें।'
      },
      soilTesting: {
        title: 'मिट्टी परीक्षण और विश्लेषण',
        description: 'हमारी अत्याधुनिक प्रयोगशालाओं में अपनी मिट्टी का परीक्षण करवाएं।'
      },
      marketLinkages: {
        title: 'बाजार संपर्क',
        description: 'हमारे डिजिटल बाज़ार के माध्यम से सीधे खरीदारों को अपनी उपज बेचें।'
      },
      farmerHelpline: {
        title: '24/7 किसान हेल्पलाइन',
        description: 'हमारी समर्पित हेल्पलाइन आपके सभी कृषि संबंधी प्रश्नों के उत्तर देने के लिए 24/7 उपलब्ध है।'
      },
      financialServices: {
        title: 'वित्तीय सेवाएं',
        description: 'फसल बीमा, ऋण और सरकारी सब्सिडी सहित वित्तीय सेवाओं की श्रृंखला तक पहुंच प्राप्त करें।'
      },
      weatherForecast: {
        title: 'मौसम पूर्वानुमान',
        description: 'अपने स्थान के लिए सटीक और समय पर मौसम पूर्वानुमान प्राप्त करें।'
      }
    },
    cropInfo: {
      title: 'फसल जानकारी और सलाहकार',
      subtitle: 'अपनी फसल के विकास चरण के आधार पर व्यक्तिगत फसल प्रबंधन सलाह प्राप्त करें',
      currentSeason: 'वर्तमान मौसम',
      selectSeason: 'मौसम चुनें',
      showCrops: 'इस मौसम के लिए फसलें दिखाएं',
      hideCrops: 'छुपाएं',
      suitableFor: 'के लिए उपयुक्त फसलें',
      season: 'मौसम',
      selectCrop: 'अपनी फसल चुनें',
      whenPlanted: 'आपने कब बोया था?',
      growth: 'वृद्धि',
      temperature: 'तापमान',
      rainfall: 'वर्षा',
      soilType: 'मिट्टी का प्रकार',
      selectThisCrop: 'यह फसल चुनें',
      currentStage: 'वर्तमान विकास चरण',
      day: 'दिन',
      actionRequired: 'आवश्यक कार्य',
      completeTimeline: 'पूर्ण विकास समयरेखा',
      generalTips: 'के लिए सामान्य सुझाव',
      selectToStart: 'शुरू करने के लिए एक फसल चुनें',
      chooseFromAbove: 'व्यक्तिगत विकास चरण सलाह प्राप्त करने के लिए ऊपर से अपनी फसल चुनें',
      back: 'वापस',
      kharif: 'खरीफ',
      rabi: 'रबी',
      zaid: 'जायद',
      allSeasons: 'सभी मौसम',
      crops: {
        rice: {
          name: 'चावल',
          stages: [
            { name: 'बुवाई', action: 'नर्सरी बेड तैयार करें, बीजों को 24 घंटे भिगोएं' },
            { name: 'प्रतिरोपण', action: 'पौधों का प्रत्यारोपण करें, उचित दूरी सुनिश्चित करें' },
            { name: 'कुसंह', action: 'नाइट्रोजन की पहली खुराक लगाएं, पानी का स्तर 5-7 सेमी बनाए रखें' },
            { name: 'गुच्छा आरंभ', action: 'दूसरी नाइट्रोजन खुराक लगाएं, पर्याप्त पानी सुनिश्चित करें' },
            { name: 'फूल आना', action: 'खेतों को जलमग्न रखें, पोटाश उर्वरक लगाएं' },
            { name: 'दाना भरना', action: 'नमी बनाए रखें, कीटों से सावधान रहें' },
            { name: 'परिपक्वता', action: 'कटाई से 10-15 दिन पहले खेत को सुखाएं' }
          ]
        },
        wheat: {
          name: 'गेहूं',
          stages: [
            { name: 'बुवाई', action: '5-6 सेमी गहराई पर बीज बोएं, बीज उपचार का उपयोग करें' },
            { name: 'अंकुरण', action: 'आवश्यकता पड़ने पर हल्की सिंचाई करें, खरपतवार हटाएं' },
            { name: 'कुसंह', action: 'पहली नाइट्रोजन खुराक लगाएं, खेतों की सिंचाई करें' },
            { name: 'तना लम्बाई', action: 'दूसरी नाइट्रोजन खुराक लगाएं, जंग के लिए निगरानी करें' },
            { name: 'बालियां', action: 'पर्याप्त नमी सुनिश्चित करें, एफिड्स के लिए देखें' },
            { name: 'दाना भरना', action: 'हल्की सिंचाई, आवश्यकता पड़ने पर पोटाश लगाएं' },
            { name: 'परिपक्वता', action: 'सिंचाई बंद करें, कटाई के लिए तैयार करें' }
          ]
        },
        maize: {
          name: 'मक्का',
          stages: [
            { name: 'बुवाई', action: 'बीज 5 सेमी गहरे लगाएं, 60 सेमी पंक्ति की दूरी बनाए रखें' },
            { name: 'अंकुरण', action: 'नमी सुनिश्चित करें, पक्षियों से बचाएं' },
            { name: 'वनस्पति', action: 'नाइट्रोजन उर्वरक लगाएं, नियमित सिंचाई करें' },
            { name: 'टैसलिंग', action: 'पानी की उपलब्धता सुनिश्चित करें, पोटाश लगाएं' },
            { name: 'सिल्किंग', action: 'महत्वपूर्ण जल अवधि, कीटों की निगरानी करें' },
            { name: 'दाना भरना', action: 'नमी बनाए रखें, फॉल आर्मीवर्म से सावधान रहें' },
            { name: 'परिपक्वता', action: 'पानी कम करें, जब दाने सख्त हों तो कटाई करें' }
          ]
        },
        cotton: {
          name: 'कपास',
          stages: [
            { name: 'बुवाई', action: 'बीजों का उपचार करें, 5 सेमी गहराई पर बोएं' },
            { name: 'अंकुरण', action: 'पौधों की दूरी बनाए रखने के लिए पतला करें' },
            { name: 'वनस्पति', action: 'नाइट्रोजन लगाएं, खरपतवार नियंत्रित करें' },
            { name: 'स्क्वायरिंग', action: 'बॉलवर्म की निगरानी करें, उर्वरक लगाएं' },
            { name: 'फूल आना', action: 'पानी सुनिश्चित करें, कीट हमले के लिए देखें' },
            { name: 'बोल विकास', action: 'नियमित सिंचाई, पोटाश लगाएं' },
            { name: 'बोल खुलना', action: 'पानी कम करें, जब बोल खुलें तो तुड़ाई शुरू करें' }
          ]
        },
        sugarcane: {
          name: 'गन्ना',
          stages: [
            { name: 'रोपण', action: 'स्वस्थ सेट्स का उपयोग करें, खांचों में रोपें' },
            { name: 'अंकुरण', action: 'हल्की सिंचाई लगाएं, खरपतवार हटाएं' },
            { name: 'कुसंह', action: 'नाइट्रोजन उर्वरक लगाएं, मिट्टी चढ़ाएं' },
            { name: 'भव्य वृद्धि', action: 'नियमित सिंचाई, एनपीके उर्वरक लगाएं' },
            { name: 'परिपक्वता', action: 'पानी कम करें, कटाई के लिए तैयार करें' }
          ]
        },
        tomato: {
          name: 'टमाटर',
          stages: [
            { name: 'नर्सरी', action: 'नर्सरी बेड में पौधे तैयार करें' },
            { name: 'प्रतिरोपण', action: 'पौधों का प्रत्यारोपण करें, तुरंत पानी दें' },
            { name: 'वनस्पति', action: 'नाइट्रोजन लगाएं, खंभों से पौधों को सहारा दें' },
            { name: 'फूल आना', action: 'परागण सुनिश्चित करें, संतुलित उर्वरक लगाएं' },
            { name: 'फल लगना', action: 'नियमित पानी, साइड शूट हटाएं' },
            { name: 'फल विकास', action: 'पोटाश लगाएं, झुलसा रोग के लिए देखें' },
            { name: 'कटाई', action: 'पूरी तरह रंगीन होने पर फल तोड़ें' }
          ]
        },
        potato: {
          name: 'आलू',
          stages: [
            { name: 'रोपण', action: 'बीज कंद 7-10 सेमी गहरे लगाएं' },
            { name: 'उद्भव', action: 'हल्की सिंचाई, खरपतवार हटाएं' },
            { name: 'वनस्पति', action: 'मिट्टी चढ़ाना, नाइट्रोजन उर्वरक लगाएं' },
            { name: 'कंद आरंभ', action: 'नमी सुनिश्चित करें, पोटाश लगाएं' },
            { name: 'कंद फूलना', action: 'नियमित सिंचाई, झुलसा रोग की निगरानी करें' },
            { name: 'परिपक्वता', action: 'कटाई से 10 दिन पहले सिंचाई बंद करें' }
          ]
        },
        onion: {
          name: 'प्याज',
          stages: [
            { name: 'नर्सरी', action: 'ऊंचे बेड में पौधे तैयार करें' },
            { name: 'प्रतिरोपण', action: 'पौधों को 10 सेमी की दूरी पर प्रत्यारोपित करें' },
            { name: 'वनस्पति', action: 'नाइट्रोजन लगाएं, हल्की सिंचाई' },
            { name: 'बल्ब निर्माण', action: 'नाइट्रोजन कम करें, पोटाश बढ़ाएं' },
            { name: 'बल्ब विकास', action: 'नमी बनाए रखें, खरपतवार हटाएं' },
            { name: 'परिपक्वता', action: 'जब टॉप गिरें तो पानी बंद करें' }
          ]
        },
        soybean: {
          name: 'सोयाबीन',
          stages: [
            { name: 'बुवाई', action: '3-4 सेमी गहरे बीज बोएं, राइजोबियम से उपचार करें' },
            { name: 'अंकुरण', action: 'आवश्यकता पड़ने पर हल्की सिंचाई' },
            { name: 'वनस्पति', action: 'फास्फोरस लगाएं, खरपतवार नियंत्रित करें' },
            { name: 'फूल आना', action: 'पर्याप्त नमी सुनिश्चित करें' },
            { name: 'फली निर्माण', action: 'महत्वपूर्ण जल अवधि, पोटाश लगाएं' },
            { name: 'बीज भरना', action: 'नमी बनाए रखें, कीटों से सावधान रहें' },
            { name: 'परिपक्वता', action: 'पत्तियां पीली हो जाती हैं, फलियां कटाई के लिए तैयार' }
          ]
        },
        mustard: {
          name: 'सरसों',
          stages: [
            { name: 'बुवाई', action: '2-3 सेमी गहरे बीज बोएं' },
            { name: 'अंकुरण', action: 'पौधों को पतला करें, हल्की सिंचाई लगाएं' },
            { name: 'वनस्पति', action: 'नाइट्रोजन उर्वरक लगाएं, खरपतवार नियंत्रण' },
            { name: 'फूल आना', action: 'पानी की उपलब्धता सुनिश्चित करें' },
            { name: 'फली निर्माण', action: 'सल्फर उर्वरक लगाएं, सिंचाई करें' },
            { name: 'परिपक्वता', action: 'जब फलियां भूरी हों तो कटाई करें' }
          ]
        }
      }
    },
    seasons: {
      kharif: 'खरीफ (मानसून)',
      rabi: 'रबी (सर्दी)',
      zaid: 'जायद (गर्मी)'
    },
    about: {
      title: 'हमारी कृषि पहल के बारे में',
      mission: 'हमारा मिशन किसानों को आधुनिक, टिकाऊ और डेटा-संचालित कृषि प्रथाओं के साथ सशक्त बनाना है। नवाचार और प्रौद्योगिकी को मिलाकर, हम किसानों को उत्पादकता बढ़ाने, पर्यावरणीय प्रभाव कम करने और भविष्य की पीढ़ियों के लिए खाद्य सुरक्षा सुनिश्चित करने में मदद करते हैं।',
      focus: 'हम फसल की उपज को अनुकूलित करने और पर्यावरण के अनुकूल खेती के तरीकों को बढ़ावा देने के लिए ड्रोन, IoT सेंसर और AI-आधारित विश्लेषण जैसे स्मार्ट टूल को एकीकृत करने पर ध्यान केंद्रित करते हैं।',
      platform: 'किसान उदय एक व्यापक मंच है जो पारंपरिक खेती और आधुनिक तकनीक के बीच की खाई को पाटने के लिए डिज़ाइन किया गया है। हम किसानों को सूचित निर्णय लेने में मदद करने के लिए मौसम के पैटर्न, मिट्टी के स्वास्थ्य और बाजार की कीमतों पर रीयल-टाइम डेटा प्रदान करते हैं। हमारा मंच कृषि विशेषज्ञों, वित्तीय सेवाओं और सरकारी योजनाओं के नेटवर्क तक पहुंच भी प्रदान करता है।',
      features: 'हमारी प्रमुख विशेषताओं में व्यक्तिगत फसल सलाह, छवि पहचान का उपयोग करके कीट और रोग का पता लगाना, और सीधे उपज खरीदने और बेचने के लिए एक बाज़ार शामिल है, जो बिचौलियों को समाप्त करता है और किसानों के लिए उचित मूल्य सुनिश्चित करता है। हम एक समृद्ध भारत के लिए एक लचीला और लाभदायक कृषि पारिस्थितिकी तंत्र बनाने के लिए प्रतिबद्ध हैं।',
      learnMore: 'और जानें',
      showLess: 'कम दिखाएं'
    },
    slider: {
      welcome: 'किसान उदय में आपका स्वागत है',
      subtitle: 'प्रौद्योगिकी के साथ किसानों को सशक्त बनाना',
      description: 'आधुनिक खेती के उपकरण और विशेषज्ञ मार्गदर्शन के साथ शुरुआत करें'
    },
    footer: {
      title: 'किसान उदय',
      description: 'किसानों को नवीनतम तकनीक और जानकारी के साथ सशक्त बनाना ताकि उनकी आजीविका में सुधार हो।',
      quickLinks: 'त्वरित लिंक',
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      schemes: 'योजनाएं',
      contactUs: 'हमसे संपर्क करें',
      email: 'ईमेल: support@kisaanuday.com',
      phone: 'फोन: +91 123 456 7890',
      address: 'पता: 123 कृषि तकनीक पार्क, नई दिल्ली, भारत',
      followUs: 'हमें फॉलो करें',
      copyright: '© 2025 किसान उदय। सर्वाधिकार सुरक्षित।'
    },
    login: {
      welcome: 'स्वागत है',
      subtitle: 'हमारी सेवाओं का अन्वेषण जारी रखने के लिए लॉगिन करें',
      emailPlaceholder: 'ईमेल पता',
      passwordPlaceholder: 'पासवर्ड',
      loginButton: 'लॉगिन',
      or: 'या',
      signInGoogle: 'Google से साइन इन करें',
      signInPhone: 'फोन से साइन इन करें',
      noAccount: 'खाता नहीं है?',
      signUpHere: 'यहां साइन अप करें',
      successMessage: 'ईमेल के साथ सफलतापूर्वक लॉग इन किया:'
    },
    marketInfo: {
      title: 'लाइव बाजार मूल्य',
      subtitle: 'भारत भर में रीयल-टाइम कृषि वस्तु मूल्य',
      backToHome: 'होम पर वापस जाएं',
      searchPlaceholder: 'फसलों या बाजारों की खोज करें...',
      featuredCrops: 'विशेष फसलें',
      allCropPrices: 'सभी फसल मूल्य',
      cropName: 'फसल का नाम',
      market: 'बाजार',
      price: 'मूल्य (₹)',
      unit: 'इकाई',
      change: 'परिवर्तन',
      loading: 'लोड हो रहा है...',
      noCropsFound: 'कोई फसल नहीं मिली',
      noteTitle: 'नोट:',
      noteText: 'भारत भर के विभिन्न कृषि बाजारों से मूल्य नियमित रूप से अपडेट किए जाते हैं। मूल्य गुणवत्ता, मात्रा और स्थान के आधार पर भिन्न हो सकते हैं।',
      perQuintal: 'प्रति क्विंटल'
    },
    cropAdvisoryPage: {
      title: 'फसल सलाहकार',
      intro: 'हमारी AI-संचालित फसल सलाहकार सेवा आपकी उपज और लाभप्रदता को अधिकतम करने में मदद करने के लिए व्यक्तिगत सिफारिशें प्रदान करती है।',
      howWeHelp: 'हम आपकी कैसे मदद करते हैं',
      description: 'हम आपकी मिट्टी के प्रकार, स्थानीय मौसम की स्थिति और बाजार की मांग सहित विभिन्न कारकों का विश्लेषण करते हैं, ताकि निम्नलिखित पर सर्वोत्तम सलाह दी जा सके:',
      cropSelection: 'फसल चयन',
      cropSelectionDesc: 'मिट्टी विश्लेषण और बाजार के रुझानों के आधार पर आपके खेत के लिए सबसे उपयुक्त फसलों का चयन करना।',
      sowingPlanting: 'बुवाई और रोपण',
      sowingPlantingDesc: 'सर्वोत्तम अंकुरण सुनिश्चित करने के लिए बुवाई और रोपण के लिए इष्टतम समय और तकनीक।',
      fertilization: 'उर्वरकीकरण',
      fertilizationDesc: 'यह सुनिश्चित करने के लिए अनुकूलित उर्वरक योजनाएं कि आपकी फसलों को सही समय पर सही पोषक तत्व मिलें।',
      pestManagement: 'कीट और रोग प्रबंधन',
      pestManagementDesc: 'कीटों और बीमारियों का शीघ्र पता लगाना और प्रभावी उपचार रणनीतियाँ।',
      harvesting: 'कटाई',
      harvestingDesc: 'उपज की अधिकतम गुणवत्ता और मात्रा सुनिश्चित करने के लिए कटाई की सर्वोत्तम प्रथाएं।',
      marketIntelligence: 'बाजार खुफिया',
      marketIntelligenceDesc: 'रीयल-टाइम बाजार अंतर्दृष्टि जो आपको सर्वोत्तम मूल्य पर अपनी उपज बेचने में मदद करती है।',
      ourGoal: 'हमारा लक्ष्य',
      goalDesc: 'हमारा लक्ष्य आपको डेटा और अंतर्दृष्टि के साथ सशक्त बनाना है जो आपको सूचित निर्णय लेने और सफल फसल प्राप्त करने के लिए आवश्यक है। हमारे विशेषज्ञ मार्गदर्शन के साथ, आप लागत और पर्यावरणीय प्रभाव को कम करते हुए उत्पादकता बढ़ा सकते हैं।'
    },
    farmMechanizationPage: {
      title: 'कृषि यंत्रीकरण',
      intro: 'दक्षता बढ़ाने और श्रम लागत कम करने के लिए आधुनिक कृषि उपकरण और मशीनरी तक पहुंच प्राप्त करें।',
      availableEquipment: 'उपलब्ध उपकरण',
      tractors: 'ट्रैक्टर',
      tractorsDesc: 'विभिन्न खेत आकारों के लिए विभिन्न HP विकल्पों के साथ नवीनतम मॉडल।',
      harvesters: 'हार्वेस्टर',
      harvestersDesc: 'विभिन्न फसलों के लिए कुशल कटाई मशीनें।',
      seeders: 'सीडर और प्लांटर',
      seedersDesc: 'इष्टतम रोपण के लिए सटीक बीजारोपण उपकरण।',
      sprayers: 'स्प्रेयर',
      sprayersDesc: 'प्रभावी कीट और रोग प्रबंधन के लिए आधुनिक छिड़काव उपकरण।',
      tillers: 'टिलर और कल्टीवेटर',
      tillersDesc: 'बेहतर फसल स्थापना के लिए मिट्टी की तैयारी उपकरण।',
      irrigation: 'सिंचाई प्रणाली',
      irrigationDesc: 'पानी की दक्षता के लिए आधुनिक सिंचाई समाधान।',
      benefits: 'लाभ',
      benefitsDesc: 'हमारी यंत्रीकरण सेवाएं आपको समय बचाने, श्रम लागत कम करने और समग्र खेत उत्पादकता में सुधार करने में मदद करती हैं।'
    },
    organicFarmingPage: {
      title: 'जैविक खेती सहायता',
      intro: 'हमारे विशेषज्ञ मार्गदर्शन के साथ टिकाऊ और लाभदायक जैविक खेती में संक्रमण करें।',
      certification: 'जैविक प्रमाणन',
      certificationDesc: 'जैविक प्रमाणन प्रक्रिया के लिए पूर्ण समर्थन।',
      inputs: 'जैविक इनपुट',
      inputsDesc: 'गुणवत्ता जैविक उर्वरक, कीटनाशक और जैव-इनपुट।',
      training: 'प्रशिक्षण कार्यक्रम',
      trainingDesc: 'जैविक खेती प्रथाओं पर व्यापक प्रशिक्षण।',
      marketing: 'बाजार पहुंच',
      marketingDesc: 'प्रीमियम जैविक उपज खरीदारों से जुड़ें।',
      soilHealth: 'मिट्टी स्वास्थ्य प्रबंधन',
      soilHealthDesc: 'मिट्टी की उर्वरता में सुधार और बनाए रखने के लिए प्राकृतिक तरीके।',
      pestControl: 'प्राकृतिक कीट नियंत्रण',
      pestControlDesc: 'जैविक और प्राकृतिक कीट प्रबंधन समाधान।',
      benefits: 'लाभ',
      benefitsDesc: 'जैविक खेती बेहतर मूल्य, स्वस्थ मिट्टी और टिकाऊ दीर्घकालिक लाभप्रदता प्रदान करती है।'
    },
    soilTestingPage: {
      title: 'मिट्टी परीक्षण और विश्लेषण',
      intro: 'अपनी फसल पोषण को अनुकूलित करने और उपज में सुधार करने के लिए विस्तृत मिट्टी विश्लेषण प्राप्त करें।',
      services: 'हमारी सेवाएं',
      comprehensive: 'व्यापक मिट्टी विश्लेषण',
      comprehensiveDesc: 'पूर्ण पोषक तत्व प्रोफ़ाइल और pH विश्लेषण।',
      fertility: 'उर्वरता मूल्यांकन',
      fertilityDesc: 'मिट्टी की उर्वरता स्थिति का विस्तृत मूल्यांकन।',
      micronutrients: 'सूक्ष्म पोषक तत्व परीक्षण',
      micronutrientsDesc: 'आवश्यक सूक्ष्म पोषक तत्व स्तरों का विश्लेषण।',
      recommendations: 'उर्वरक सिफारिशें',
      recommendationsDesc: 'अनुकूलित उर्वरक और संशोधन सुझाव।',
      periodic: 'आवधिक निगरानी',
      periodicDesc: 'मिट्टी स्वास्थ्य सुधार को ट्रैक करने के लिए नियमित परीक्षण।',
      reports: 'डिजिटल रिपोर्ट',
      reportsDesc: 'समझने में आसान डिजिटल विश्लेषण रिपोर्ट।',
      benefits: 'लाभ',
      benefitsDesc: 'मिट्टी परीक्षण उर्वरक उपयोग को अनुकूलित करने, फसल उपज में सुधार करने और इनपुट लागत कम करने में मदद करता है।'
    },
    marketLinkagesPage: {
      title: 'बाजार संपर्क',
      intro: 'सीधे खरीदारों से जुड़ें और अपनी उपज के लिए उचित मूल्य प्राप्त करें।',
      features: 'प्रमुख विशेषताएं',
      directSales: 'खरीदार को सीधे',
      directSalesDesc: 'बिचौलियों के बिना सीधे खरीदारों को बेचें।',
      pricing: 'उचित मूल्य निर्धारण',
      pricingDesc: 'वर्तमान बाजार दरों के आधार पर पारदर्शी मूल्य निर्धारण।',
      quality: 'गुणवत्ता आश्वासन',
      qualityDesc: 'गुणवत्ता जांच प्रीमियम मूल्य सुनिश्चित करती है।',
      payments: 'त्वरित भुगतान',
      paymentsDesc: 'तेज और सुरक्षित भुगतान प्रसंस्करण।',
      logistics: 'रसद सहायता',
      logisticsDesc: 'परिवहन और वितरण में सहायता।',
      contracts: 'अनुबंध खेती',
      contractsDesc: 'अग्रिम मूल्य समझौतों के साथ सुरक्षित अनुबंध।',
      benefits: 'लाभ',
      benefitsDesc: 'प्रत्यक्ष बाजार पहुंच बेहतर मूल्य, कम बर्बादी और आपकी उपज के लिए गारंटीकृत बिक्री सुनिश्चित करती है।'
    },
    farmerHelplinePage: {
      title: '24/7 किसान हेल्पलाइन',
      intro: 'अपने सभी कृषि प्रश्नों पर कभी भी, कहीं भी तत्काल विशेषज्ञ सलाह प्राप्त करें।',
      services: 'उपलब्ध सेवाएं',
      cropAdvice: 'फसल सलाहकार',
      cropAdviceDesc: 'फसल प्रबंधन पर विशेषज्ञ मार्गदर्शन।',
      pestIssues: 'कीट और रोग',
      pestIssuesDesc: 'कीट और रोग समस्याओं के लिए तत्काल सहायता।',
      weather: 'मौसम सलाहकार',
      weatherDesc: 'मौसम-आधारित कृषि सिफारिशें।',
      schemes: 'सरकारी योजनाएं',
      schemesDesc: 'उपलब्ध योजनाओं और सब्सिडी की जानकारी।',
      technical: 'तकनीकी सहायता',
      technicalDesc: 'कृषि उपकरण और तकनीक में मदद।',
      market: 'बाजार जानकारी',
      marketDesc: 'वर्तमान बाजार मूल्य और रुझान।',
      contactInfo: 'संपर्क जानकारी',
      phoneNumber: 'फोन: +91 123 456 7890',
      email: 'ईमेल: helpline@kisaanuday.com',
      availability: 'कई भाषाओं में 24/7 उपलब्ध'
    },
    financialServicesPage: {
      title: 'वित्तीय सेवाएं',
      intro: 'किसानों के लिए विशेष रूप से डिज़ाइन किए गए व्यापक वित्तीय समाधानों तक पहुंच प्राप्त करें।',
      services: 'हमारी सेवाएं',
      cropInsurance: 'फसल बीमा',
      cropInsuranceDesc: 'प्राकृतिक आपदाओं से अपनी फसलों की रक्षा करें।',
      farmLoans: 'कृषि ऋण',
      farmLoansDesc: 'उपकरण, बीज और इनपुट के लिए आसान ऋण।',
      subsidies: 'सरकारी सब्सिडी',
      subsidiesDesc: 'सब्सिडी आवेदनों के लिए पूर्ण सहायता।',
      kcc: 'किसान क्रेडिट कार्ड',
      kccDesc: 'सरल KCC आवेदन प्रक्रिया।',
      inputCredit: 'इनपुट क्रेडिट',
      inputCreditDesc: 'बीज, उर्वरक और कीटनाशकों के लिए क्रेडिट सुविधाएं।',
      advisory: 'वित्तीय सलाहकार',
      advisoryDesc: 'कृषि वित्तीय योजना पर विशेषज्ञ मार्गदर्शन।',
      benefits: 'लाभ',
      benefitsDesc: 'हमारी वित्तीय सेवाएं सुरक्षा, क्रेडिट तक आसान पहुंच प्रदान करती हैं और आपके कृषि व्यवसाय को बढ़ाने में मदद करती हैं।'
    },
    weatherForecastPage: {
      title: 'मौसम पूर्वानुमान',
      intro: 'अपनी कृषि गतिविधियों की योजना बनाने के लिए सटीक और स्थानीयकृत मौसम पूर्वानुमान प्राप्त करें।',
      features: 'विशेषताएं',
      daily: 'दैनिक पूर्वानुमान',
      dailyDesc: 'विस्तृत दैनिक मौसम भविष्यवाणियाँ।',
      weekly: 'साप्ताहिक दृष्टिकोण',
      weeklyDesc: '7-दिवसीय अग्रिम मौसम जानकारी।',
      rainfall: 'वर्षा अलर्ट',
      rainfallDesc: 'अपेक्षित वर्षा के लिए समय पर अलर्ट।',
      temperature: 'तापमान रुझान',
      temperatureDesc: 'न्यूनतम/अधिकतम तापमान पूर्वानुमान।',
      advisory: 'कृषि सलाहकार',
      advisoryDesc: 'मौसम-आधारित फसल प्रबंधन सुझाव।',
      notifications: 'SMS/ऐप अलर्ट',
      notificationsDesc: 'आपके फोन पर तत्काल मौसम अलर्ट।',
      benefits: 'लाभ',
      benefitsDesc: 'सटीक मौसम पूर्वानुमान आपको सिंचाई, छिड़काव और कटाई गतिविधियों की प्रभावी ढंग से योजना बनाने में मदद करता है।'
    }
  },
 
  }
;

export default translations;

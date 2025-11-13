// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaArrowLeft, FaSearch, FaCloudSun, FaTemperatureHigh, FaTint, FaWind, FaSun, FaCloudRain, FaCloud, FaBolt, FaSnowflake } from 'react-icons/fa';
// import { useLanguage } from '../context/LanguageContext';
// import './WeatherForecast.css';

// const WeatherForecast = () => {
//   const navigate = useNavigate();
//   const { t } = useLanguage();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//   const fetchWeatherData = async (location) => {
//     try {
//       setLoading(true);
//       setError(null);

//       console.log(location);
      
//       // Fetch current weather
//       const currentResponse = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
//       );

//       if (!currentResponse.ok) {
//         throw new Error('Location not found');
//       }


//       const currentData = await currentResponse.json();


//       console.log(currentData);
      

//       // Fetch 5-day forecast
//       const forecastResponse = await fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&appid=${API_KEY}`
//       );

//       const forecastData = await forecastResponse.json();

//       // Process the data
//       const weatherData = {
//         location: currentData.name,
//         current: {
//           temp: Math.round(currentData.main.temp),
//           feelsLike: Math.round(currentData.main.feels_like),
//           condition: currentData.weather[0].main,
//           description: currentData.weather[0].description,
//           humidity: currentData.main.humidity,
//           windSpeed: Math.round(currentData.wind.speed * 3.6), // Convert m/s to km/h
//           pressure: currentData.main.pressure,
//           visibility: Math.round(currentData.visibility / 1000), // Convert to km
//           uvIndex: 5, // OpenWeather free tier doesn't provide UV index
//           sunrise: new Date(currentData.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
//           sunset: new Date(currentData.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
//         },
//         forecast: processForecast(forecastData.list),
//         hourly: processHourly(forecastData.list)
//       };

//       setSelectedLocation(weatherData);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const processForecast = (forecastList) => {
//     const dailyData = {};
    
//     forecastList.forEach(item => {
//       const date = new Date(item.dt * 1000);
//       const dateKey = date.toDateString();
      
//       if (!dailyData[dateKey]) {
//         dailyData[dateKey] = {
//           date: date,
//           temps: [],
//           conditions: [],
//           rainChances: []
//         };
//       }
      
//       dailyData[dateKey].temps.push(item.main.temp);
//       dailyData[dateKey].conditions.push(item.weather[0].main);
//       dailyData[dateKey].rainChances.push(item.pop * 100);
//     });

//     return Object.values(dailyData).slice(0, 7).map(day => ({
//       day: day.date.toLocaleDateString('en-US', { weekday: 'long' }),
//       date: day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
//       high: Math.round(Math.max(...day.temps)),
//       low: Math.round(Math.min(...day.temps)),
//       condition: day.conditions[0],
//       rainChance: Math.round(Math.max(...day.rainChances))
//     }));
//   };

//   const processHourly = (forecastList) => {
//     return forecastList.slice(0, 24).map(item => {
//       const date = new Date(item.dt * 1000);
//       return {
//         time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
//         temp: Math.round(item.main.temp),
//         condition: item.weather[0].main
//       };
//     });
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       fetchWeatherData(searchQuery);
//     }
//   };

//   const getWeatherIcon = (condition) => {
//     switch (condition.toLowerCase()) {
//       case 'clear':
//       case 'sunny':
//         return <FaSun className="weather-icon sunny" />;
//       case 'clouds':
//       case 'cloudy':
//         return <FaCloud className="weather-icon cloudy" />;
//       case 'rain':
//       case 'rainy':
//       case 'drizzle':
//         return <FaCloudRain className="weather-icon rainy" />;
//       case 'partly cloudy':
//         return <FaCloudSun className="weather-icon partly-cloudy" />;
//       case 'thunderstorm':
//         return <FaBolt className="weather-icon thunderstorm" />;
//       case 'snow':
//         return <FaSnowflake className="weather-icon snow" />;
//       default:
//         return <FaCloudSun className="weather-icon" />;
//     }
//   };

//   const popularLocations = [
//     'New Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai',
//     'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
//     'Punjab', 'Haryana', 'Uttar Pradesh', 'Maharashtra', 'Karnataka'
//   ];

//   return (
//     <div className="weather-page">
//       <div className="container py-5">
//         <button 
//           className="back-button mb-4"
//           onClick={() => navigate('/')}
//         >
//           <FaArrowLeft /> {t('services.backToServices')}
//         </button>

//         <div className="text-center mb-5">
//           <h1 className="weather-page-title mb-3">
//             <FaCloudSun className="me-2" />
//             {t('weatherForecastPage.title')}
//           </h1>
//           <p className="weather-page-intro">
//             {t('weatherForecastPage.intro')}
//           </p>
//         </div>

//         {/* Search Section */}
//         <div className="search-section mb-5">
//           <form onSubmit={handleSearch} className="search-form">
//             <div className="search-input-container">
//               <FaSearch className="search-icon" />
//               <input
//                 type="text"
//                 className="form-control weather-search-input"
//                 placeholder={t('weatherForecastPage.intro')}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button type="submit" className="btn search-btn" disabled={loading}>
//                 {loading ? t('marketInfo.loading') : 'Search'}
//               </button>
//             </div>
//           </form>

//           {error && (
//             <div className="alert alert-danger mt-3">
//               {error === 'Location not found' ? 'Location not found. Please try another city.' : error}
//             </div>
//           )}

//           {/* Popular Locations */}
//           <div className="popular-locations mt-4">
//             <p className="text-muted mb-3">Popular Locations:</p>
//             <div className="location-tags">
//               {popularLocations.map((location, idx) => (
//                 <button
//                   key={idx}
//                   className="location-tag"
//                   onClick={() => {
//                     setSearchQuery(location);
//                     fetchWeatherData(location);
//                   }}
//                 >
//                   {location}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Weather Display */}
//         {selectedLocation ? (
//           <div className="weather-content">
//             {/* Current Weather */}
//             <div className="current-weather-card mb-4">
//               <div className="row">
//                 <div className="col-md-6">
//                   <h2 className="location-name">{selectedLocation.location}</h2>
//                   <p className="current-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  
//                   <div className="current-temp-section">
//                     {getWeatherIcon(selectedLocation.current.condition)}
//                     <div className="temp-display">
//                       <span className="current-temp">{selectedLocation.current.temp}°C</span>
//                       <span className="condition-text">{selectedLocation.current.condition}</span>
//                     </div>
//                   </div>
                  
//                   <p className="feels-like">Feels like {selectedLocation.current.feelsLike}°C</p>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="weather-details-grid">
//                     <div className="weather-detail-item">
//                       <FaTint className="detail-icon" />
//                       <div className="detail-info">
//                         <span className="detail-label">Humidity</span>
//                         <span className="detail-value">{selectedLocation.current.humidity}%</span>
//                       </div>
//                     </div>
//                     <div className="weather-detail-item">
//                       <FaWind className="detail-icon" />
//                       <div className="detail-info">
//                         <span className="detail-label">Wind Speed</span>
//                         <span className="detail-value">{selectedLocation.current.windSpeed} km/h</span>
//                       </div>
//                     </div>
//                     <div className="weather-detail-item">
//                       <FaTemperatureHigh className="detail-icon" />
//                       <div className="detail-info">
//                         <span className="detail-label">Pressure</span>
//                         <span className="detail-value">{selectedLocation.current.pressure} mb</span>
//                       </div>
//                     </div>
//                     <div className="weather-detail-item">
//                       <FaSun className="detail-icon" />
//                       <div className="detail-info">
//                         <span className="detail-label">UV Index</span>
//                         <span className="detail-value">{selectedLocation.current.uvIndex}</span>
//                       </div>
//                     </div>
//                     <div className="weather-detail-item">
//                       <FaCloudSun className="detail-icon" />
//                       <div className="detail-info">
//                         <span className="detail-label">Visibility</span>
//                         <span className="detail-value">{selectedLocation.current.visibility} km</span>
//                       </div>
//                     </div>
//                     <div className="weather-detail-item">
//                       <FaSun className="detail-icon" />
//                       <div className="detail-info">
//                         <span className="detail-label">Sunrise/Sunset</span>
//                         <span className="detail-value">{selectedLocation.current.sunrise} / {selectedLocation.current.sunset}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 7-Day Forecast */}
//             <div className="forecast-section mb-4">
//               <h3 className="section-title">7-Day Forecast</h3>
//               <div className="forecast-grid">
//                 {selectedLocation.forecast.map((day, idx) => (
//                   <div key={idx} className="forecast-card">
//                     <div className="forecast-day">{day.day}</div>
//                     <div className="forecast-date">{day.date}</div>
//                     {getWeatherIcon(day.condition)}
//                     <div className="forecast-temps">
//                       <span className="temp-high">{day.high}°</span>
//                       <span className="temp-divider">/</span>
//                       <span className="temp-low">{day.low}°</span>
//                     </div>
//                     <div className="forecast-condition">{day.condition}</div>
//                     <div className="rain-chance">
//                       <FaTint size={12} /> {day.rainChance}%
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Hourly Forecast */}
//             <div className="hourly-section">
//               <h3 className="section-title">24-Hour Forecast</h3>
//               <div className="hourly-scroll">
//                 {selectedLocation.hourly.map((hour, idx) => (
//                   <div key={idx} className="hourly-card">
//                     <div className="hourly-time">{hour.time}</div>
//                     {getWeatherIcon(hour.condition)}
//                     <div className="hourly-temp">{hour.temp}°C</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Agricultural Advisory */}
//             <div className="ag-advisory mt-4">
//               <h3 className="section-title">Agricultural Advisory</h3>
//               <div className="advisory-grid">
//                 <div className="advisory-card">
//                   <h5>Irrigation Recommendation</h5>
//                   <p>Based on current weather conditions and forecast, {selectedLocation.current.humidity > 70 ? 'reduce' : 'moderate'} irrigation is recommended for the next 3 days.</p>
//                 </div>
//                 <div className="advisory-card">
//                   <h5>Pest Control Alert</h5>
//                   <p>{selectedLocation.current.humidity > 70 ? 'High humidity levels may increase pest activity. Consider preventive measures for common pests.' : 'Weather conditions are favorable. Continue regular monitoring.'}</p>
//                 </div>
//                 <div className="advisory-card">
//                   <h5>Harvesting Conditions</h5>
//                   <p>Weather conditions are {selectedLocation.forecast[0].rainChance > 50 ? 'not ideal' : 'favorable'} for harvesting activities over the next 48 hours.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="no-location-selected">
//             <FaCloudSun size={80} className="mb-4 text-muted" />
//             <h4>{t('weatherForecastPage.intro')}</h4>
//             <p className="text-muted">{t('weatherForecastPage.intro')}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WeatherForecast;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaSearch, FaCloudSun, FaTemperatureHigh, 
  FaTint, FaWind, FaSun, FaCloudRain, FaCloud, 
  FaBolt, FaSnowflake 
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './WeatherForecast.css';

const WeatherForecast = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchWeatherData = async (location) => {
    try {
      setLoading(true);
      setError(null);

      // Fetch current weather with metric units (Celsius)
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );

      if (!currentResponse.ok) {
        const errorData = await currentResponse.json().catch(() => ({}));
        throw new Error(errorData.message || 'Location not found');
      }

      const currentData = await currentResponse.json();

      // Fetch 5-day forecast with metric units
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(location)}&appid=${API_KEY}&units=metric`
      );

      if (!forecastResponse.ok) {
        throw new Error('Failed to fetch forecast');
      }

      const forecastData = await forecastResponse.json();

      // Process the data
      const weatherData = {
        location: currentData.name,
        country: currentData.sys.country,
        current: {
          temp: Math.round(currentData.main.temp),
          feelsLike: Math.round(currentData.main.feels_like),
          condition: currentData.weather[0].main,
          description: currentData.weather[0].description,
          humidity: currentData.main.humidity,
          windSpeed: Math.round(currentData.wind.speed * 3.6), // m/s → km/h
          pressure: currentData.main.pressure,
          visibility: Math.round(currentData.visibility / 1000), // meters → km
          uvIndex: 5, // Not in free tier
          sunrise: new Date(currentData.sys.sunrise * 1000).toLocaleTimeString('en-US', { 
            hour: '2-digit', minute: '2-digit' 
          }),
          sunset: new Date(currentData.sys.sunset * 1000).toLocaleTimeString('en-US', { 
            hour: '2-digit', minute: '2-digit' 
          })
        },
        forecast: processForecast(forecastData.list),
        hourly: processHourly(forecastData.list)
      };

      setSelectedLocation(weatherData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const processForecast = (forecastList) => {
    const dailyData = {};

    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toDateString();

      if (!dailyData[dateKey]) {
        dailyData[dateKey] = {
          date: date,
          temps: [],
          conditions: [],
          rainChances: []
        };
      }

      dailyData[dateKey].temps.push(item.main.temp);
      dailyData[dateKey].conditions.push(item.weather[0].main);
      if (item.pop) dailyData[dateKey].rainChances.push(item.pop * 100);
    });

    return Object.values(dailyData).slice(0, 7).map(day => ({
      day: day.date.toLocaleDateString('en-US', { weekday: 'long' }),
      date: day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      high: Math.round(Math.max(...day.temps)),
      low: Math.round(Math.min(...day.temps)),
      condition: mostFrequent(day.conditions),
      rainChance: day.rainChances.length > 0 ? Math.round(Math.max(...day.rainChances)) : 0
    }));
  };

  const processHourly = (forecastList) => {
    return forecastList.slice(0, 24).map(item => {
      const date = new Date(item.dt * 1000);
      return {
        time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        temp: Math.round(item.main.temp),
        condition: item.weather[0].main
      };
    });
  };

  // Helper: Get most frequent condition
  const mostFrequent = (arr) => {
    return arr.sort((a, b) => 
      arr.filter(v => v === a).length - arr.filter(v => v === b).length
    ).pop();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchWeatherData(searchQuery.trim());
    }
  };

  const getWeatherIcon = (condition) => {
    const cond = condition.toLowerCase();
    if (cond.includes('clear') || cond.includes('sun')) return <FaSun className="weather-icon sunny" />;
    if (cond.includes('cloud')) return <FaCloud className="weather-icon cloudy" />;
    if (cond.includes('rain') || cond.includes('drizzle')) return <FaCloudRain className="weather-icon rainy" />;
    if (cond.includes('thunder') || cond.includes('storm')) return <FaBolt className="weather-icon thunderstorm" />;
    if (cond.includes('snow')) return <FaSnowflake className="weather-icon snow" />;
    return <FaCloudSun className="weather-icon partly-cloudy" />;
  };

  const popularLocations = [
    'New Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai',
    'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Chandigarh', 'Amritsar', 'Patna', 'Bhopal', 'Ranchi'
  ];

  return (
    <div className="weather-page">
      <div className="container py-5">
        <button 
          className="back-button mb-4"
          onClick={() => navigate('/')}
        >
          <FaArrowLeft /> {t('services.backToServices')}
        </button>

        <div className="text-center mb-5">
          <h1 className="weather-page-title mb-3">
            <FaCloudSun className="me-2" />
            {t('weatherForecastPage.title')}
          </h1>
          <p className="weather-page-intro">
            {t('weatherForecastPage.intro')}
          </p>
        </div>

        {/* Search Section */}
        <div className="search-section mb-5">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="form-control weather-search-input"
                placeholder={t('weatherForecastPage.searchPlaceholder') || 'Search city...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn search-btn" disabled={loading}>
                {loading ? t('marketInfo.loading') : t('weatherForecastPage.search') || 'Search'}
              </button>
            </div>
          </form>

          {error && (
            <div className="alert alert-danger mt-3">
              {error.includes('not found') 
                ? 'Location not found. Try another city name.' 
                : error}
            </div>
          )}

          {/* Popular Locations */}
          <div className="popular-locations mt-4">
            <p className="text-muted mb-3">{t('weatherForecastPage.popular') || 'Popular Locations:'}</p>
            <div className="location-tags">
              {popularLocations.map((location, idx) => (
                <button
                  key={idx}
                  className="location-tag"
                  onClick={() => {
                    setSearchQuery(location);
                    fetchWeatherData(location);
                  }}
                  disabled={loading}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Weather Display */}
        {selectedLocation ? (
          <div className="weather-content">
            {/* Current Weather */}
            <div className="current-weather-card mb-4">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 className="location-name">
                    {selectedLocation.location}, {selectedLocation.country}
                  </h2>
                  <p className="current-date">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                    })}
                  </p>
                  
                  <div className="current-temp-section d-flex align-items-center">
                    {getWeatherIcon(selectedLocation.current.condition)}
                    <div className="temp-display ms-3">
                      <span className="current-temp">{selectedLocation.current.temp}°C</span>
                      <span className="condition-text d-block">
                        {selectedLocation.current.description}
                      </span>
                    </div>
                  </div>
                  
                  <p className="feels-like mt-2">
                    Feels like {selectedLocation.current.feelsLike}°C
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="weather-details-grid">
                    <div className="weather-detail-item">
                      <FaTint className="detail-icon" />
                      <div className="detail-info">
                        <span className="detail-label">Humidity</span>
                        <span className="detail-value">{selectedLocation.current.humidity}%</span>
                      </div>
                    </div>
                    <div className="weather-detail-item">
                      <FaWind className="detail-icon" />
                      <div className="detail-info">
                        <span className="detail-label">Wind</span>
                        <span className="detail-value">{selectedLocation.current.windSpeed} km/h</span>
                      </div>
                    </div>
                    <div className="weather-detail-item">
                      <FaTemperatureHigh className="detail-icon" />
                      <div className="detail-info">
                        <span className="detail-label">Pressure</span>
                        <span className="detail-value">{selectedLocation.current.pressure} hPa</span>
                      </div>
                    </div>
                    <div className="weather-detail-item">
                      <FaSun className="detail-icon" />
                      <div className="detail-info">
                        <span className="detail-label">UV Index</span>
                        <span className="detail-value">{selectedLocation.current.uvIndex}</span>
                      </div>
                    </div>
                    <div className="weather-detail-item">
                      <FaCloudSun className="detail-icon" />
                      <div className="detail-info">
                        <span className="detail-label">Visibility</span>
                        <span className="detail-value">{selectedLocation.current.visibility} km</span>
                      </div>
                    </div>
                    <div className="weather-detail-item">
                      <FaSun className="detail-icon" />
                      <div className="detail-info">
                        <span className="detail-label">Sunrise / Sunset</span>
                        <span className="detail-value">
                          {selectedLocation.current.sunrise} / {selectedLocation.current.sunset}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="forecast-section mb-4">
              <h3 className="section-title">7-Day Forecast</h3>
              <div className="forecast-grid">
                {selectedLocation.forecast.map((day, idx) => (
                  <div key={idx} className="forecast-card">
                    <div className="forecast-day">{day.day}</div>
                    <div className="forecast-date">{day.date}</div>
                    {getWeatherIcon(day.condition)}
                    <div className="forecast-temps">
                      <span className="temp-high">{day.high}°</span>
                      <span className="temp-divider">/</span>
                      <span className="temp-low">{day.low}°</span>
                    </div>
                    <div className="forecast-condition">{day.condition}</div>
                    <div className="rain-chance">
                      <FaTint size={12} /> {day.rainChance}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hourly Forecast */}
            <div className="hourly-section mb-4">
              <h3 className="section-title">24-Hour Forecast</h3>
              <div className="hourly-scroll">
                {selectedLocation.hourly.map((hour, idx) => (
                  <div key={idx} className="hourly-card">
                    <div className="hourly-time">{hour.time}</div>
                    {getWeatherIcon(hour.condition)}
                    <div className="hourly-temp">{hour.temp}°C</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agricultural Advisory */}
            <div className="ag-advisory">
              <h3 className="section-title">Agricultural Advisory</h3>
              <div className="advisory-grid">
                <div className="advisory-card">
                  <h5>Irrigation</h5>
                  <p>
                    {selectedLocation.current.humidity > 70 
                      ? 'High humidity — reduce irrigation for next 3 days.' 
                      : selectedLocation.current.humidity > 50
                      ? 'Moderate humidity — maintain regular schedule.'
                      : 'Low humidity — increase irrigation slightly.'
                    }
                  </p>
                </div>
                <div className="advisory-card">
                  <h5>Pest Alert</h5>
                  <p>
                    {selectedLocation.current.humidity > 70 
                      ? 'High humidity increases pest risk. Monitor crops closely.'
                      : 'Conditions are stable. Continue routine checks.'
                    }
                  </p>
                </div>
                <div className="advisory-card">
                  <h5>Harvesting</h5>
                  <p>
                    {selectedLocation.forecast[0]?.rainChance > 50 
                      ? 'Rain expected — delay harvesting if possible.'
                      : 'Clear weather — ideal for harvesting in next 48 hours.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-location-selected text-center py-5">
            <FaCloudSun size={80} className="mb-4 text-muted" />
            <h4>{t('weatherForecastPage.noData') || 'Search for a city to see weather'}</h4>
            <p className="text-muted">
              {t('weatherForecastPage.hint') || 'Try New Delhi, Mumbai, or any Indian city'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;
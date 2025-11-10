import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaCloudSun, FaTemperatureHigh, FaTint, FaWind, FaSun, FaCloudRain, FaCloud, FaBolt, FaSnowflake } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './WeatherForecast.css';

const WeatherForecast = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mock weather data generator based on location
  const generateWeatherData = (location) => {
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Thunderstorm'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    
    return {
      location: location,
      current: {
        temp: Math.floor(Math.random() * 20) + 20,
        feelsLike: Math.floor(Math.random() * 20) + 20,
        condition: randomCondition,
        humidity: Math.floor(Math.random() * 40) + 40,
        windSpeed: Math.floor(Math.random() * 20) + 5,
        pressure: Math.floor(Math.random() * 50) + 1000,
        visibility: Math.floor(Math.random() * 5) + 5,
        uvIndex: Math.floor(Math.random() * 10) + 1,
        sunrise: '06:15 AM',
        sunset: '06:45 PM'
      },
      forecast: Array.from({ length: 7 }, (_, i) => ({
        day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][(new Date().getDay() + i) % 7],
        date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        high: Math.floor(Math.random() * 10) + 30,
        low: Math.floor(Math.random() * 10) + 15,
        condition: conditions[Math.floor(Math.random() * conditions.length)],
        rainChance: Math.floor(Math.random() * 100)
      })),
      hourly: Array.from({ length: 24 }, (_, i) => ({
        time: `${i}:00`,
        temp: Math.floor(Math.random() * 15) + 20,
        condition: conditions[Math.floor(Math.random() * conditions.length)]
      }))
    };
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const weatherData = generateWeatherData(searchQuery);
        setSelectedLocation(weatherData);
        setLoading(false);
      }, 1000);
    }
  };

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <FaSun className="weather-icon sunny" />;
      case 'cloudy':
        return <FaCloud className="weather-icon cloudy" />;
      case 'rainy':
        return <FaCloudRain className="weather-icon rainy" />;
      case 'partly cloudy':
        return <FaCloudSun className="weather-icon partly-cloudy" />;
      case 'thunderstorm':
        return <FaBolt className="weather-icon thunderstorm" />;
      case 'snow':
        return <FaSnowflake className="weather-icon snow" />;
      default:
        return <FaCloudSun className="weather-icon" />;
    }
  };

  const popularLocations = [
    'New Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai',
    'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Punjab', 'Haryana', 'Uttar Pradesh', 'Maharashtra', 'Karnataka'
  ];

  return (
    <div className="weather-page">
      <div className="container py-5">
        <button 
          className="back-button mb-4"
          onClick={() => navigate('/')}
        >
          <FaArrowLeft /> Back
        </button>

        <div className="text-center mb-5">
          <h1 className="weather-page-title mb-3">
            <FaCloudSun className="me-2" />
            Weather Forecast
          </h1>
          <p className="weather-page-intro">
            Get accurate weather updates for your city or state
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
                placeholder="Search for a city or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn search-btn" disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>

          {/* Popular Locations */}
          <div className="popular-locations mt-4">
            <p className="text-muted mb-3">Popular Locations:</p>
            <div className="location-tags">
              {popularLocations.map((location, idx) => (
                <button
                  key={idx}
                  className="location-tag"
                  onClick={() => {
                    setSearchQuery(location);
                    const weatherData = generateWeatherData(location);
                    setSelectedLocation(weatherData);
                  }}
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
              <div className="row">
                <div className="col-md-6">
                  <h2 className="location-name">{selectedLocation.location}</h2>
                  <p className="current-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  
                  <div className="current-temp-section">
                    {getWeatherIcon(selectedLocation.current.condition)}
                    <div className="temp-display">
                      <span className="current-temp">{selectedLocation.current.temp}°C</span>
                      <span className="condition-text">{selectedLocation.current.condition}</span>
                    </div>
                  </div>
                  
                  <p className="feels-like">Feels like {selectedLocation.current.feelsLike}°C</p>
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
                        <span className="detail-label">Wind Speed</span>
                        <span className="detail-value">{selectedLocation.current.windSpeed} km/h</span>
                      </div>
                    </div>
                    <div className="weather-detail-item">
                      <FaTemperatureHigh className="detail-icon" />
                      <div className="detail-info">
                        <span className="detail-label">Pressure</span>
                        <span className="detail-value">{selectedLocation.current.pressure} mb</span>
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
                        <span className="detail-label">Sunrise/Sunset</span>
                        <span className="detail-value">{selectedLocation.current.sunrise} / {selectedLocation.current.sunset}</span>
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
            <div className="hourly-section">
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
            <div className="ag-advisory mt-4">
              <h3 className="section-title">Agricultural Advisory</h3>
              <div className="advisory-grid">
                <div className="advisory-card">
                  <h5>Irrigation Recommendation</h5>
                  <p>Based on current weather conditions and forecast, moderate irrigation is recommended for the next 3 days.</p>
                </div>
                <div className="advisory-card">
                  <h5>Pest Control Alert</h5>
                  <p>High humidity levels may increase pest activity. Consider preventive measures for common pests.</p>
                </div>
                <div className="advisory-card">
                  <h5>Harvesting Conditions</h5>
                  <p>Weather conditions are favorable for harvesting activities over the next 48 hours.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-location-selected">
            <FaCloudSun size={80} className="mb-4 text-muted" />
            <h4>Search for a location to view weather forecast</h4>
            <p className="text-muted">Enter a city or state name in the search bar above</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;

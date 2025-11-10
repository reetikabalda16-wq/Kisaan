import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LoginPage from './components/LoginPage';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import CropAdvisory from './pages/CropAdvisory';
import FarmMechanization from './pages/FarmMechanization';
import OrganicFarmingSupport from './pages/OrganicFarmingSupport';
import SoilTesting from './pages/SoilTesting';
import MarketLinkages from './pages/MarketLinkages';
import FarmerHelpline from './pages/FarmerHelpline';
import FinancialServices from './pages/FinancialServices';
import WeatherForecast from './pages/WeatherForecast';
import MarketInfo from './pages/MarketInfo';
import CropInfo from './pages/CropInfo';
import CropDisease from './pages/CropDisease';
import Medicines from './pages/Medicines';
import GovernmentSchemes from './pages/Scheme';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<MainLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
          <Route index element={<Home />} />
          <Route path="schemes" element={<GovernmentSchemes />} />
          <Route path="crop-advisory" element={<CropAdvisory />} />
          <Route path="farm-mechanization" element={<FarmMechanization />} />
          <Route path="organic-farming" element={<OrganicFarmingSupport />} />
          <Route path="soil-testing" element={<SoilTesting />} />
          <Route path="market-linkages" element={<MarketLinkages />} />
          <Route path="farmer-helpline" element={<FarmerHelpline />} />
          <Route path="financial-services" element={<FinancialServices />} />
          <Route path="weather-forecast" element={<WeatherForecast />} />
          <Route path="market-info" element={<MarketInfo />} />
          <Route path="crop-info" element={<CropInfo />} />
          <Route path="crop-disease" element={<CropDisease />} />
          <Route path="medicines" element={<Medicines />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

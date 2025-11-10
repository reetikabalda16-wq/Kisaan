import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Slider() {
  const { t } = useLanguage();
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="overlay"></div>
          <img
            src="https://terra-droneagri.com/wp-content/uploads/2024/01/header-compress.png"
            className="d-block w-100"
            alt="Agriculture Drone"
            height="550"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>{t('slider.welcome')}</h1>
            <p>{t('slider.subtitle')}</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="overlay"></div>
          <img
            src="https://img.freepik.com/premium-photo/young-indian-farmer-green-agriculture-field_75648-6244.jpg?semt=ais_hybrid&w=740&q=80"
            className="d-block w-100"
            alt="Farmer in field"
            height="550"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>{t('slider.subtitle')}</h1>
            <p>{t('slider.description')}</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="overlay"></div>
          <img
            src="https://cdn.pixabay.com/photo/2020/07/23/01/09/field-5430070_640.jpg"
            className="d-block w-100"
            alt="Farming landscape"
            height="550"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>{t('slider.welcome')}</h1>
            <p>{t('slider.description')}</p>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;

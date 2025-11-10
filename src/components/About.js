import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/029/331/901/small/ai-generative-farmer-s-hands-over-farm-plants-realistic-image-ultra-hd-high-design-very-detailed-free-photo.jpg"
              alt="About Agriculture"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Text */}
          <div className="col-md-6">
            <h2 className="about-title mb-3">
              {t('about.title')}
            </h2>
            <p className="about-text">
              {t('about.mission')}
            </p>
            <p className="about-text">
              {t('about.focus')}
            </p>
            
            {isExpanded && (
              <div className="more-info">
                <p className="about-text">
                  {t('about.platform')}
                </p>
                <p className="about-text">
                  {t('about.features')}
                </p>
              </div>
            )}

            <button className="btn btn-success mt-3" onClick={toggleReadMore}>
              {isExpanded ? t('about.showLess') : t('about.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

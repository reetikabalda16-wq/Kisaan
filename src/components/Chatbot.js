import React, { useState } from 'react';
import './Chatbot.css';
import { useLanguage } from '../context/LanguageContext';

const Chatbot = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([{ text: t('chatbot.welcomeMessage'), sender: 'bot' }]);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    // Enhanced bot response logic
    const getBotResponse = (userInput) => {
      const lowerCaseInput = userInput.toLowerCase();

      // Project-specific questions
      if (lowerCaseInput.includes('crop info') || lowerCaseInput.includes('crop information') || lowerCaseInput.includes('फसल')) {
        return t('chatbot.responses.cropInfo');
      }
      if (lowerCaseInput.includes('disease') || lowerCaseInput.includes('रोग')) {
        return t('chatbot.responses.disease');
      }
      if (lowerCaseInput.includes('weather') || lowerCaseInput.includes('मौसम')) {
        return t('chatbot.responses.weather');
      }
      if (lowerCaseInput.includes('market') || lowerCaseInput.includes('price') || lowerCaseInput.includes('बाजार') || lowerCaseInput.includes('मूल्य')) {
        return t('chatbot.responses.market');
      }
      if (lowerCaseInput.includes('schemes') || lowerCaseInput.includes('government') || lowerCaseInput.includes('योजना') || lowerCaseInput.includes('सरकार')) {
        return t('chatbot.responses.schemes');
      }
      if (lowerCaseInput.includes('soil testing') || lowerCaseInput.includes('मिट्टी')) {
        return t('chatbot.responses.soilTesting');
      }
      if (lowerCaseInput.includes('organic farming') || lowerCaseInput.includes('जैविक')) {
        return t('chatbot.responses.organicFarming');
      }
      if (lowerCaseInput.includes('help') || lowerCaseInput.includes('support') || lowerCaseInput.includes('सहायता')) {
        return t('chatbot.responses.help');
      }

      // General greetings
      if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi') || lowerCaseInput.includes('नमस्ते') || lowerCaseInput.includes('हैलो')) {
        return t('chatbot.responses.greeting');
      }

      // Default response
      return t('chatbot.responses.default');
    };

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle-button" onClick={toggleChatbot}>
        {t('chatbot.toggleButton')}
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>{t('chatbot.header')}</h3>
            <button onClick={toggleChatbot}>{t('chatbot.close')}</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`} >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={t('chatbot.inputPlaceholder')}
            />
            <button onClick={handleSendMessage}>{t('chatbot.sendButton')}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

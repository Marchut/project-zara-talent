import React, { useState } from 'react';
import './LanguageSelector.scss';

const LanguageSelector: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <div className="languageSelector">
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'ES' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageSelector;
import React from 'react';
import './Header.scss';
import Logo from './Logo';
import NavMenu from './NavMenu';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-navigation">
        <NavMenu />
        <LanguageSelector />
      </div>
      
      <Logo />
    </header>
  );
};

export default Header;
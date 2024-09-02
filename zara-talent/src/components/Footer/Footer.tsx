import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h1>#DEVTALENT</h1>
      <div className='nav'>
        <div><a href='#'>Aviso legal</a></div>
        <div><a href='#'>Protección de datos</a></div>
        <div><a href='#'>Política de cookies</a></div>
        <div><a href='#'>Cookies settings</a></div>
      </div>
    </div>
  );
};

export default Footer;

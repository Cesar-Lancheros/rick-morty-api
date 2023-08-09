import React from 'react';
import '../assets/css/footer.css'; 
import rLogo from '../assets/img/Rick_and_Morty.png'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left-side">
        <img className="rlogo"src={rLogo} alt="Logo" />
      </div>
      <div className="right-side">
        <p>Made by David Lancheros AKA Signifer</p>
      </div>
    </footer>
  );
};

export default Footer;

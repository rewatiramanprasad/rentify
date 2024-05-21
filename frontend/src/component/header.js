import React from 'react';
import './header.css'; // CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Rentify</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div className="headerBackground">
      <header>
        <div className="logo">
          <Link to="/" className="link-logo">FOODUPI</Link>
        </div>

        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`menu ${menuOpen ? 'show' : ''}`}>
          <Link to="/meat">
            <div className="category">Мясо</div>
          </Link>
          <Link to="/bread">
            <div className="category">Мучные изделия</div>
          </Link>
          <Link to="/drinks">
            <div className="category">Напитки</div>
          </Link>
          <Link to="/fruitsnvegies">
            <div className="category">Овощи и фрукты</div>
          </Link>
          <Link to="/milk">
            <div className="category">Молочные продукты</div>
          </Link>
          <Link to="/snacks">
            <div className="category">Сладости и снеки</div>
          </Link>
        </div>

        <Link to="/cart">
          <img src="/Img/Misc/cart.jpg" alt="Корзина" className="cartImg" />
        </Link>
      </header>
    </div>
  );
};

export default Header;

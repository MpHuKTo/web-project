import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="headerBackground">
      <header>
        <div className="Logo">ТИПО ЛОГО</div>


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


      </header>
    </div>
  );
};

export default Header;

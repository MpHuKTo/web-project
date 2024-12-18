import React from 'react'
import './Checkout.css';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className="thank-you-container">
      <h1 className="thank-you-header">Спасибо за вашу покупку!</h1>
      <p className="thank-you-text">
        Мы благодарим вас за выбор нашего сервиса. Ваш заказ успешно оформлен, и он уже в процессе обработки.
      </p>
      <p className="thank-you-text">
        Доставка будет осуществлена в течение 2-3 часов. Пожалуйста, ожидайте нашего курьера.
      </p>
      <p className="thank-you-text">
        Если у вас возникнут вопросы, не стесняйтесь связаться с нашей службой поддержки.
      </p>
      <Link to="/" className="go-back-button">
        Вернуться назад
      </Link>
    </div>
    
  )
}

export default Checkout
import React from 'react';
import "./Mainpage.css";

function Mainpage() {
  return (
    <div className="healthy-container">
      <div className="healthy-text">
        <h1>Eat healthy</h1>
        <h2>Stay healthy</h2>
        <p>Заботьтесь о своем здоровье с заботой и вниманием – выбирайте свежее и качественное у нас, чтобы чувствовать себя отлично каждый день!</p>
      </div>
      <div className="healthy-image">
        <img src="/Img/mainpage.png" alt="Healthy Food Chart" />
      </div>

      <div className="why-choose-us">
        <h1>Почему стоит выбрать именно нас?</h1>
        <ol>
          <li><strong>Свежесть и качество</strong> – Мы гарантируем, что все продукты, которые вы заказываете у нас, всегда свежие и высокого качества. Мы работаем только с проверенными поставщиками и производителями, что позволяет нам контролировать каждый этап доставки.</li>
          <li><strong>Удобство и экономия времени</strong> – Онлайн-магазин позволяет вам делать покупки в удобное для вас время, не выходя из дома. Заказывайте продукты в пару кликов и получайте их прямо к двери, сэкономив свое время и силы.</li>
          <li><strong>Широкий ассортимент</strong> – В нашем магазине вы найдете все, что нужно для здорового питания: от свежих овощей и фруктов до органических и экопродуктов. Мы заботимся о том, чтобы каждый покупатель мог найти что-то для себя.</li>
          <li><strong>Постоянные акции и скидки</strong> – Мы ценим своих клиентов и регулярно предлагаем скидки и специальные предложения, чтобы вы могли экономить на качественных продуктах.</li>
          <li><strong>Безопасность и надежность</strong> – Ваши заказы всегда в надежных руках. Мы обеспечиваем быструю и безопасную доставку, а также защищаем личные данные наших клиентов с помощью современных технологий.</li>
        </ol>
        <p>Выбирайте нас, и мы позаботимся о вашем здоровье и удобстве покупок!</p>
      </div>
    </div>
  );
}

export default Mainpage;

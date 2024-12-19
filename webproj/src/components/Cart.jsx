import React, { useState } from 'react';
import { useData } from './DataContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; 

const Cart = () => {
    const { dataArray } = useData();
    const navigate = useNavigate();

    const [city, setCity] = useState('');

    const CartItem = (props) => {
        return (
            <div className='cart-item'>
                <img className='img' src={props.img} alt={props.name}></img>
                <div className='product-name'>{props.name}</div>
                <div className='product-description'>{props.description}</div>
                <div className='price-and-weight'>
                    {props.price} Тг. за {props.weight}
                </div>
                <div className='count'>Количество: {props.itemCount}</div>
            </div>
        );
    };

    const CartAssembly = () => {
        const filteredItems = dataArray.filter(item => item.itemCount !== 0);

        const uniqueItems = Array.from(
            new Map(filteredItems.map(item => [item.name, item])).values()
        );

        return uniqueItems.map((item, index) => (
            <CartItem
                key={index}
                img={item.img}
                name={item.name}
                description={item.description}
                price={item.price}
                weight={item.weight}
                itemCount={item.itemCount}
            />
        ));
    };

    const handleCheckout = () => {

        const filteredItems = dataArray.filter(item => item.itemCount !== 0);

        const uniqueItems = Array.from(
            new Map(filteredItems.map(item => [item.name, item])).values()
        );
        const total = uniqueItems
            .filter(item => item.itemCount !== 0)
            .reduce((sum, item) => sum + item.price * item.itemCount, 0);

        const userCity = prompt('Введите ваш город:');
        if (userCity) {
            setCity(userCity);
            alert(`Город: ${userCity}\nИтоговая сумма: ${total.toLocaleString()} Тг.`);
            navigate('/checkout'); 
        }
        
    };

    return (
        <div className='cart-container'>
            <div className='cart-items'>
                <CartAssembly />
            </div>
            <button className='checkout-button' onClick={handleCheckout}>
                Оформить заказ
            </button>
        </div>
    );
};

export default Cart;

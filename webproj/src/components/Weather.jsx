import React, { useState, useEffect } from 'react';
import './Wearher.css';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(""); 

  const apiKey = '73cae2e8615032ada85bb86ae6043138'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Ошибка при получении данных о погоде');
      }
      const data = await response.json();
      setWeather(data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-container">
      <h1>Погода в городе {city}</h1>
      <input 
        className="city-input"
        type="text" 
        value={city} 
        onChange={handleCityChange} 
        placeholder="Введите название города" 
      />
      <button onClick={fetchWeather}>Получить погоду</button>

      {loading && <p className="loading">Загрузка...</p>}
      {error && <p className="error-message">Ошибка: {error}</p>}

      {weather && (
        <div className="weather-info">
          <p><strong>Температура:</strong> {weather.main.temp}°C</p>
          <p><strong>Описание:</strong> {weather.weather[0].description}</p>
          <p><strong>Влажность:</strong> {weather.main.humidity}%</p>
          <p><strong>Скорость ветра:</strong> {weather.wind.speed} м/с</p>
        </div>
      )}

      <h2 className="slogan">Мы готовы доставить ваши продукты в любую погоду!</h2>
      <p>Проверяйте погоду в вашем городе прямо здесь, и пусть ничто не мешает вашей доставке!</p>
    </div>
  );
}

export default Weather;


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////                MirukuSCM  WeatherAPP              ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import iconImage from './SylvIcon.jpg';
function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const API_KEY = process.env.REACT_APP_API_KEY;
    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            setWeather(response.data);
            setError('');
        } catch (error) {
            setWeather(null);
            setError('City not found. Please try again.');}};
    return (
        <div className="weather-app">
            <nav className="navbar">

                <a href="/">
                    <img
                        src={iconImage}
                        alt="Weather Icon"
                        className="icon-image"/>
                </a>
                <div className="navbar-title">MirukuSCM WeatherAPP</div>
                <div className="navbar-links">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 4</a>
                </div>
            </nav>
            <div className="video-container">
                <video autoPlay loop muted className="video-background">
                    <source src="/video/Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="weather-card">
                <h1>GawsedrftG</h1>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}/>
                <button onClick={fetchWeather}>Search</button>
                {weather && (
                    <div className="weather-info">
                        <h2>{weather.name}, {weather.sys.country}</h2>
                        <p>{weather.weather[0].description}</p>
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                    </div>)}
                {error && <p className="error">{error}</p>}
            </div>
        </div>);}
export default App;







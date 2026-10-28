import React from 'react'
import { useWeather } from '../context/Weather'
import SpotlightCard from './SpotlightCard'

const Card = () => {
  const weather = useWeather();
  const current = weather.data?.current;
  const location = weather.data?.location;
  const isNight = current?.is_day === 0;

  return (
    <div className='card'>
      {weather.data?.error ? (
        <SpotlightCard className={`spotlight-card ${isNight ? 'night' : ''}`}>
          <div className="card-error">{weather.data.error.message}</div>
        </SpotlightCard>
      ) : (
        <SpotlightCard className={`spotlight-card ${isNight ? 'night' : ''}`}>
          <div className="weather-card-layout">
            
            {/* Top Row: Left (Temp & Icon) and Right (Location & Night Status) */}
            <div className="weather-top-row">
              {/* Top Left */}
              <div className="weather-left-col">
                <div className="temp-with-icon">
                  {current?.condition?.icon && (
                    <img
                      src={current.condition.icon}
                      alt={current.condition?.text || "weather icon"}
                      className="weather-main-icon"
                    />
                  )}
                  <span className="main-temp">{current?.temp_c}°C</span>
                </div>
                <h3 className="condition-title">{current?.condition?.text}</h3>
                <p className="feels-like-text">
                  Feels like {current?.feelslike_c}°C
                </p>
              </div>

              {/* Top Right */}
              <div className="weather-right-col">
                <h2 className="location-name">{location?.name}</h2>
                <p className="location-region">
                  {location?.region ? `${location.region}, ` : ''}{location?.country}
                </p>
                <div className="night-badge">
                  <strong>{isNight ? "Night 🌙" : "Day ☀️"}</strong>
                </div>
                <p className="coords-info">
                  Lat: {location?.lat}° • Lon: {location?.lon}°
                </p>
              </div>
            </div>

            {/* Bottom Section: Spread-out metrics grid */}
            <div className="weather-bottom-grid">
              <div className="metric-box">
                <span className="metric-label">Wind Direction</span>
                <span className="metric-val">{current?.wind_dir}</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Wind Speed</span>
                <span className="metric-val">{current?.wind_kph} km/h</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Humidity</span>
                <span className="metric-val">{current?.humidity}%</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Last Updated</span>
                <span className="metric-val">{current?.last_updated}</span>
              </div>
            </div>

          </div>
        </SpotlightCard>
      )}
    </div>
  );
};

export default Card;
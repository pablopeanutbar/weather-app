import React from 'react'
import { useWeather } from '../../context/Weather'
const Card = ()=> {
  const weather = useWeather() 
  return (
    <div className='card'>
        <h1>WeatherForecast App</h1>
        <h2>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country} </h2>
        <span>Lattitude & Longitude - </span> <span>{weather.data?.location?.lat}, {weather.data?.location?.lon} </span>
        <h3>{weather.data?.current?.temp_c} C</h3>
        <img src={weather.data?.current?.condition?.icon} alt="icon" />
        <h3>{weather.data?.current?.condition?.text}</h3>
        <h3> Feels like - {weather.data?.current?.feelslike_c} C</h3>
        <h3> Wind direction - {weather.data?.current?.wind_dir}</h3>
        <h3> Last updated on : {weather.data?.current?.last_updated}</h3>

    </div>
  )
}

export default Card
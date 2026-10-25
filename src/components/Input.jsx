import React from 'react'
import { useWeather } from '../../context/Weather'

function Input() {
const weather = useWeather();
console.log(weather)


  return (
    <div>
    <input type="text" placeholder='Enter a city' className='input-field'
    value={weather.searchCity}
    onChange={(e)=> weather.setSearchcity(e.target.value)
    } />
    </div>
  )
}

export default Input
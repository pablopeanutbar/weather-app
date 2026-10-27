import React from 'react'
import { useWeather } from '../context/Weather'
import {Input as ShadcnInput} from './ui/input'

function Input() {
const weather = useWeather();

  return (
    <div>
    <ShadcnInput type="text" placeholder='Enter a city' className='input-field'
    value={weather.searchCity}
    onChange={(e)=> weather.setSearchcity(e.target.value)
    } />
    </div>
  )
}

export default Input
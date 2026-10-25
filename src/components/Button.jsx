import React from 'react'
import { useWeather } from '../../context/Weather'

function Button(props) {
const weather = useWeather()

    return (
    <div>
        <button className='btn'
        onClick={weather.fetchdata}
        >Search</button>
    </div>
  )
}

export default Button
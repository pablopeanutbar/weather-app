import React from 'react'
import { useWeather } from '../context/Weather'
import { Button as Shadcnbutton } from './ui/button';

function Button() {
const weather = useWeather()

    return (
    <div>
        <Shadcnbutton className='btn'
        onClick={weather.fetchdata}
        >Search</Shadcnbutton>
    </div>
  )
}

export default Button
import React from 'react'
import { useWeather } from '../context/Weather'
import { PlaceholdersAndVanishInput } from './ui/vanish-input'

function Input() {
  const weather = useWeather();

  const placeholders = [
    "Prayagraj",
    "Lucknow",
    "Mumbai",
    "Goa",
    "London",
    "Tokyo",
    "New York"
  ];

  return (
    <div className="input-field">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => weather.setSearchcity(e.target.value)}
        onSubmit={(e) => weather.fetchdata()}
      />
    </div>
  );
}

export default Input
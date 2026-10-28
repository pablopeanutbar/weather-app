const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeatherDataFromCity(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    return await response.json();
}

export async function getWeatherDataFromLocation(lat,lon) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`);
    return await response.json();
}


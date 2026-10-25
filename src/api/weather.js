

export async function getWeatherDataFromCity(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7490175c0e32455b89c54737262510&q=${city}`);
    return await response.json();
}



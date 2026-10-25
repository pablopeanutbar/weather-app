import { createContext, useContext, useState } from "react";
import { getWeatherDataFromCity } from "../src/api/weather";

const weatherContext = createContext(null)

export const useWeather = () =>{
  return useContext(weatherContext)
}


export const WeatherProvider = (props) =>{
const [data, setData] = useState(null)
const [searchCity, setSearchcity ] = useState("")

const fetchdata = async()=>{
    const response = await getWeatherDataFromCity(searchCity)
    console.log(response)
    setData(response)
}

    return( 
    <weatherContext.Provider value={{searchCity, data, setSearchcity, setData, fetchdata}}>
        {props.children}
    </weatherContext.Provider>
    )
}

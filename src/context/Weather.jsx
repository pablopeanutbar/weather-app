import { createContext, useContext, useState } from "react";
import { getWeatherDataFromCity, getWeatherDataFromLocation} from "../api/weather";

const weatherContext = createContext(null)

export const useWeather = () =>{
  return useContext(weatherContext)
}


export const WeatherProvider = (props) =>{
const [data, setData] = useState(null)
const [searchCity, setSearchcity ] = useState("")
const [errorMsg, setErrorMsg ] = useState("")

const fetchdata = async()=>{
    if(!searchCity || !searchCity.trim()){
        setErrorMsg("Enter a City name")

        setTimeout(() => {
        setErrorMsg("")
        }, 3000);
        return;
    }
    setErrorMsg("");
    const response = await getWeatherDataFromCity(searchCity)
    console.log("getdata",response)
    setData(response)
}
 const getUserLocationAndData = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataFromLocation(position.coords.latitude,position.coords.longitude)
        .then((data)=> setData(data))
    })
 } 

    return( 
    <weatherContext.Provider value={{searchCity, data, setSearchcity, setData, fetchdata, getUserLocationAndData, setErrorMsg, errorMsg}}>
        {props.children}
    </weatherContext.Provider>
    )
}

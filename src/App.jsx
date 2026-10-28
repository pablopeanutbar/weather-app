import './App.css'
import { useEffect } from 'react'
import Card from './components/Card'
import Input from './components/Input'
import { useWeather } from './context/Weather'
import CloudShader from './components/CloudShader'
import StarsBackground from './components/StarsBackground'



function App() {
const weather = useWeather();

useEffect(()=> {
  weather.getUserLocationAndData();
},[])

const isNight = weather.data?.current?.is_day === 0;

  return (
    <>
    
    <div className='cloud-bg'>
    {isNight?<StarsBackground />:<CloudShader />}


     <div className='weather-app'>

    <h1>What's The Weather?</h1>

    <Input />

     {weather.errorMsg && (
    <p style={{
      color: '#ffffffff',
      backgroundColor: 'rgba(29, 28, 28, 0.15)',
      border: '1px solid rgba(90, 83, 83, 0.3)',
      padding: '8px 16px',
      borderRadius: '8px',
      marginBottom: '16px',
      fontWeight: '500'
    }}>
      ⚠️ {weather.errorMsg}
    </p>
  )}

    {weather.data?
    <Card /> : <h2 style={{fontSize:"larger",
      textShadow:"2px",
      backgroundColor: 'rgba(29, 28, 28, 0.15)',
      border: '1px solid rgb(224, 218, 218)',
      padding: '8px 16px',
      borderRadius: '8px',
      marginBottom: '16px',
      marginTop:'16px',
      fontWeight: '500'
      }}>No location choosen yet</h2>}
      </div>
     </div>
    </>
  )
}

export default App

import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Weatherinfor from './components/Weatherinfor/Weatherinfor'
import Weatherinfor5Days from './components/Weatherinfor/Weatherinfor5Days/Weatherinfor5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputref = useRef()

  async function searchCity() {
    const city = inputref.current.value
    const key = "256e2addafda500868703916d1836f04"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)
    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)
  
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputref} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <Weatherinfor weather={weather}/>}
      {weather5Days && <Weatherinfor5Days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App

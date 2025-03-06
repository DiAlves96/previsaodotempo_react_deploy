import './Weatherinfor5Days.css'

function Weatherinfor5Days({weather5Days}){

    console.log(weather5Days)

    let dailyForecast = {

    }

    for(let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        
        if(!dailyForecast[date]){
         dailyForecast[date] = forecast
        }
    }

    const next5DasyForecast = Object.values(dailyForecast).slice(1,6)

    function convertDate(timestamp) {
        return new Date(timestamp * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day: '2-digit'});
    }

    
    

    return(
        <div className='weather-container'>
            <h3>Previsão Próximos 5 Dias</h3>
            <div className='weather-list'>
            {next5DasyForecast.map(forecast => (
                <div key={forecast.dt} className='weather-item'>
                  <p className='forecast-day'>{convertDate(forecast.dt)}</p>
                  <img src={`http://openweathermap.org/img/wn/${forecast.weather?.[0]?.icon}.png`}/>
                  <p className='forecast-description'>{forecast.weather[0].description}</p>
                  <p>{Math.round(forecast.main.temp_min)}°C Min / {Math.round(forecast.main.temp_max)}°C Máx</p>
                </div>
            ))}
            </div>
        </div>
        
    )
}

export default Weatherinfor5Days
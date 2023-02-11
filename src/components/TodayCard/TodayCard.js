import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { returnImagesSource } from '../../services/ImageGiver'
import './TodayCard.css'

const useCurrentCallback = (callback) => {
  const reference = React.useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current?.(...args);
  };
};

const TodayCard = () => {

  const weatherDetails = useSelector((state) => state.weatherDetails)
  const { loading, weatherInfo } = weatherDetails

  const d = new Date();
  let day = d.getDay()
  
  const [time, setTime] = React.useState(0);
  const currentCallback = useCurrentCallback(() => {
    const date = new Date();
    setTime(date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}).substring(10,16) + ' ' + date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}).substring(19));
  });

  useEffect(() => { 

    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, []);

  let currWeather = weatherInfo && weatherInfo[day] ? weatherInfo[day] : {}


  let imgsrc= weatherInfo && weatherInfo[day] && weatherInfo[day].weather[day] ? returnImagesSource(weatherInfo[day].weather[day].description) : returnImagesSource('snow')


  return (
    <div className='today-card'>

      <div className='left-section-today'>
          <div className='weather-condition-displayer'>
            <span>Current Weather</span>
            <span>{time}</span>
            <img src={imgsrc} style={{'width':'80px'}} />
            <span className='weather-today'>  {weatherInfo[day] && weatherInfo[day].weather[day] ? (weatherInfo[day].weather[day].description.charAt(0).toUpperCase()+weatherInfo[day].weather[day].description.substring(1)): 'Mostly Sunny'}</span>
          </div>
      
          <div className='temp-displayer'>
            <span className='temp-today'>{weatherInfo[day] ? weatherInfo[day].temp : '16'}{'\u00b0'}</span>
            <span className='real-feel'>RealFeel &reg; {currWeather.feels_like}</span>
          </div>
      </div>


      <div className='right-section-today'>
        <span className='city-name-today'>{weatherInfo && weatherInfo[7] ? weatherInfo[7].q : 'Seattle'}</span>
        <div className='today-other-condn'>
          <div className='property'>
            <span>Real Feel</span>
            <span>{currWeather.feels_like}{'\u00b0'}</span>
          </div>

          <div className='property'>
            <span>Humidity</span>
            <span>{currWeather.humidity}</span>
          </div>
          
          <div className='property'>
            <span>Wind Speed</span>
            <span>{currWeather.speed}</span>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default TodayCard
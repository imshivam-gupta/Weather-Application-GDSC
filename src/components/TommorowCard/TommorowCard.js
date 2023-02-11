import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { returnImagesSource } from '../../services/ImageGiver'
import './TommorowCard.css'

const useCurrentCallback = (callback) => {
  const reference = React.useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current?.(...args);
  };
};

const TommorowCard = () => {

  const weatherDetails = useSelector((state) => state.weatherDetails)
  const { loading, weatherInfo } = weatherDetails

  const d = new Date();
  let day = d.getDay()
  
  const [time, setTime] = React.useState(0);
  const currentCallback = useCurrentCallback(() => {
    let date = new Date();
    setTime(date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}).substring(10,16) + ' ' + date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}).substring(19));
  });

  useEffect(() => { 

    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, []);

  const next_date = (day===6) ? 0 : day+1
  day = next_date

  let currWeather = weatherInfo && weatherInfo[day] ? weatherInfo[day] : {}



  let imgsrc= weatherInfo && weatherInfo[day] && weatherInfo[day].weather[day] ? returnImagesSource(weatherInfo[day].weather[day].description) : returnImagesSource('snow')


  return (
    <div className='tommorow-card'>

      <div className='left-section-tommorow'>
        <span>Current Weather</span>
        <img src={imgsrc} style={{'width':'100px'}} />
        <span className='temp-tommorow'>{weatherInfo[day] ? weatherInfo[day].temp : '16'}{'\u00b0'}</span>
        <span className='city-name-tommorow'>{weatherInfo && weatherInfo[7] ? weatherInfo[7].q : 'Seattle'}</span>
        <span className='weather-tommorow'>  {weatherInfo[day] && weatherInfo[day].weather[day] ? weatherInfo[day].weather[day].description: 'Mostly Sunny'}</span>
      </div>

      <div className='right-section-tommorow'>
        <span>{currWeather.feels_like}{'\u00b0'}</span>{' '}
        <span>{currWeather.humidity}</span>{' '}
        <span>{currWeather.speed}</span>
      </div>


      <div>
        
      </div>
      

    </div>
  )
}

export default TommorowCard
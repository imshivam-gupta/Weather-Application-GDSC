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
    <div className='tomorrow-card'>

    <div className='left-section-tomorrow'>
        <div className='weather-condition-displayer'>
          <span>Current Weather</span>
          <img src={imgsrc} style={{'width':'80px'}} />
          <span className='weather-tomorrow'>  {weatherInfo[day] && weatherInfo[day].weather[day] ? (weatherInfo[day].weather[day].description.charAt(0).toUpperCase()+weatherInfo[day].weather[day].description.substring(1)): 'Mostly Sunny'}</span>
        </div>
    
        <div className='temp-displayer'>
          <span className='temp-tomorrow'>{weatherInfo[day] ? weatherInfo[day].temp : '16'}{'\u00b0'}</span>
          <span className='real-feel'>RealFeel &reg; {currWeather.feels_like}</span>
        </div>
    </div>


    <div className='right-section-tomorrow'>
      <span className='city-name-tomorrow'>{weatherInfo && weatherInfo[7] ? weatherInfo[7].q : 'Seattle'}</span>
      <div className='tomorrow-other-condn'>
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

export default TommorowCard
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
  
  var tempInfo =[{"temp":24.58,"feels_like":24.03,"temp_min":23.75,"temp_max":24.58,"humidity":36,"dt":1676073600,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"speed":3.33},{"temp":27.72,"feels_like":27.91,"temp_min":27.72,"temp_max":27.72,"humidity":47,"dt":1676106000,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":6.27},{"temp":24.91,"feels_like":24.92,"temp_min":24.91,"temp_max":24.91,"humidity":56,"dt":1676138400,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"speed":4.38},{"temp":24.21,"feels_like":23.81,"temp_min":24.21,"temp_max":24.21,"humidity":43,"dt":1676170800,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"speed":3.54},{"temp":27.12,"feels_like":27.8,"temp_min":27.12,"temp_max":27.12,"humidity":54,"dt":1676203200,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":8.15},{"temp":25.74,"feels_like":25.54,"temp_min":25.74,"temp_max":25.74,"humidity":45,"dt":1676235600,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"speed":3.26},{"temp":29.23,"feels_like":28.49,"temp_min":29.23,"temp_max":29.23,"humidity":36,"dt":1676268000,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"speed":2.35},{"q":"Mumbai"}]
  
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

  let currWeather = weatherInfo && weatherInfo[day] ? weatherInfo[day] : tempInfo[day]

  let imgsrc= weatherInfo && weatherInfo[day] && weatherInfo[day].weather[day] ? returnImagesSource(weatherInfo[day].weather[day].description) : returnImagesSource(tempInfo[day].weather[0].description)
 
  return (
    <div className='tomorrow-card'>

    <div className='left-section-tomorrow'>
        <div className='weather-condition-displayer'>
          <span>Current Weather</span>
          <img src={imgsrc} style={{'width':'80px'}} />
          <span className='weather-tomorrow'>  {weatherInfo[day] && weatherInfo[day].weather[day] ? (weatherInfo[day].weather[day].description.charAt(0).toUpperCase()+weatherInfo[day].weather[day].description.substring(1)): (tempInfo[day].weather[0].description.charAt(0).toUpperCase()+tempInfo[day].weather[0].description.substring(1))}</span>
        </div>
    
        <div className='temp-displayer'>
          <span className='temp-tomorrow'>{weatherInfo[day] ? weatherInfo[day].temp : '16'}{'\u00b0'}</span>
          <span className='real-feel'>RealFeel &reg; {currWeather.feels_like}</span>
        </div>
    </div>


    <div className='right-section-tomorrow'>
      <span className='city-name-tomorrow'>{weatherInfo && weatherInfo[7] ? weatherInfo[7].q : tempInfo[7].q}</span>
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
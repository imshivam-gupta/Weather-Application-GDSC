import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './OneDayCard.css'

const useCurrentCallback = (callback) => {
  const reference = React.useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current?.(...args);
  };
};

const OneDayCard = ({day_details}) => {

  // console.log(day_details)
  const {day,humidity,isToday,speed,temp,temp_max,temp_min,imgsrc}=day_details

  const [time, setTime] = React.useState(0);
  const currentCallback = useCurrentCallback(() => {
    const date = new Date();
    setTime(date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}).substring(10,16) + ' ' + date.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}).substring(19));
  });
 
  useEffect(() => { 

    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, [currentCallback]);

  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;


  return (
    <>
    {
    
    !isToday?

      <div className={!isdarkMode?'weather-card':'weather-card light-weather-card'}>

          <div className='weather-card-day'>
            {day.substring(0,3)} 
          </div>
          <div className='weather-card-img'><img src={imgsrc}alt='weather' /></div>
          <div className='weather-card-temp'>{temp}{'\u00b0'}</div>
      </div>:

      <div className={!isdarkMode?'weather-card active-weather-card':'weather-card active-weather-card light-active-weather-card'}>

        <div className='active-card-day'>
          {day} <span className='time-india'>{time}</span>
        </div>

        <div className='active-card-mid'>
          <div className='active-card-temp'>{temp}{'\u00b0'}</div>
          <div className='active-card-img'><img src={imgsrc} alt='weather'/></div>
        </div>

        <div className='active-card-bottom'>
          <span className='bottom-prop'>Min Temp: <strong>{temp_min}{'\u00b0'}</strong></span>
          <span className='bottom-prop'>Max Temp: <strong>{temp_max}{'\u00b0'}</strong></span>
          <span className='bottom-prop'>Wind Speed: <strong>{speed}km/hr</strong></span>
          <span className='bottom-prop'>Humidity: <strong>{humidity}g/m<sup>3</sup></strong></span>
        </div>
        

      </div>

    }
    </>
  )
}

export default OneDayCard
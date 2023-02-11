import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './HourCard.css'

const useCurrentCallback = (callback) => {
  const reference = React.useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current?.(...args);
  };
};

const HourCard = ({hour_details}) => {

  // console.log(hour_details)
  let {temp,weather,humidity,hour,speed,imgsrc} =hour_details

  let fetcher
  let init_hour
  if(hour>=13){
    fetcher = ' PM'
    init_hour = hour-12
    hour = init_hour +':00' + fetcher
  }

  if(hour<=12){
    fetcher = ' AM'
    hour = hour +':00' + fetcher
  }


  return (
    <>
    {
    
      <div className={'weather-card'}>

          <div className='weather-card-day'>
            {hour}
          </div>
          <div className='weather-card-img'><img src={imgsrc} /></div>
          <div className='weather-card-temp'>{temp}{'\u00b0'}</div>
      </div>

     

    }
    </>
  )
}

export default HourCard
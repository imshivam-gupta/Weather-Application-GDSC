import React from 'react'
import { useSelector } from 'react-redux';
import './HourCard.css'


const HourCard = ({hour_details}) => {

  // console.log(hour_details)
  let {temp,hour,imgsrc} =hour_details

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
  
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;


  return (
    <>
    {
    
      <div className={!isdarkMode ? 'hour-card' :'hour-card light-hour-card'}>

          <div className='hour-card-day'>
            {hour}
          </div>
          <div className='hour-card-img'><img src={imgsrc} alt='weather' /></div>
          <div className='hour-card-temp'>{temp}{'\u00b0'}</div>
      </div>

     

    }
    </>
  )
}

export default HourCard
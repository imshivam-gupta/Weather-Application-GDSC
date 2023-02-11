import React from 'react'
import { useSelector } from 'react-redux';
import './HourlyCardSection.css'
import HourCard from '../HourCard/HourCard'
import { returnImagesSource } from '../../services/ImageGiver';


const HourlyCardSection = () => {

    const d = new Date();
    let curr_hour = d.getHours()
    let id=0;

    const weatherSelect = useSelector((state) => state.weatherDetails)
    const { weatherInfo } = weatherSelect
    const hourlyArray = weatherInfo ? weatherInfo.slice(0, 5) :[];
    
  
    

    for(let i=0;i<hourlyArray.length;i++){
      
        let start_hour = curr_hour;
        for(let i=0;i<hourlyArray.length;i++)
          {hourlyArray[i]["hour"]=start_hour; start_hour+=5;}

        hourlyArray[i]["imgsrc"] = returnImagesSource(hourlyArray[i].weather[0].description)

    }

      
  return (
    <div className='hour-weather-section'>
        <h1 className='heading-for-hour'>5 Hour Weather</h1>
        <div className='hourly-cards'>
            { hourlyArray && hourlyArray.map((hour_details) => ( <HourCard key={id++} hour_details={hour_details} />))}
        </div>
    </div>
  )
}

export default HourlyCardSection
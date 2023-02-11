import React from 'react'
import { useSelector } from 'react-redux';
import { returnImagesSource } from '../../services/ImageGiver';
import OneDayCard from '../OneDayCard/OneDayCard'
import './Next7DayCard.css'

const Next7DayCard = () => {
  
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  let id = 0;

  const weatherSelect = useSelector((state) => state.weatherDetails)
  const { loading, weatherInfo } = weatherSelect
  const slicedArray = weatherInfo ? weatherInfo.slice(0, 7) :[];

  for(let i=0;i<slicedArray.length;i++){
    slicedArray[i]["day"]=weekday[i];
    (day===slicedArray[i]["day"]) ? slicedArray[i]["isToday"]=true : slicedArray[i]["isToday"]=false
    slicedArray[i]["imgsrc"]=returnImagesSource(slicedArray[i].weather[0].description)     
  }

  return (
    <div className='weather-item-cards'>
      { slicedArray && slicedArray.map((day_details) => (<OneDayCard key={id++} day_details={day_details}/>))}
    </div>
  )
}

export default Next7DayCard
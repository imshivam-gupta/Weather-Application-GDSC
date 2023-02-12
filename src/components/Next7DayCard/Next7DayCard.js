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
    
  var tempInfo =[
    {"temp":24.58,"feels_like":24.03,"temp_min":23.75,"temp_max":24.58,"humidity":36,"dt":1676073600,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"speed":3.33},
    {"temp":27.72,"feels_like":27.91,"temp_min":27.72,"temp_max":27.72,"humidity":47,"dt":1676106000,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":6.27},
    {"temp":24.91,"feels_like":24.92,"temp_min":24.91,"temp_max":24.91,"humidity":56,"dt":1676138400,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"speed":4.38},
    {"temp":24.21,"feels_like":23.81,"temp_min":24.21,"temp_max":24.21,"humidity":43,"dt":1676170800,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"speed":3.54},
    {"temp":27.12,"feels_like":27.8,"temp_min":27.12,"temp_max":27.12,"humidity":54,"dt":1676203200,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":8.15},
    {"temp":25.74,"feels_like":25.54,"temp_min":25.74,"temp_max":25.74,"humidity":45,"dt":1676235600,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"speed":3.26},
    {"temp":29.23,"feels_like":28.49,"temp_min":29.23,"temp_max":29.23,"humidity":36,"dt":1676268000,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"speed":2.35},
    {"q":"Mumbai"}
  ]

  
  const slicedArray = weatherInfo.length>0 ? weatherInfo.slice(0, 7):tempInfo.slice(0,7)

  for(let i=0;i<slicedArray.length;i++){
    slicedArray[i]["day"]=weekday[i];
    (day===slicedArray[i]["day"]) ? slicedArray[i]["isToday"]=true : slicedArray[i]["isToday"]=false
    slicedArray[i]["imgsrc"]=returnImagesSource(slicedArray[i].weather[0].description)     
  }

  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;


  return (
    <div className={!isdarkMode?'weather-item-cards':'weather-item-cards active-weather-item-cards'}>
      { slicedArray && slicedArray.map((day_details) => (<OneDayCard key={id++} day_details={day_details}/>))}
    </div>
  )
}

export default Next7DayCard
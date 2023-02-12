import React from 'react'
import { useSelector } from 'react-redux';
import './HourlyCardSection.css'
import HourCard from '../HourCard/HourCard'
import { returnImagesSource } from '../../services/ImageGiver';


const HourlyCardSection = () => {

    const d = new Date();
    let curr_hour = d.getHours()
    let id=0;

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
  

    const weatherSelect = useSelector((state) => state.weatherDetails)
    const { weatherInfo } = weatherSelect
    const hourlyArray = weatherInfo.length>0 ? weatherInfo.slice(0, 5) : tempInfo.slice(0,5);
    

    
    

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
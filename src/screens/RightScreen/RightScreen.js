import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './RightScreen.css'
import OtherCityCard from '../../components/OtherCityCard/OtherCityCard'
import { AddOtherCity } from '../../redux/actions'
import WeatherNewsCard from '../../components/WeatherNewsCard/WeatherNewsCard'

const RightScreen = () => {
  
  const weatherNews = [
    {
      _id:'a',
      headline:'Weather Update: Maximum temperature to surge more'
    },
    {
      _id:'b',
      headline:'Rainfall predicted in Haryana, Punjab, Chandigarh, Himachal Pradesh'
    },
    {
      _id:'c',
      headline:'Winter bids an early Goodbye this year'
    },
    {
      _id:'d',
      headline:'Driest winter so far in six years'
    },
    {
      _id:'e',
      headline:'Monsoon to come soon in north'
    },
    {
      _id:'f',
      headline:'Global warming responsible for less rainfall'
    }
  ]

  const otherWeathers         = useSelector((state) => state.otherWeathers)
  const { otherWeathersList } = otherWeathers
  const [listWeather,setListWeather] = useState(otherWeathersList)
  
  const weatherDetails = useSelector((state) => state.weatherDetails)
  const {  weatherInfo } = weatherDetails

  if(listWeather) {
    for(let i=0;i<listWeather.length;i++) {listWeather[i].isDragging=false; listWeather[i]._id=i.toString()}
    // console.log(otherWeathersList);
  }
  
  const dispatch = useDispatch();

  const addcityHandler = () =>{
    let city = prompt("Enter city name to append in List", "None");
    if(city!=="None" && city!=="") dispatch(AddOtherCity(city))
    setListWeather(otherWeathersList)
  }


  useEffect(()=>{
      setListWeather(otherWeathersList)
      // console.log(listWeather)
  },[otherWeathersList,listWeather])
  
  
  

  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;


  return (
    

    <div className={!isdarkMode?'right-secn':'right-secn light-right-secn'}>

    <div className='other-city-secn'>


      <div className='heading-other-city'>
         <div>Other Cities </div> <i onClick={addcityHandler} className='fas fa-add'></i>
      </div>

     
      
      
      

              <div className='other-city-list'>
                    {
                      listWeather && listWeather.length>0 ? listWeather.map( (oth_city,index) =>  {
                           return (
                              <div
                              >
                                <OtherCityCard 
                                  key={oth_city._id} 
                                  oth_city={oth_city} 
                                /> 
                              </div>
                              )}
                          ) : <div className='empty-city-box' onClick={addcityHandler}> Add City to Watchlist </div>}
                </div>

      
    </div>



    <div className='latest-news-secn'>


        <div className='heading-latest-news'>
           {weatherInfo && weatherInfo[7] ? weatherInfo[7].q : ''} Weather Reports  
        </div>

     
      
      
      

              <div className='latest-news-list' >
                    {
                      weatherNews.map( (wthr) =>  {
                           return (
                                <WeatherNewsCard
                                  key={wthr._id} 
                                  wthr={wthr} 
                                /> 

                              )}
                    )}
              </div>
            
        

    </div>

    </div>
    
  )
}


export default RightScreen
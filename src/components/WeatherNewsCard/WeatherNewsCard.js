import React from 'react'
import './WeatherNewsCard.css'
import { useSelector } from 'react-redux';



const WeatherNewsCard = ({wthr}) => {
  
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;


  return (
    <div className={!isdarkMode?'weather-news-card':'weather-news-card light-weather-news-card'}>
      {wthr.headline}
    </div>
  )
}

export default WeatherNewsCard
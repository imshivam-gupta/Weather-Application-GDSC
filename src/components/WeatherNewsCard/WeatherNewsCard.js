import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getWeatherAction, removeOtherCity } from '../../redux/actions';
import { returnImagesSource } from '../../services/ImageGiver';
import './WeatherNewsCard.css'

import { useDrag } from "react-use-gesture";
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
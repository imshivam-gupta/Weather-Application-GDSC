import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getWeatherAction, removeOtherCity } from '../../redux/actions';
import { returnImagesSource } from '../../services/ImageGiver';
import './WeatherNewsCard.css'

import { useDrag } from "react-use-gesture";



const WeatherNewsCard = ({wthr}) => {


  return (
    <div className='weather-news-card'>
      {wthr.headline}
    </div>
  )
}

export default WeatherNewsCard
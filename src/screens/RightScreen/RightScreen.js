import React from 'react'
import { useSelector } from 'react-redux'
import './RightScreen.css'
import OtherCityCard from '../../components/OtherCityCard/OtherCityCard'


const RightScreen = () => {

  const otherWeathers         = useSelector((state) => state.otherWeathers)
  const { otherWeathersList } = otherWeathers

  let id = 0

  return (
    <div className='right-secn'>

      <h1> Other Cities </h1>
      
      <div className='other-city-list'>
        {
          otherWeathersList && otherWeathersList.map(
          (oth_city =>  (<OtherCityCard key={id++} oth_city={oth_city}/>))
        )}

      </div>

      <button className='add-city'>ADD NEW CITY</button>


    </div>

  )
}

export default RightScreen
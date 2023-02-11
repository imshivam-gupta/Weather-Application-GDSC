import React from 'react'
import { useDispatch } from 'react-redux';
import { removeOtherCity } from '../../redux/actions';
import { returnImagesSource } from '../../services/ImageGiver';
import './OtherCityCard.css'

const OtherCityCard = ({oth_city}) => {

  let condition = oth_city.weather[0].description;
  let a = condition[0].toUpperCase();
  condition = a + condition.substring(1)

  let imgsrc;

  const dispatch = useDispatch()

  imgsrc = returnImagesSource(oth_city.weather[0].description);

  const DeleteOtherCity = () => {
    dispatch(removeOtherCity(oth_city.name))
  }


  return (
    <div className='other-city-card'>

      <div className='location-name-condn'>
        <span>{oth_city.name}</span>
        <span>{condition}</span>
      </div>

    
      <div className='location-weather-img'>
        <img src={imgsrc}></img>
        <span>{oth_city.temp}</span>
      </div>
      <div className='location-del-icon'>
        <i className='fas fa-trash' onClick={DeleteOtherCity} style={{'cursor':'pointer'}}/>
      </div>
    </div>
  )
}

export default OtherCityCard
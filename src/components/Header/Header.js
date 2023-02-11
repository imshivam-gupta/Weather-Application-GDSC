import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddOtherCity, getWeatherAction } from '../../redux/actions'
import './Header.css'

const Header = () => {

    const dispatch = useDispatch()
    const [citySearch,setCitySearch] = useState('')
    
    const submitHandler= (e) =>{
        e.preventDefault()
        dispatch(getWeatherAction(citySearch))
    }

    const weatherDetails = useSelector((state) => state.weatherDetails)
    const { loading, weatherInfo } = weatherDetails
    

    const AddHandler = () => {
        let city = prompt("Enter city name to append in List", "None");
        if(city!="None" && city!="") dispatch(AddOtherCity(city))
    }
    
    const _handleKeyDown =  function(e) {
        if (e.key === 'Enter') {
          submitHandler(e)
        }
    }


  return <>
  
    {
        loading ? <h1>Loading...</h1> :
    
        <header className='nav-bar'>

                <div className='nav-left-sec' style={{cursor:'pointer'}}>

                    <div className='nav-icons' onClick={AddHandler}>
                        <i className="fa-solid fa-plus" />
                    </div>

                    <div className='nav-icons'>
                        <i className="fa-sharp fa-solid fa-bell" />
                    </div>

                    <div className='curr-loc-name'>
                        <i className='fa-solid fa-location-dot loc-pin' /> 
                        <strong>{ weatherInfo && weatherInfo[7] ? weatherInfo[7].q : 'Seattle'}</strong>  
                    </div>

                </div>

                <div className='nav-mid-sec' >
                    <i className="fa-solid fa-magnifying-glass" onClick={submitHandler}/>

                    <input 
                        type='text' 
                        className='search-bar' 
                        placeholder='Search City...'
                        onChange={(e)=>setCitySearch(e.target.value)}
                        onKeyDown={_handleKeyDown}
                    />

                </div>

                <div className='nav-right-sec'>
                    <div className='mode-toggler' style={{'cursor':'pointer'}}>
                        <i className="fa-solid fa-moon active" />
                        <i className="fa-solid fa-sun"></i>
                    </div>
                    <img src="images/user-img.png" className='user-img'></img>
                </div>



        </header>

    }

    </>
}

export default Header
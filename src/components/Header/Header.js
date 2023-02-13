import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddOtherCity, getWeatherAction, handledarkMode } from '../../redux/actions'
import './Header.css'

const Header = () => {

    const dispatch = useDispatch()
    const [citySearch,setCitySearch] = useState('')

    
    const submitHandler= (e) =>{
        e.preventDefault()
        dispatch(getWeatherAction(citySearch))
    }
    
    var tempInfo =[{"temp":24.58,"feels_like":24.03,"temp_min":23.75,"temp_max":24.58,"humidity":36,"dt":1676073600,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"speed":3.33},{"temp":27.72,"feels_like":27.91,"temp_min":27.72,"temp_max":27.72,"humidity":47,"dt":1676106000,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":6.27},{"temp":24.91,"feels_like":24.92,"temp_min":24.91,"temp_max":24.91,"humidity":56,"dt":1676138400,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"speed":4.38},{"temp":24.21,"feels_like":23.81,"temp_min":24.21,"temp_max":24.21,"humidity":43,"dt":1676170800,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"speed":3.54},{"temp":27.12,"feels_like":27.8,"temp_min":27.12,"temp_max":27.12,"humidity":54,"dt":1676203200,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":8.15},{"temp":25.74,"feels_like":25.54,"temp_min":25.74,"temp_max":25.74,"humidity":45,"dt":1676235600,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"speed":3.26},{"temp":29.23,"feels_like":28.49,"temp_min":29.23,"temp_max":29.23,"humidity":36,"dt":1676268000,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"speed":2.35},{"q":"Mumbai"}]
    
    const weatherDetails = useSelector((state) => state.weatherDetails)
    let { loading, weatherInfo } = weatherDetails

    const mode = useSelector((state) => state.darkMode);
    const { isdarkMode } = mode;

    const switchDarkMode = () => {
        isdarkMode
          ? dispatch(handledarkMode(false))
          : dispatch(handledarkMode(true));
    };

    const AddHandler = () => {
        let city = prompt("Enter city name to append in List", "None");
        if(city!=="None" && city!=="") dispatch(AddOtherCity(city))
    }
    
    const _handleKeyDown =  function(e) {
        if (e.key === 'Enter') {
          submitHandler(e)
        }
    }
    
    
  return <>
  
    {
        loading && <h1>Loading...</h1>}
    
        {<header className={!isdarkMode?'nav-bar':'nav-bar light-nav'}>

                <div className='nav-left-sec'>

                    <div className='nav-icons light-icons' onClick={AddHandler} style={{cursor:'pointer'}}>
                        <i className="fa-solid fa-plus" />
                    </div>

                    {/* <div className='nav-icons light-icons' style={{cursor:'pointer'}}>
                        <i className="fa-sharp fa-solid fa-bell" />
                    </div> */}

                    <div className='curr-loc-name'>
                        <i className='fa-solid fa-location-dot loc-pin' /> 
                        <strong>{ weatherInfo && weatherInfo[7] ? weatherInfo[7].q : tempInfo[7].q}</strong>  
                    </div>

                </div>

                <div className='nav-mid-sec light-nav-mid-sec' >
                    <i className="fa-solid fa-magnifying-glass" onClick={submitHandler}/>

                    <input 
                        type='text' 
                        className='search-bar light-search-bar' 
                        placeholder='Search City...'
                        onChange={(e)=>setCitySearch(e.target.value)}
                        onKeyDown={_handleKeyDown}
                    />

                </div>

                <div className='nav-right-sec'>
                    <div className='mode-toggler' style={{'cursor':'pointer'}} onClick={switchDarkMode}>
                        <i className="fa-solid fa-moon dark-active" />
                        <i className="fa-solid fa-sun light-active"></i>
                    </div>
                </div>

                <div className='mode-toggle-phone' style={{'display':'none'}} onClick={switchDarkMode}>
                        <i className="fa-solid fa-moon dark-active" />
                        <i className="fa-solid fa-sun light-active"></i>
                </div>



        </header>

    }

    </>
}

export default Header
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HourlyCardSection from '../../components/HourlyCardSection/HourlyCardSection'
import Next7DayCard from '../../components/Next7DayCard/Next7DayCard'
import TodayCard from '../../components/TodayCard/TodayCard'
import TommorowCard from '../../components/TommorowCard/TommorowCard'
import ViewToggler from '../../components/ViewToggler/ViewToggler'
import './LeftScreen.css'

const LeftScreen = () => {

  return (
    
    <div className='left-screen'>

        <ViewToggler />
        
        <Routes>
            <Route path = "/"          element = {<TodayCard />} />
            <Route path = "/tommorow"  element = {<TommorowCard />} />
            <Route path = "/nextweek"  element = {<Next7DayCard />} />
        </Routes>

        <HourlyCardSection />



    </div>
  )
}

export default LeftScreen
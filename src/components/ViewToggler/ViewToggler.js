import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './ViewToggler.css'

const ViewToggler = () => {


  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;

  return (
    <div className={!isdarkMode ? 'mini-nav-view' :'mini-nav-view light-mini-nav-view'}>
            <NavLink to = '/' className="tab">         Today        </NavLink >
            <NavLink to = '/tommorow' className="tab"> Tommorow     </NavLink>
            <NavLink to = '/nextweek' className='tab'> This Week </NavLink>
    </div>
  )
}

export default ViewToggler
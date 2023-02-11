import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ViewToggler.css'

const ViewToggler = () => {
  return (
    <div className='mini-nav-view'>
            <NavLink to = '/' className="tab">         Today        </NavLink >
            <NavLink to = '/tommorow' className="tab"> Tommorow     </NavLink>
            <NavLink to = '/nextweek' className='tab'> This Week </NavLink>
    </div>
  )
}

export default ViewToggler
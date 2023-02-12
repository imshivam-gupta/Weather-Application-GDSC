import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {


  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;

  return (
    <footer className={!isdarkMode?'':'light-footer'}>
        <div className='social-links'>
            <Link to='https://github.com/imshivam-gupta'><i class="fa-brands fa-github"></i></Link>
            <Link to='https://www.linkedin.com/in/shivam-gupta-bbb669226/'><i class="fa-brands fa-instagram"></i></Link>
            <Link to='https://www.linkedin.com/in/shivam-gupta-bbb669226/'><i class="fa-brands fa-linkedin-in"></i></Link>
        </div>

        <div className='credit-displayer'>
            <span> Copyrights &#169; 2023</span>
            <span>Shivam Gupta</span>
        </div>
    </footer>
  )
}

export default Footer
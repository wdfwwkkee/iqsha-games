import React, {useState} from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo/5378462__0.jpg'
import AccountPage from 'Layouts/AccountPage/AccountPage'


const Header = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <header className="App-header">
        <div className='header-container'>
          <div className='Logo'>
            <Link to='/'><img className='Logo-img' src={Logo} alt="" /> </Link>

          </div>
          <div className='nav-bar'>
            <div className='nav-links'><Link className='link-el' to='/'></Link></div> |
            <div className='nav-links'><Link className='link-el' to='/Iqsha-games'>GAMES</Link></div> |
            <div className='nav-links'><Link className='link-el' to='/account'>ACCOUNT</Link></div> |
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
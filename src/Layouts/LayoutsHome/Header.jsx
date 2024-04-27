import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
import Logo  from '../../assets/images/logo/5378462__0.jpg'

const Header = () => {
  return (
    <div style={{marginBottom : 50}}>
      <header className="App-header">
        <div className='header-container'>
          <div className='Logo'>
            <Link to='/'><img className='Logo-img' src={ Logo } alt="" /> </Link>
            
          </div>
          <div className='nav-bar'> 
            <div className='nav-links'><Link className='link-el' to='/'>HOME</Link></div> |
            <div className='nav-links'><Link className='link-el' to='/games'>GAMES</Link></div> |
            <div className='nav-links'><Link className='link-el' to='/contacts'>CONTACT</Link></div> 
          </div>
        </div>
          
          <div className='acc'>
              <button>
                <div className='Acc'>Acc</div>
                {/* <img src="public/97-1024.webp" alt="" /> */}
              </button>
          </div>
        </header>
    </div>
  )
}

export default Header
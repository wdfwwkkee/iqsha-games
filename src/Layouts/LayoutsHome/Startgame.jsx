import React from 'react'
import '../Styles/Startgame.css'


const Startgame = () => {
  return (
    <div className='Wrapper'>
      <div className='scoreel'>
        <div className='yourscore'> Ваш счет: </div>
        <div className='btnel'>
          <button className='startbtn' onClick={() => { }}>Начать игру</button>
        </div>
      </div>
    </div>

  )
}

export default Startgame
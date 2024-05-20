import React from 'react'
import ConfettiExplosion from 'react-confetti-explosion';

const Confetti = () => {
  return (
    <ConfettiExplosion style={{position : "absolute", bottom : 0, left : "50%"}} width={1500} force={3} duration={2900 } />
  )
}

export default Confetti
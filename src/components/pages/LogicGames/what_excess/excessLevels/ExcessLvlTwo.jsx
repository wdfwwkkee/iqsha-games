import React from 'react'
import Candy2 from 'assets/images/logic_games/excess/candy_2.png'
import Candy3 from 'assets/images/logic_games/excess/candy_3.png'
import Candy1 from 'assets/images/logic_games/excess/candy_1.png'
import Fruit3 from 'assets/images/logic_games/excess/fruit_3.png'

const ExcessLvlTwo = ({ style, checkAnswer }) => {
  return (
    <div className={style.answerList}>
    <button onClick={() => checkAnswer(false)} className={style.answer}><img src={Candy2} alt="" /></button>
    <button onClick={() => checkAnswer(false)} className={style.answer}><img src={Candy3} alt="" /></button>
    <button onClick={() => checkAnswer(true)} className={style.answer}><img src={Fruit3} alt="" /></button>
    <button onClick={() => checkAnswer(false)} className={style.answer}><img src={Candy1} alt="" /></button>
  </div>
  )
}

export default ExcessLvlTwo
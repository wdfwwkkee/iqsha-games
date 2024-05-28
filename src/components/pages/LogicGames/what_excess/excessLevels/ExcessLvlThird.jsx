import React from 'react'
import Candy4 from 'assets/images/logic_games/excess/candy_4.png'
import FastFood1 from 'assets/images/logic_games/excess/fast_food_1.png'
import Candy5 from 'assets/images/logic_games/excess/candy_5.png'
import Candy6 from 'assets/images/logic_games/excess/candy_6.png'
const ExcessLvlThird = ({ style, checkAnswer }) => {
    return (
        <div className={style.answerList}>
            <button onClick={() => checkAnswer(false)} className={style.answer}><img src={Candy4} alt="" /></button>
            <button onClick={() => checkAnswer(true)} className={style.answer}><img src={FastFood1} alt="" /></button>
            <button onClick={() => checkAnswer(false)} className={style.answer}><img src={Candy6} alt="" /></button>
            <button onClick={() => checkAnswer(false)} className={style.answer}><img src={Candy5} alt="" /></button>
        </div>
    )
}

export default ExcessLvlThird
import React from 'react'
import cucumber from 'assets/images/logic_games/one_word/cucumber.png'
import tomato from 'assets/images/logic_games/one_word/tomato.png'
import watermelon from 'assets/images/logic_games/one_word/watermelon.png'
import orange from 'assets/images/logic_games/one_word/orange.png'


const OneWordLevelOne = ({ style, checkAnswer }) => {
    return (
        <div className={style.answerList}>
            <button onClick={() => checkAnswer(false)}><img src={cucumber} alt="" /></button>
            <button onClick={() => checkAnswer(false)}><img src={watermelon} alt="" /></button>
            <button onClick={() => checkAnswer(true)}><img src={tomato} alt="" /></button>
            <button onClick={() => checkAnswer(false)}><img src={orange} alt="" /></button>
        </div>
    )
}

export default OneWordLevelOne
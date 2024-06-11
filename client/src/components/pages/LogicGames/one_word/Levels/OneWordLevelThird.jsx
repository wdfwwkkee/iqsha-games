import React from 'react'
import bear from 'assets/images/logic_games/one_word/bear.png'
import turtle from 'assets/images/logic_games/one_word/turtle.png'
import lion from 'assets/images/logic_games/one_word/lion.png'
import gepard from 'assets/images/logic_games/one_word/gepard.png'

const OneWordLevelThird = ({ style, checkAnswer }) => {
    return (
        <div className={style.answerList}>
            <button onClick={() => checkAnswer(false)}><img src={bear} alt="" /></button>
            <button onClick={() => checkAnswer(false)}><img src={gepard} alt="" /></button>
            <button onClick={() => checkAnswer(false)}><img src={lion} alt="" /></button>
            <button onClick={() => checkAnswer(true)}><img src={turtle} alt="" /></button>
        </div>
    )
}

export default OneWordLevelThird
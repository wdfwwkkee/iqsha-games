import React from 'react'
import rat from 'assets/images/logic_games/one_word/rat.png'
import tiger from 'assets/images/logic_games/one_word/tiger.png'
import elephant from 'assets/images/logic_games/one_word/elephant.png'
import delph from 'assets/images/logic_games/one_word/delph.png'

const OneWordLevelTwo = ({ style, checkAnswer }) => {
    return (
        <div className={style.answerList}>
            <button onClick={() => checkAnswer(true)}><img src={rat} alt="" /></button>
            <button onClick={() => checkAnswer(false)}><img src={tiger} alt="" /></button>
            <button onClick={() => checkAnswer(false)}><img src={delph} alt="" /></button>
            <button onClick={() => checkAnswer(false)}><img src={elephant} alt="" /></button>
        </div>
    )
}

export default OneWordLevelTwo
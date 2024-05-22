import React from 'react'
import DroppableHole from '../Droppable/DroppableHole';
import Image1 from 'assets/images/math_games/number/numbers_5.png'
import Image2 from 'assets/images/math_games/number/numbers_4.png'
const ContinueSeriesLevelTwo = ({ style, currentItem, dragItems }) => {
    return (
        <div>
            <div className={style.imagesList}>
                <img src={Image1} alt="" />
                <DroppableHole id="droppable">
                    {!currentItem ? "Перетащи сюда" : <div>{currentItem}</div>}
                </DroppableHole>
                <img src={Image2} alt="" />
            </div>
            <div className={style.answersList}>
                {dragItems.map((item, index) => <div key={index}>{item}</div>)}
            </div>
        </div>
    )
}

export default ContinueSeriesLevelTwo
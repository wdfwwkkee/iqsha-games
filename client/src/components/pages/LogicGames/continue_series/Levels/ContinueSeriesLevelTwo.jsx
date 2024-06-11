import React from 'react'
import Voron from 'assets/images/logic_games/continue_series/voron.png'
import Spike from 'assets/images/logic_games/continue_series/spike.png'

import ContinueSeriesDroppable from '../DroppableHole/ContinueSeriesDroppable';
const ContinueSeriesLevelTwo = ({ style, currentItem, dragItems }) => {
    return (
        <div>
            <div className={style.seriesList}>
                <img src={Voron} alt="" />
                <img src={Spike} alt="" />
                <img src={Voron} alt="" />
                <ContinueSeriesDroppable id="droppable">
                    {!currentItem ? "Перетащи сюда" : <div>{currentItem}</div>}
                </ContinueSeriesDroppable>
            </div>
            <div className={style.answersList}>
                {dragItems.map((item, index) => <div key={index}>{item}</div>)}
            </div>
        </div>
    )
}

export default ContinueSeriesLevelTwo
import React from 'react'
import ContinueSeriesDroppable from '../DroppableHole/ContinueSeriesDroppable';
import RobEmote4 from 'assets/images/logic_games/continue_series/roblox_4.png'
import RobEmote3 from 'assets/images/logic_games/continue_series/roblox_3.png'

const ContinueSeriesLevelThird = ({ style, currentItem, dragItems }) => {
    return (
        <div>
            <div className={style.seriesList}>
                <img src={RobEmote4} alt="" />
                <img src={RobEmote3} alt="" />
                <img src={RobEmote4} alt="" />
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

export default ContinueSeriesLevelThird
import React from 'react'
import ContinueSeriesDroppable from '../DroppableHole/ContinueSeriesDroppable';
import DiamondImage from 'assets/images/logic_games/continue_series/diamond.png'
import EmeraldImage from 'assets/images/logic_games/continue_series/emerald.png'
const ContinueSeriesLevelOne = ({ style, currentItem, dragItems }) => {


  return (
    <div>
      <div className={style.seriesList}>
        <img src={DiamondImage} alt="" />
        <img src={EmeraldImage} alt="" />
        <img src={DiamondImage} alt="" />
        <ContinueSeriesDroppable id="droppable">
          {!currentItem ? "" : <div>{currentItem}</div>}
        </ContinueSeriesDroppable>
      </div>
      <div className={style.answersList}>
        {dragItems.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  )
}

export default ContinueSeriesLevelOne
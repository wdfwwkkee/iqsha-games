import React from 'react'
import DroppableHole from '../Droppable/DroppableHole';
import Image1 from 'assets/images/math_games/number/num_1.png'
import Image2 from 'assets/images/math_games/number/num_3.png'

const NumberLevelOne = ({ style, currentItem, dragItems }) => {


  return (
    <div>
      <div className={style.imagesList}>
        <img src={Image1} alt="" />
        <DroppableHole id="droppable">
          {!currentItem ? "Перетащи сюда объект" : <div>{currentItem}</div>}
        </DroppableHole>
        <img src={Image2} alt="" />
      </div>
      <div className={style.answersList}>
        {dragItems.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  )
}

export default NumberLevelOne
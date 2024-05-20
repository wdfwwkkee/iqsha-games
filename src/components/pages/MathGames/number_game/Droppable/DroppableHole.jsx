import React from 'react'
import { useDroppable } from '@dnd-kit/core';
import style from './droppable.module.scss'

const DroppableHole = (props) => {
    
    const { isOver, setNodeRef, active, over } = useDroppable({
        id: props.id,
        data : {
            type : "type1"
        }
    });
    console.log(over)
    const DndStyle = {
        opacity: isOver ? 1 : 0.5,
        border : active ? 'none' : '1px dashed red'
    };

    return (
        <div className={style.drop} ref={setNodeRef} style={DndStyle}>
            {props.children}
        </div>
    );
}

export default DroppableHole
import React from 'react'
import { useDroppable } from '@dnd-kit/core';
import style from './droppable.module.scss'

const DroppableHole = (props) => {
    const { setNodeRef, active } = useDroppable({
        id: props.id,
        data : {
            type : "type1"
        }
    });
    
    const DndStyle = {
        border: active ? "2px solid orange" : 'none',
    };

    return (
        <div className={style.drop} ref={setNodeRef} style={DndStyle}>
            {props.children}
        </div>
    );
}

export default DroppableHole
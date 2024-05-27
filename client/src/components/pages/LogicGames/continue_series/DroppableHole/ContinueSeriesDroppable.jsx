import React from 'react'
import { useDroppable } from '@dnd-kit/core';
import style from './droppableContinue.module.scss'

const ContinueSeriesDroppable = (props) => {
    const { setNodeRef, active } = useDroppable({
        id: props.id,
        data: {
            type: "type1"
        }
    });

    const DndStyle = {
        border: active ?  '2px solid orange' : '',

    };

    return (
        <div className={style.drop} ref={setNodeRef} style={DndStyle}>
            {props.children}
        </div>
    );
}

export default ContinueSeriesDroppable
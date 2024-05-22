import React from 'react'
import style from './continue_series_drag.module.scss'
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const ContinueSeriesDragItems = (props) => {
    const { attributes, listeners, setNodeRef: setFirstRef, transform } = useDraggable({
        id: props.id,
        data: {
            name: props.name,
            supports: ['type1', 'type2'],
        }
    });
    const DndStyle = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
        cursor: 'grab'
    };


    return (
        <div ref={setFirstRef} className={style.item} style={DndStyle} {...attributes} {...listeners}>
            {props.children}
        </div>
    );
}

export default ContinueSeriesDragItems
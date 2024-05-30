import React from 'react'
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import style from './dragitem.module.scss'

const DragItem = (props) => {
    const { attributes, listeners, setNodeRef: setFirstRef, transform } = useDraggable({
        id: props.id,
        data: {
            name : props.name,
            supports: ['type1', 'type2'],
        }
    });
    const DndStyle = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
        cursor : 'grab',
        touchAction : 'none'
    };


    return (
        <div ref={setFirstRef} className={style.item} style={DndStyle} {...attributes} {...listeners}>
            {props.children}
        </div>
    );
}

export default DragItem
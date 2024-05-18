import React from 'react'
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import style from './dragitem.module.scss'

const DragItem = (props) => {
    const { attributes, listeners, setNodeRef: setFirstRef, transform } = useDraggable({
        id: props.id,
        data : {
            supports: ['type1', 'type2'],
        }
    });
    const DndStyle = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
    };


    return (
        <div>
            <button ref={setFirstRef} className={style.item} style={DndStyle} {...attributes} {...listeners}>
                {props.children}
            </button>
        </div>
    );
}

export default DragItem
import Header from 'Layouts/LayoutsHome/Header'
import React, { useEffect, useState } from 'react'
import { DndContext } from '@dnd-kit/core';
import DragItem from './DragItem';
import DroppableHole from './DroppableHole';

const NumberMathGame = () => {
    const [parent, setParent] = useState(null);
    const draggableOne = (
        <DragItem id="draggableOne">
            DraggableOne
        </DragItem>
    );
    const draggableTwo = (
        <DragItem id="draggableTwo">
            DraggableTwo
        </DragItem>
    );
    const draggableThird = (
        <DragItem id="draggableThird">
            DraggableThird
        </DragItem>
    );

    const [dragItems, setDragItems] = useState([draggableOne, draggableTwo, draggableThird])
    const [currentItem, setCurrentItem] = useState()

    function handleDragEnd(event) {
        const { active, over } = event;
        setParent((prev) => over ? active.id : prev);
        if (over) {
            const findIndex = dragItems.findIndex(item => item.props.id === active.id)
            setCurrentItem(dragItems[findIndex])
            dragItems.splice(findIndex, 1)
            if (parent) {
                setDragItems([...dragItems, currentItem])
            }
        }
    }
    return (
        <div>
            <Header />
            <main>
                <DndContext onDragEnd={handleDragEnd}>
                    {dragItems.map((item, index) => <div key={index}>{item}</div>)}
                    <DroppableHole id="droppable">
                        {!parent ? "Drop here" : <div>{currentItem}</div>}
                    </DroppableHole>
                </DndContext>
            </main>
        </div>
    )
}

export default NumberMathGame
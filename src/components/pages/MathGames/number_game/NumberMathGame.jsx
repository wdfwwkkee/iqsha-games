import Header from 'Layouts/LayoutsHome/Header'
import React, { useEffect, useState } from 'react'
import { DndContext } from '@dnd-kit/core';
import DragItem from './DragItem/DragItem';
import DroppableHole from './Droppable/DroppableHole';
import style from './number_game.module.scss'
import { ToastContainer, toast } from "react-toastify";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";


// LevelOne
import Image1 from 'assets/images/math_games/number/num_1.png'
import Image2 from 'assets/images/math_games/number/num_3.png'

import Image3 from 'assets/images/math_games/number/num_2.png'

import Image4 from 'assets/images/math_games/number/numbers_1.png'
import Image5 from 'assets/images/math_games/number/numbers_2.png'

//LevelTwo
import Image6 from 'assets/images/math_games/number/numbers_3.png'

import Image7 from 'assets/images/math_games/number/numbers_4.png'
import Image8 from 'assets/images/math_games/number/numbers_5.png'



const draggableOne = (
    <DragItem name="20" id="draggableOne">
        <img className={style.answer} src={Image4} alt="" />
    </DragItem>
);
const draggableTwo = (
    <DragItem name="2" id="draggableTwo">
        <img className={style.answer} src={Image3} alt="" />
    </DragItem>
);
const draggableThird = (
    <DragItem name="10" id="draggableThird">
        <img className={style.answer} src={Image5} alt="" />
    </DragItem>
);

const NumberMathGame = () => {
    const [dragItems, setDragItems] = useState([draggableOne, draggableTwo, draggableThird])
    const [currentItem, setCurrentItem] = useState()
    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)
    const answerOne = 2;
    const answerTwo = 2;
    const answerThrid = 2;
    const [currentAnswer, setCurrentAnswer] = useState('')

    function checkForCompleted() {
        if (Number(value) < 3) {
            setValue(prev => (Number(prev) + 1).toString())
            setIsCompleted(false)
        }
    }

    const handleChange = (event, newValue) => {
        if (isCompleted) {
            setValue(newValue);
        }
        else {
            toast("Сначала реши пример!");
        }
    };
    useEffect(() => {
        if (Number(value) === 3 && isCompleted) {

            setIsOver(true)
        }
    }, [isCompleted, value])

    function checkAnswer() {
        switch (value) {
            case '1':
                if (Number(currentAnswer) === answerOne) {
                    toast("Молодец!");
                    setIsCompleted(true)
                    setCurrentAnswer("")
                    setCurrentItem(null)
                    checkForCompleted();
                } else {
                    toast("Ответ неправильный");
                }
                break;
            case '2':
                if (Number(currentAnswer) === answerTwo) {
                    toast("Молодец!");
                    setIsCompleted(true)
                    checkForCompleted();
                } else {
                    toast("Ответ неправильный");
                }
                break;
            case '3':
                if (Number(currentAnswer) === answerThrid) {
                    toast("Молодец!");
                    setIsCompleted(true)
                    checkForCompleted();
                } else {
                    toast("Ответ неправильный");
                }
                break;

        }

    }



    function handleDragEnd(event) {
        const { active, over } = event;
        console.log(active)
        if (over) {
            const findIndex = dragItems.findIndex(item => item.props.id === active.id)
            if (findIndex === -1) return
            setCurrentItem(dragItems[findIndex])
            setCurrentAnswer(active.data.current.name)
            dragItems.splice(findIndex, 1)
            if (currentItem) {
                setDragItems([...dragItems, currentItem])
            }
        }
    }
    return (
        <div>
            <Header />
            <main>
                {isOver ? (
                    <main>
                        Молодец ты прошел все уровни!
                        <div>
                            <Link style={{ textDecoration: "none", color: "blue" }} to={"/games"}>Перейти к другим играм</Link>
                        </div>
                    </main>
                )
                    : (
                        <main>
                            <div className={style.title}>Найди подходящую картинку</div>
                            <div className="tabber">
                                <DndContext onDragEnd={handleDragEnd}>
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList onChange={handleChange} centered aria-label="lab API tabs example">
                                                    <Tab label="Уровень 1 " value="1" />
                                                    <Tab label="Уровень 2" value="2" />
                                                    <Tab label="Уровень 3" value="3" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1">
                                                <div className={style.imagesList}>
                                                    <img src={Image1} alt="" />
                                                    <DroppableHole id="droppable">
                                                        {!currentItem ? "Drop here" : <div>{currentItem}</div>}
                                                    </DroppableHole>
                                                    <img src={Image2} alt="" />
                                                </div>
                                                <div className={style.answersList}>
                                                    {dragItems.map((item, index) => <div key={index}>{item}</div>)}
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <div className={style.imagesList}>
                                                    <img src={Image1} alt="" />
                                                    <DroppableHole id="droppable">
                                                        {!currentItem ? "Drop here" : <div>{currentItem}</div>}
                                                    </DroppableHole>
                                                    <img src={Image2} alt="" />
                                                </div>
                                                <div className={style.answersList}>
                                                    {dragItems.map((item, index) => <div key={index}>{item}</div>)}
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <div className={style.imagesList}>
                                                    <img src={Image1} alt="" />
                                                    <DroppableHole id="droppable">
                                                        {!currentItem ? "Drop here" : <div>{currentItem}</div>}
                                                    </DroppableHole>
                                                    <img src={Image2} alt="" />
                                                </div>
                                                <div className={style.answersList}>
                                                    {dragItems.map((item, index) => <div key={index}>{item}</div>)}
                                                </div>
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                </DndContext>
                                <button onClick={() => checkAnswer()}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
                                <ToastContainer style={{ fontSize: 17 }} />
                            </div>
                        </main >
                    )
                }
            </main>
        </div>
    )
}

export default NumberMathGame
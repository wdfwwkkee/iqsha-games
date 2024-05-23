import React, { useEffect, useState } from 'react'
import { DndContext } from '@dnd-kit/core';
import DragItem from './DragItem/DragItem';

import style from './number_game.module.scss'
import { ToastContainer, toast } from "react-toastify";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import NumberLevelOne from './Level/NumberLevelOne';
import NumberLevelTwo from './Level/NumberLevelTwo';
import NumberLevelThird from './Level/NumberLevelThird';
import GameOver from 'Layouts/GameOver/GameOver';
import Back from 'Layouts/Back/Back';

// Images4LevelOne
import Image1 from 'assets/images/math_games/number/num_2.png'
import Image2 from 'assets/images/math_games/number/numbers_1.png'
import Image3 from 'assets/images/math_games/number/numbers_2.png'

//Images4LevelTwo

import Image4 from 'assets/images/math_games/number/num_4.png'
import Image5 from 'assets/images/math_games/number/numbers_3.png'
import Image6 from 'assets/images/math_games/number/num_5.png'

//Images4LevelThird

import Image7 from 'assets/images/math_games/number/quan_2.png'
import Image8 from 'assets/images/math_games/number/numbers_6.png'
import Image9 from 'assets/images/math_games/number/num_6.png'

//LevelOne
const draggableOne = (
    <DragItem name="20" id="draggableOne">
        <img className={style.answer} src={Image2} alt="" />
    </DragItem>
);
const draggableTwo = (
    <DragItem name="2" id="draggableTwo">
        <img className={style.answer} src={Image1} alt="" />
    </DragItem>
);
const draggableThird = (
    <DragItem name="10" id="draggableThird">
        <img className={style.answer} src={Image3} alt="" />
    </DragItem>
);
//LevelTwo
const TWOdraggableOne = (
    <DragItem name="15" id="draggableOne">
        <img className={style.answer} src={Image5} alt="" />
    </DragItem>
);
const TWOdraggableTwo = (
    <DragItem name="5" id="draggableTwo">
        <img className={style.answer} src={Image4} alt="" />
    </DragItem>
);
const TWOdraggableThird = (
    <DragItem name="7" id="draggableThird">
        <img className={style.answer} src={Image6} alt="" />
    </DragItem>
);
//LevelThird
const THIRDdraggableOne = (
    <DragItem name="6" id="draggableOne">
        <img className={style.answer} src={Image9} alt="" />
    </DragItem>
);
const THIRDdraggableTwo = (
    <DragItem name="12" id="draggableTwo">
        <img className={style.answer} src={Image8} alt="" />
    </DragItem>
);
const THIRDdraggableThird = (
    <DragItem name="people" id="draggableThird">
        <img className={style.answer} src={Image7} alt="" />
    </DragItem>
);

const NumberMathGame = () => {
    const [dragItems, setDragItems] = useState([draggableOne, draggableTwo, draggableThird])
    const [currentItem, setCurrentItem] = useState()
    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)
    const answerOne = 2;
    const answerTwo = 15;
    const answerThird = 'people';
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



    function checkAnswer() {
        switch (value) {
            case '1':
                if (Number(currentAnswer) === answerOne) {
                    toast("Молодец!");
                    setIsCompleted(true)
                    setCurrentAnswer("")
                    setCurrentItem(null)
                    checkForCompleted();
                    setDragItems([TWOdraggableOne, TWOdraggableTwo, TWOdraggableThird])
                } else {
                    toast("Ответ неправильный");
                }
                break;
            case '2':
                if (Number(currentAnswer) === answerTwo) {
                    toast("Молодец!");
                    setIsCompleted(true)
                    setCurrentAnswer("")
                    setCurrentItem(null)
                    checkForCompleted()
                    setDragItems([THIRDdraggableOne, THIRDdraggableTwo, THIRDdraggableThird])

                } else {
                    toast("Ответ неправильный");
                }
                break;
            case '3':
                if (currentAnswer === answerThird) {
                    toast("Молодец!");
                    setIsCompleted(true)
                    setCurrentAnswer("")
                    setCurrentItem(null)
                    checkForCompleted();
                } else {
                    toast("Ответ неправильный");
                }
                break;
            default:
                break;
        }

    }

    useEffect(() => {
        if (Number(value) === 3 && isCompleted) {
            toast("Молодец все уровни пройдены")
            setIsOver(true)
            console.log(":asd")
        }
    }, [isCompleted, value])


    function handleDragEnd(event) {
        const { active, over } = event;
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
        <div className='GameDisplay'>
            <main>
                {isOver ? (
                    <GameOver />
                )
                    : (
                        <div>
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
                                                <NumberLevelOne style={style} currentItem={currentItem} dragItems={dragItems} />
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <NumberLevelTwo style={style} currentItem={currentItem} dragItems={dragItems} />
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <NumberLevelThird style={style} currentItem={currentItem} dragItems={dragItems} />
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                </DndContext>
                                <button onClick={() => checkAnswer()}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
                            </div>
                            <Back />
                        </div >
                    )
                }
            </main>
            <ToastContainer style={{ fontSize: 17 }} />
        </div>
    )
}

export default NumberMathGame
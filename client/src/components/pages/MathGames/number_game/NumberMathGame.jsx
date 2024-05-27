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
import { Link, useNavigate } from "react-router-dom";
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
import getRandomId from 'utils/getRandomId';
import axios from 'axios';

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

    const navigate = useNavigate()

    useEffect(() => {
        if (!(localStorage.getItem('userName'))) {
            navigate('/iqsha-games/register')
        }
    }, [])

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

    async function request(mark, name) {
        axios({
            method: 'post',
            url: 'http://localhost:5000/iqsha-games/setData',
            data: { id: getRandomId(), userName: localStorage.getItem('userName'), results: { category: "Математика", game: { gameName: "Число.Цифра.Количество", lvl: { lvlNumber: Number(name), date: `Год - ${new Date().getFullYear()}, Число - ${new Date().getDate()}, Час - ${new Date().getHours()}; Минута - ${new Date().getMinutes()}`, result: mark } } } }
        }).catch(error => {
            console.error('Ошибка при отправке данных на сервер:', error);
        });
    }

    function checkAnswer() {
        switch (value) {
            case '1':
                if (Number(currentAnswer) === answerOne) {
                    request("Хорошо", value)
                    setIsCompleted(true)
                    setCurrentAnswer("")
                    setCurrentItem(null)
                    checkForCompleted();
                    setDragItems([TWOdraggableOne, TWOdraggableTwo, TWOdraggableThird])
                } else {
                    request("Плохо", value)
                    setCurrentItem(null)
                    checkForCompleted();
                    setCurrentAnswer("")
                    setDragItems([TWOdraggableOne, TWOdraggableTwo, TWOdraggableThird])
                }
                break;
            case '2':
                if (Number(currentAnswer) === answerTwo) {
                    request("Хорошо", value)
                    setIsCompleted(true)
                    setCurrentAnswer("")
                    setCurrentItem(null)
                    checkForCompleted()
                    setDragItems([THIRDdraggableOne, THIRDdraggableTwo, THIRDdraggableThird])

                } else {
                    request("Плохо", value)
                    setCurrentItem(null)
                    setCurrentAnswer("")
                    setDragItems([THIRDdraggableOne, THIRDdraggableTwo, THIRDdraggableThird])
                    checkForCompleted();
                }
                break;
            case '3':
                if (currentAnswer === answerThird) {
                    request("Хорошо", value)
                    setIsCompleted(true)
                    setCurrentAnswer("")
                    setCurrentItem(null)
                    checkForCompleted();
                } else {
                    request("Плохо", value)
                    setCurrentItem(null)
                    setCurrentAnswer("")
                    checkForCompleted();
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
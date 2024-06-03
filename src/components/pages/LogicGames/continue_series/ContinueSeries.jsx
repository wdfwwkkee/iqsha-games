import React, { useEffect, useState } from "react";
import style from './continue_series.module.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import DiamondImage from 'assets/images/logic_games/continue_series/diamond.png'
import EmeraldImage from 'assets/images/logic_games/continue_series/emerald.png'
import GoldImage from 'assets/images/logic_games/continue_series/gold.png'

import Spike from 'assets/images/logic_games/continue_series/spike.png'
import Voron from 'assets/images/logic_games/continue_series/voron.png'
import Piper from 'assets/images/logic_games/continue_series/piper.png'

import RobEmote1 from 'assets/images/logic_games/continue_series/roblox_1.png'
import RobEmote2 from 'assets/images/logic_games/continue_series/roblox_2.png'
import RobEmote3 from 'assets/images/logic_games/continue_series/roblox_3.png'

import ContinueSeriesDragItems from "./DragItem/ContinueSeriesDragItems";
import { DndContext } from '@dnd-kit/core';
import ContinueSeriesLevelOne from "./Levels/ContinueSeriesLevelOne";
import ContinueSeriesLevelTwo from "./Levels/ContinueSeriesLevelTwo";
import ContinueSeriesLevelThird from "./Levels/ContinueSeriesLevelThird";
import GameOver from "Layouts/GameOver/GameOver";
import Back from "Layouts/Back/Back";
import getRandomId from "utils/getRandomId";
import { db } from "utils/firestore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";


const draggableOne = (
    <ContinueSeriesDragItems name="emerald" id="draggableOne">
        <img src={EmeraldImage} alt="" />
    </ContinueSeriesDragItems>
)
const draggableTwo = (
    <ContinueSeriesDragItems name="diamond" id="draggableTwo">
        <img src={DiamondImage} alt="" />
    </ContinueSeriesDragItems>
)
const draggableThird = (
    <ContinueSeriesDragItems name="gold" id="draggableThird">
        <img src={GoldImage} alt="" />
    </ContinueSeriesDragItems>
)

const TWOdraggableOne = (
    <ContinueSeriesDragItems name="voron" id="draggableOne">
        <img src={Voron} alt="" />
    </ContinueSeriesDragItems>
)
const TWOdraggableTwo = (
    <ContinueSeriesDragItems name="spike" id="draggableTwo">
        <img src={Spike} alt="" />
    </ContinueSeriesDragItems>
)
const TWOdraggableThird = (
    <ContinueSeriesDragItems name="piper" id="draggableThird">
        <img src={Piper} alt="" />
    </ContinueSeriesDragItems>
)

const THIRDdraggableOne = (
    <ContinueSeriesDragItems name="happy" id="draggableOne">
        <img src={RobEmote1} alt="" />
    </ContinueSeriesDragItems>
)
const THIRDdraggableTwo = (
    <ContinueSeriesDragItems name="poker" id="draggableTwo">
        <img src={RobEmote2} alt="" />
    </ContinueSeriesDragItems>
)
const THIRDdraggableThird = (
    <ContinueSeriesDragItems name="cool" id="draggableThird">
        <img src={RobEmote3} alt="" />
    </ContinueSeriesDragItems>
)

const ContinueSeries = () => {
    const [dragItems, setDragItems] = useState([draggableOne, draggableTwo, draggableThird])
    const [currentItem, setCurrentItem] = useState()
    const [value, setValue] = useState('1')
    const [currentAnswer, setCurrentAnswer] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)
    const answerOne = 'emerald';
    const answerTwo = 'spike'
    const answerThird = 'cool'


    const navigate = useNavigate()

    useEffect(() => {
        if (!(localStorage.getItem('userName'))) {
            navigate('/iqsha-games/register')
        }
    }, [])


    async function request(mark, lvlNumber) {
        try {
            await updateDoc(doc(db, "data", localStorage.getItem('userName')), {
                result: arrayUnion({ category: "Логика", game: { id: getRandomId(), gameName: "Продолжи ряд", lvl: Number(lvlNumber), date: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}` }, result: mark })
            });
        } catch (error) {
            console.log(error)
        }
    }

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
            case "1":
                if (currentItem) {
                    if (currentAnswer === answerOne) {
                        request("Хорошо", value)
                        setIsCompleted(true)
                        setCurrentAnswer("")
                        setCurrentItem(null)
                        setDragItems([TWOdraggableOne, TWOdraggableTwo, TWOdraggableThird])

                    } else {
                        request("Плохо", value)
                        setCurrentAnswer("")
                        setCurrentItem(null)
                        setDragItems([TWOdraggableOne, TWOdraggableTwo, TWOdraggableThird])
                    }
                    checkForCompleted();
                }
                break;
            case '2':
                if (currentItem) {
                    if (currentAnswer === answerTwo) {
                        request("Хорошо", value)
                        setIsCompleted(true)
                        setCurrentAnswer("")
                        setCurrentItem(null)
                        setDragItems([THIRDdraggableOne, THIRDdraggableTwo, THIRDdraggableThird])

                    } else {
                        request("Плохо", value)
                        setCurrentAnswer("")
                        setCurrentItem(null)
                        setDragItems([THIRDdraggableOne, THIRDdraggableTwo, THIRDdraggableThird])
                    }
                    checkForCompleted()
                }
                break;
            case '3':
                if (currentItem) {
                    if (currentAnswer === answerThird) {
                        request("Хорошо", value)
                        setIsCompleted(true)
                        setCurrentAnswer("")
                        setCurrentItem(null)
                    } else {
                        request("Плохо", value)
                        setCurrentAnswer("")
                        setCurrentItem(null)
                        setDragItems([TWOdraggableOne, TWOdraggableTwo, TWOdraggableThird])
                    }
                }
                break;
            default:
                break;
        }
    }



    useEffect(() => {
        if (Number(value) === 3 && isCompleted) {

            setIsOver(true)
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
        <div>
            <main>
                {isOver ? (
                    <GameOver />
                )
                    : (
                        <div className="GameDisplay">
                            <div className={style.title}>
                                Продолжи ряд
                            </div>
                            <div className={style.task}>
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
                                                    <ContinueSeriesLevelOne style={style} currentItem={currentItem} dragItems={dragItems} />
                                                </TabPanel>
                                                <TabPanel value="2">
                                                    <ContinueSeriesLevelTwo style={style} currentItem={currentItem} dragItems={dragItems} />

                                                </TabPanel>
                                                <TabPanel value="3">
                                                    <ContinueSeriesLevelThird style={style} currentItem={currentItem} dragItems={dragItems} />

                                                </TabPanel>
                                            </TabContext>
                                        </Box>
                                    </DndContext>
                                    <button onClick={() => checkAnswer()}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
                                    <ToastContainer style={{ fontSize: 17 }} />
                                </div>
                            </div>
                            <Back />
                        </div>
                    )
                }
            </main>

        </div>
    )
}

export default ContinueSeries
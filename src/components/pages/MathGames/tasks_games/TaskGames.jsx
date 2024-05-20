import React, { useEffect, useState } from "react";
import style from './tasks_games.module.scss'
import Header from 'Layouts/LayoutsHome/Header'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "components/UI/Confetti";

const TaskGames = () => {

    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)

    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [userAnswer, setUserAnswer] = useState("");
    const [actions, setActions] = useState(["+", '-',]);
    const [firstSym, setFirstSym] = useState(array[Math.floor(Math.random() * array.length)]);
    const [secondSym, setSecondSym] = useState(firstSym === array[Math.floor(Math.random() * array.length)] ? array[Math.floor(Math.random() * array.length)] : array[Math.floor(Math.random() * array.length)])
    const [action, setAction] = useState(actions[Math.floor(Math.random() * actions.length)])
    const result = eval(firstSym + action + secondSym)

    const handleChange = (event, newValue) => {

        if (isCompleted) {
            setValue(newValue);
            setArray([...array].sort(() => Math.random() - 0.5))
        }
        else {
            toast("Сначала реши пример!");
        }
    };

    function checkAnswer() {
        if (userAnswer.toString() === action.toString()) {
            toast("Молодец!");
            setIsCompleted(true)
            if (Number(value) < 3) {
                setValue(prev => (Number(prev) + 1).toString())
                setArray([...array].sort(() => Math.random() - 0.5))
                setIsCompleted(false)
                setFirstSym(array[Math.floor(Math.random() * array.length)])
                setSecondSym(array[Math.floor(Math.random() * array.length)])
                setAction(actions[Math.floor(Math.random() * actions.length)])
                setUserAnswer("")
            }

        } else {
            toast("Ответ неправильный");
        }
    }

    useEffect(() => {
        if (Number(value) === 3 && isCompleted) {

            setIsOver(true)
        }
    }, [isCompleted, value])

    return (
        <div>
            <Header />
            <main>
                {isOver ? (
                    <div>
                        <div>Молодец ты прошел все уровни!</div>
                        <Link style={{ textDecoration: "none", color: "blue" }} to={"/games"}>Перейти к другим играм</Link>
                        <Confetti />
                    </div>
                )
                    : (
                        <div>
                            <div className={style.title}>
                                Реши пример
                            </div>
                            <div className={style.task}>
                                <div className="tabber">
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
                                                <div className={style.taskSym}>
                                                    <div>{firstSym}</div>
                                                    <div className={style.userAnswer}>{userAnswer}</div>
                                                    <div>{secondSym}</div>
                                                    <span>=</span>
                                                    <div>{result}</div>
                                                </div>
                                                <div className={style.actionBtns}>
                                                    <button onClick={() => setUserAnswer("+")}>+</button>
                                                    <button onClick={() => setUserAnswer("-")}>-</button>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <div className={style.taskSym}>
                                                    <div>{firstSym}</div>
                                                    <div className={style.userAnswer}>{userAnswer}</div>
                                                    <div>{secondSym}</div>
                                                    <span>=</span>
                                                    <div>{result}</div>
                                                </div>
                                                <div className={style.actionBtns}>
                                                    <button onClick={() => setUserAnswer("+")}>+</button>
                                                    <button onClick={() => setUserAnswer("-")}>-</button>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <div className={style.taskSym}>
                                                    <div>{firstSym}</div>
                                                    <div className={style.userAnswer}>{userAnswer}</div>
                                                    <div>{secondSym}</div>
                                                    <span>=</span>
                                                    <div>{result}</div>
                                                </div>
                                                <div className={style.actionBtns}>
                                                    <button onClick={() => setUserAnswer("+")}>+</button>
                                                    <button onClick={() => setUserAnswer("-")}>-</button>
                                                </div>
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                    <button onClick={() => checkAnswer(array)}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
                                    <ToastContainer style={{ fontSize: 17 }} />
                                </div>
                            </div>
                        </div>
                    )
                }
            </main>
        </div>
    )
}

export default TaskGames
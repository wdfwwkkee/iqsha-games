import React, { useEffect, useState } from "react";
import style from './tasks_games.module.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import GameOver from "Layouts/GameOver/GameOver";
import Back from "Layouts/Back/Back";
import getRandomId from "utils/getRandomId";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "utils/firestore";

const TaskGames = () => {

    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)

    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [userAnswer, setUserAnswer] = useState("");
    const [actions, setActions] = useState(["+", '-',]);
    const [firstSym, setFirstSym] = useState(array[Math.floor(Math.random() * array.length)]);
    const [secondSym, setSecondSym] = useState(firstSym === array[Math.floor(Math.random() * array.length)] > firstSym ? array[Math.floor(Math.random() * array.length)] : array[Math.floor(Math.random() * array.length)])
    const [action, setAction] = useState(actions[Math.floor(Math.random() * actions.length)])
    const result = eval(firstSym + action + secondSym)

    const navigate = useNavigate()

    useEffect(() => {
        if (!(localStorage.getItem('userName'))) {
            navigate('/iqsha-games/register')
        }
    }, [navigate])

    const handleChange = (event, newValue) => {

        if (isCompleted) {
            setValue(newValue);
            setArray([...array].sort(() => Math.random() - 0.5))
        }
        else {
            toast("Сначала реши пример!");
        }
    };

    async function request(mark, lvlNumber) {
        try {
            await updateDoc(doc(db, "data", localStorage.getItem('userName')), {
                result: arrayUnion({ category: "Математика", game: { id : getRandomId(), gameName: "Задачи", lvl: Number(lvlNumber), date: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}` }, result: mark })
            });
        } catch (error) {
            console.log(error)
        }
    }

    async function sendDataToServer(userName, lvl, gameName, result) {
        try {
            
            const dataToSend = /*JSON.stringify*/({
                userName,
                lvl,
                gameName,
                result
            });
            
            const response = await axios.post('http://localhost:3200/math', dataToSend);
            console.log('Данные успешно отправлены на сервер. Ответ:', response.data);
        } catch (error) {
            console.error('Произошла ошибка при отправке данных на сервер:', error);
            
            console.error(error.response);
        }
    }

    function checkAnswer() {

        if (userAnswer) {
            if (userAnswer.toString() === action.toString()) {
                sendDataToServer(localStorage.getItem('userName'), value, "Задачи", "хорошо")
                setIsCompleted(true)
                request("Хорошо", value);
            }
            else {
                sendDataToServer(localStorage.getItem('userName'), value, "Задачи", "плохо")
                request("Плохо", value);
            }
        }
        else {
            toast("Сначала реши пример!");
        }

        if (Number(value) < 3 && userAnswer !== "") {
            setValue(prev => (Number(prev) + 1).toString())
            setArray([...array].sort(() => Math.random() - 0.5))
            setIsCompleted(false)
            setFirstSym(array[Math.floor(Math.random() * array.length)])
            setSecondSym(array[Math.floor(Math.random() * array.length)])
            setAction(actions[Math.floor(Math.random() * actions.length)])
            setUserAnswer("")

        }

    }

    useEffect(() => {
        if (Number(value) === 3 && isCompleted) {

            setIsOver(true)
        }
    }, [isCompleted, value])

    return (
        <div>
            <main>
                {isOver ? (
                    <GameOver />
                )
                    : (
                        <div className="GameDisplay">
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

export default TaskGames
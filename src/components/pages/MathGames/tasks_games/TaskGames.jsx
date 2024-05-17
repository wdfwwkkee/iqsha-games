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

const TaskGames = () => {
    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)

    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [actions, setActions] = useState(["+", '-', '=']);
    let firstSym = array[Math.floor(Math.random() * array.length)];
    let secondSym = array[Math.floor(Math.random() * array.length)];
    let action = actions[Math.floor(Math.random() * actions.length)]
    console.log(action)
    const result = eval(`${firstSym} ${action} ${secondSym}`)

    const handleChange = (event, newValue) => {

        if (isCompleted) {
            setValue(newValue);
            setArray([...array].sort(() => Math.random() - 0.5))
        }
        else {
            toast("Сначала реши пример!");
        }
    };

    function checkAnswer(userAction) {
        if (userAction.toString() === action.toString()) {
            toast("Молодец!");
            setIsCompleted(true)
            if (Number(value) < 3) {
                setValue(prev => (Number(prev) + 1).toString())
                setArray([...array].sort(() => Math.random() - 0.5))
                setIsCompleted(false)
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
                                    {firstSym}{action}{secondSym} = {result}
                                    <div>
                                        <button onClick={checkAnswer("+")}>+</button>
                                        <button onClick={checkAnswer("-")}>-</button>
                                        <button onClick={checkAnswer("=")}> = </button>
                                    </div>
                                </TabPanel>
                                <TabPanel value="2"></TabPanel>
                                <TabPanel value="3"></TabPanel>
                            </TabContext>
                        </Box>
                        <button onClick={() => checkAnswer(array)}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
                        <ToastContainer style={{ fontSize: 17 }} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TaskGames
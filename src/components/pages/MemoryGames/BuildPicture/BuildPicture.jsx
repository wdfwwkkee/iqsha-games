import React, { useEffect, useState } from "react";
import style from './build_picture.module.scss'
import Header from 'Layouts/LayoutsHome/Header'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "components/UI/Confetti";
import { Reorder } from "framer-motion"

import Image1 from 'assets/images/memory_games/cat/krutoi_chel_1.png'


const BuildPicture = () => {
    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)
    const [items, setItems] = useState([0, 1, 2, 3])

    const [userAnswer, setUserAnswer] = useState("");
    const handleChange = (event, newValue) => {

        if (isCompleted) {
            setValue(newValue);
        }
        else {
            toast("Сначала реши пример!");
        }
    };

    function checkAnswer() {
        if ("") {
            toast("Молодец!");
            setIsCompleted(true)
            if (Number(value) < 3) {
                setValue(prev => (Number(prev) + 1).toString())
                setIsCompleted(false)
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
            {isOver ? (
                <main>
                    Молодец ты прошел все уровни!
                    <div>
                        <Link style={{ textDecoration: "none", color: "blue" }} to={"/games"}>Перейти к другим играм</Link>
                    </div>
                    <Confetti />
                </main>
            )
                : (
                    <main>
                        <div className={style.title}>
                            Собери картинку
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
                                            <Reorder.Group axis="y" values={items} onReorder={setItems}>
                                                {items.map((item) => (
                                                    <Reorder.Item key={item} value={item}>
                                                    </Reorder.Item>
                                                ))}
                                                
                                            </Reorder.Group>
                                        </TabPanel>
                                        <TabPanel value="2">

                                        </TabPanel>
                                        <TabPanel value="3">

                                        </TabPanel>
                                    </TabContext>
                                </Box>
                                <button onClick={() => checkAnswer()}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
                                <ToastContainer style={{ fontSize: 17 }} />
                            </div>
                        </div>
                    </main>
                )
            }
        </div>
    )
}

export default BuildPicture
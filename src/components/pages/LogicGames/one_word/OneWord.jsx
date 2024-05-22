import React, { useEffect, useState } from "react";
import style from './one_word.module.scss'
import Header from 'Layouts/LayoutsHome/Header'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "components/UI/Confetti";
import OneWordLevelOne from "./Levels/OneWordLevelOne";
import OneWordLevelTwo from "./Levels/OneWordLevelTwo";
import OneWordLevelThird from "./Levels/OneWordLevelThird";


const titles = ['Это круглое, красное и сочное', 'Это белое и маленькое', 'Это зеленое и медленное']
const OneWord = () => {

    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)
    const [currentTitle, setCurrentTitle] = useState(titles[0])

    useEffect(() => {
        switch (value) {
            case '2':
                setCurrentTitle(titles[1])

                break;
            case '3':
                setCurrentTitle(titles[2])
                break;
            default:
                break;
        }
    }, [value])

    const handleChange = (event, newValue) => {


        if (isCompleted) {
            setValue(newValue);

        }
        else {
            toast("Сначала реши пример!");
        }
    };
    function checkForCompleted() {
        if (Number(value) < 3) {
            setValue(prev => (Number(prev) + 1).toString())
            setIsCompleted(false)
        }
    }

    function checkAnswer(isTrue) {
        if (isTrue) {
            toast("Молодец!");
            setIsCompleted(true)
            checkForCompleted();

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
                        Молодец ты прошел все уровни!
                        <div>
                            <Link style={{ textDecoration: "none", color: "blue" }} to={"/games"}>Перейти к другим играм</Link>
                        </div>
                        <Confetti />
                    </div>
                )
                    : (
                        <div>
                            <div className={style.title}>
                                {`${currentTitle}. Что это?`}
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
                                                <OneWordLevelOne style={style} checkAnswer={checkAnswer} />
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <OneWordLevelTwo style={style} checkAnswer={checkAnswer} />
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <OneWordLevelThird style={style} checkAnswer={checkAnswer} />
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    )
                }
            </main>
            <ToastContainer style={{ fontSize: 17 }} />
        </div>
    )
}

export default OneWord
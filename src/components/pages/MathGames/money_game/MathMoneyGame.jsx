import React, { useEffect, useState } from 'react'
import Header from 'Layouts/LayoutsHome/Header'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import style from './math_money_game.module.scss'

import BagImage from 'assets/images/math_games/money_game/math_game_money_bag.png'
import Coin from 'assets/images/math_games/money_game/math_game_money_coin.png'



const MathMoneyGame = () => {
    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)

    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [userAnswer, setUserAnswer] = useState("");
    const [firstSym, setFirstSym] = useState(array[Math.floor(Math.random() * array.length)])
    const [secondSym, setSecondSym] = useState(array[Math.floor(Math.random() * array.length)])
    const result = eval(firstSym + userAnswer + secondSym)
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
        if (result) {
            toast("Молодец!");
            setIsCompleted(true)
            if (Number(value) < 3) {

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
                </main>
            )
                : (
                    <main>
                        <div className={style.title}>
                            Какое число больше
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
                                            <div className={style.bag}>
                                                <img src={BagImage} alt="" />

                                                <div className={style.coinsList}>
                                                    <div className={style.coin}>

                                                    </div>
                                                    <img src={Coin} alt="" />
                                                    <div className="coin_number">
                                                        1
                                                    </div>
                                                </div>
                                            </div>
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

export default MathMoneyGame
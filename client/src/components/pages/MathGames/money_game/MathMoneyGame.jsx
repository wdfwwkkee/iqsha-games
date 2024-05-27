import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ToastContainer, toast } from "react-toastify";
import style from './math_money_game.module.scss'

import BagImage from 'assets/images/math_games/money_game/math_game_money_bag.png'
import Confetti from 'components/UI/Confetti';
import GameOver from 'Layouts/GameOver/GameOver';
import Back from 'Layouts/Back/Back';
import { useNavigate } from 'react-router-dom';


const MathMoneyGame = () => {
    const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (!(localStorage.getItem('userName'))) {
            navigate('/iqsha-games/register')
        }
    }, [])
    const handleChange = (event, newValue) => {
        if (isCompleted) {
            setValue(newValue);
        }
        else {
            toast("Сначала реши пример!");
        }
    };
    function checkForCompleted() {
        setIsCompleted(true)

        if (Number(value) < 3) {
            setValue(prev => (Number(prev) + 1).toString())
            setIsCompleted(false)
        }
    }

    function checkAnswer() {
        switch (value) {
            case "1":
                checkForCompleted();
                break
            case "2":
                checkForCompleted();
                break
            case "3":
                checkForCompleted();
                break
            default:
                break;
        }
    }

    useEffect(() => {
        if (Number(value) === 3 && isCompleted) {

            setIsOver(true)
        }
    }, [isCompleted, value])
    return (
        <div className='GameDisplay'>
            <main>
                {isOver ? (
                    <div>
                        <GameOver />
                        <Confetti />
                    </div>
                )
                    : (
                        <main>
                            <div className={style.title}>
                                Сколько монет в мешочке?
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
                                                <div>
                                                    <div className={style.bag}>
                                                        <img src={BagImage} alt="" />
                                                        <div className={style.coinsList}>
                                                            <div className={style.coin}>
                                                                <div className={style.coinNumber}>
                                                                    1
                                                                </div>
                                                            </div>
                                                            <div className={style.coin}>
                                                                <div className={style.coinNumber}>
                                                                    1
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={style.answersList}>
                                                        <button onClick={() => checkAnswer(1)}>1</button>
                                                        <button onClick={() => checkAnswer(3)}>3</button>
                                                        <button onClick={() => checkAnswer(2)}>2</button>
                                                        <button onClick={() => checkAnswer(5)}>5</button>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <div>
                                                    <div className={style.bag}>
                                                        <img src={BagImage} alt="" />
                                                        <div className={style.coinsList}>
                                                            <div className={style.coin}>
                                                                <div className={style.coinNumber}>
                                                                    2
                                                                </div>
                                                            </div>
                                                            <div className={style.coin}>
                                                                <div className={style.coinNumber}>
                                                                    2
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={style.answersList}>
                                                        <button onClick={() => checkAnswer(3)}>3</button>
                                                        <button onClick={() => checkAnswer(4)}>4</button>
                                                        <button onClick={() => checkAnswer(1)}>1</button>
                                                        <button onClick={() => checkAnswer(10)}>10</button>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                <div>
                                                    <div className={style.bag}>
                                                        <img src={BagImage} alt="" />
                                                        <div className={style.coinsList}>
                                                            <div className={style.coin}>
                                                                <div className={style.coinNumber}>
                                                                    5
                                                                </div>
                                                            </div>
                                                            <div className={style.coin}>
                                                                <div className={style.coinNumber}>
                                                                    1
                                                                </div>
                                                            </div>
                                                            <div className={style.coin}>
                                                                <div className={style.coinNumber}>
                                                                    1
                                                                </div>
                                                            </div>
                                                            <div className={style.coin}>
                                                                <div className={style.coinNumber}>
                                                                    2
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={style.answersList}>
                                                        <button onClick={() => checkAnswer(3)}>3</button>
                                                        <button onClick={() => checkAnswer(4)}>4</button>
                                                        <button onClick={() => checkAnswer(8)}>8</button>
                                                        <button onClick={() => checkAnswer(9)}>9</button>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                </div>
                                <Back />
                            </div>
                        </main>
                    )
                }
            </main>
            <ToastContainer style={{ fontSize: 17 }} />
        </div>
    )
}

export default MathMoneyGame
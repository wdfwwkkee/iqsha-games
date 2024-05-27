import React, { useEffect, useState } from "react";
import style from './excess.module.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ToastContainer, toast } from "react-toastify";

import ExcessLvlOne from "./excessLevels/ExcessLvlOne";
import ExcessLvlTwo from "./excessLevels/ExcessLvlTwo";
import ExcessLvlThird from "./excessLevels/ExcessLvlThird";
import GameOver from "Layouts/GameOver/GameOver";
import Back from "Layouts/Back/Back";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getRandomId from "utils/getRandomId";

const WhatExcess = () => {
  const [value, setValue] = useState('1')
  const [isCompleted, setIsCompleted] = useState(false)
  const [isOver, setIsOver] = useState(false)


  const navigate = useNavigate()

  async function request(mark, name) {
    axios({
      method: 'post',
      url: 'http://localhost:5000/iqsha-games/setData',
      data: { id: getRandomId(), userName: localStorage.getItem('userName'), results: { category: "Логика", game: { gameName: "Что лишнее", lvl: { lvlNumber: Number(name), date: `Год - ${new Date().getFullYear()}, Число - ${new Date().getDate()}, Час - ${new Date().getHours()}; Минута - ${new Date().getMinutes()}`, result: mark } } } }
    }).catch(error => {
      console.error('Ошибка при отправке данных на сервер:', error);
    });
  }

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

  function checkAnswer(isTrue) {
    if (isTrue) {
      request("Хорошо", value)
      setIsCompleted(true)
      checkForCompleted();
    } else {
      request("Плохо", value)
      checkForCompleted();
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
                Что лишнее?
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
                        <ExcessLvlOne style={style} checkAnswer={checkAnswer} />
                      </TabPanel>
                      <TabPanel value="2">
                        <ExcessLvlTwo style={style} checkAnswer={checkAnswer} />
                      </TabPanel>
                      <TabPanel value="3">
                        <ExcessLvlThird style={style} checkAnswer={checkAnswer} />
                      </TabPanel>
                    </TabContext>
                  </Box>
                </div>
                <Back />
              </div>
            </div>
          )
        }
      </main>
      <ToastContainer style={{ fontSize: 17 }} />
    </div>
  )
}

export default WhatExcess
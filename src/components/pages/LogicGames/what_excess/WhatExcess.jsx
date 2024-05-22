import React, { useEffect, useState } from "react";
import style from './excess.module.scss'
import Header from 'Layouts/LayoutsHome/Header'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "components/UI/Confetti";

import ExcessLvlOne from "./excessLevels/ExcessLvlOne";
import ExcessLvlTwo from "./excessLevels/ExcessLvlTwo";
import ExcessLvlThird from "./excessLevels/ExcessLvlThird";

const WhatExcess = () => {
  const [value, setValue] = useState('1')
  const [isCompleted, setIsCompleted] = useState(false)
  const [isOver, setIsOver] = useState(false)

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
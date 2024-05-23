import React, { useEffect, useState } from "react";
import style from "./number_series.module.scss";


import { ToastContainer, toast } from "react-toastify";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GenerateLvl from "./GeratorLvls/GenerateLvl";
import { Link } from "react-router-dom";
import GameOver from "Layouts/GameOver/GameOver";
import Back from "Layouts/Back/Back";

const NumberSeries = () => {

  const [value, setValue] = useState('1')
  const [isCompleted, setIsCompleted] = useState(false)
  const [isOver, setIsOver] = useState(false)

  const [array, setArray] = useState(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5)
  );
  const handleChange = (event, newValue) => {

    if (isCompleted) {
      setValue(newValue);
      setArray([...array].sort(() => Math.random() - 0.5))
    }
    else {
      toast("Сначала реши пример!");
    }
  };
  useEffect(() => {
    if (Number(value) === 3 && isCompleted) {
      toast("Молодец все уровни пройдены")
      setIsOver(true)
    }
  }, [isCompleted, value])

  function checkAnswer(array) {
    const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (array.toString() === answer.toString()) {
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
  return (
    <div>
      <main>
        {isOver ? (
          <GameOver />
        )
          : (
            <div className="GameDisplay">
              <div className={style.title}>Расставь в правильном порядке</div>
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
                    <TabPanel value="1"><GenerateLvl array={array} setArray={setArray} /></TabPanel>
                    <TabPanel value="2"><GenerateLvl array={array} setArray={setArray} /></TabPanel>
                    <TabPanel value="3"><GenerateLvl array={array} setArray={setArray} /></TabPanel>
                  </TabContext>
                </Box>
                <button onClick={() => checkAnswer(array)}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
              </div>
              <Back />
            </div>
          )
        }
        <ToastContainer style={{ fontSize: 17 }} />
      </main>



    </div >
  );
}

export default NumberSeries

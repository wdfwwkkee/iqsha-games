import React, { useEffect, useState } from 'react'
import Header from 'Layouts/LayoutsHome/Header'


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "components/UI/Confetti";
//tasks-img
import img_ladya from "assets/images/chess_games/ladya.jpg"
import img_horse from "assets/images/chess_games/horse.jpeg"


//answers-img
import horse_ans from "assets/images/chess_games/horse_ans.webp"



const Whos_turn = () => {
  const [value, setValue] = useState('1')

  const [array, setArray] = useState([img_ladya, img_horse]);
  const [userAnswer, setUserAnswer] = useState("");
  const [isOver, setIsOver] = useState("");
  const [userResponce, setUserResponce] = useState(null);
  const [actions, setActions] = useState(["+", '-',]);
  const [currentAnswer, setCurrentAnswer] = useState("");

  function checkAnswer(userResponce) {
    switch (value) {
      case "1":
        if (userResponce === img_ladya) {
          alert("win")
        }
        else {
          alert('lose')
        }
        break;
    }
  }
  return (
    <div>
      <Header />
      <div>
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
              <div>
                Реши пример
              </div>
              <div >
                <div className="tabber">
                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList centered aria-label="lab API tabs example">
                          <Tab label="Уровень 1 " value="1" />
                          <Tab label="Уровень 2" value="2" />
                          <Tab label="Уровень 3" value="3" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <div className="taskSym">
                          <img src={img_ladya} alt="" />
                          <div>
                            <button onClick={() => checkAnswer(img_ladya)}><img src={img_ladya} alt="" /></button><button onClick={() => checkAnswer(img_horse)}><img src={img_horse} alt="" /></button><button onClick={() => checkAnswer(horse_ans)}><img src={horse_ans} alt="" /></button>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel value="2">
                        <div >

                        </div>
                        <div>
                        </div>
                      </TabPanel>
                      <TabPanel value="3">
                        <div >

                        </div>
                        <div >

                        </div>
                      </TabPanel>
                    </TabContext>
                  </Box>
                  <button onClick={() => checkAnswer(array)}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
                  <ToastContainer style={{ fontSize: 17 }} />
                </div>
              </div>
            </main>
          )

        }

      </div>
    </div>
  )
}

export default Whos_turn
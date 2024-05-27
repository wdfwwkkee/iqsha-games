import React, { useEffect, useState } from 'react'

import './whos_turn.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ToastContainer, toast } from "react-toastify";
//tasks-img
import img_ladya from "assets/images/chess_games/ladya.jpg"
import img_horse from "assets/images/chess_games/horse_moves.jpg"
import img_queen from "assets/images/chess_games/queen_moves.jpg"


//answers-img
import horse_ans from "assets/images/chess_games/horse_ans.jpg"
import bishop_ans from "assets/images/chess_games/bishop_ans.jpg"
import queen_ans from "assets/images/chess_games/queen_ans.jpg"
import pawn_ans from "assets/images/chess_games/pawn_ans.jpg"
import rook_ans from "assets/images/chess_games/rook_ans.jpg"
import king_ans from "assets/images/chess_games/king_ans.jpg"
import GameOver from 'Layouts/GameOver/GameOver';
import Back from 'Layouts/Back/Back';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import getRandomId from 'utils/getRandomId';



const WhosTurn = () => {
  const [value, setValue] = useState('1')
  const [isOver, setIsOver] = useState("");
  const [isCompleted, setIsCompleted] = useState(false)


  function checkForCompleted() {
    if (Number(value) < 3) {
      setValue(prev => (Number(prev) + 1).toString())
      setIsCompleted(false)
    }
  }

  const navigate = useNavigate()

  async function request(mark, name) {
    axios({
      method: 'post',
      url: 'http://localhost:5000/iqsha-games/setData',
      data: { id: getRandomId(), userName: localStorage.getItem('userName'), results: { category: "Шахматы", game: { gameName: "Кто так ходит", lvl: { lvlNumber: Number(name), date: `Год - ${new Date().getFullYear()}, Число - ${new Date().getDate()}, Час - ${new Date().getHours()}; Минута - ${new Date().getMinutes()}`, result: mark } } } }
    }).catch(error => {
      console.error('Ошибка при отправке данных на сервер:', error);
    });
  }

  useEffect(() => {
    if (!(localStorage.getItem('userName'))) {
      navigate('/iqsha-games/register')
    }
  }, [])

  function checkAnswer(userResponce) {
    switch (value) {
      case "1":
        if (userResponce === rook_ans) {
          request("Хорошо", value)
          setIsCompleted(true)
          checkForCompleted();
        }
        else {
          request("Плохо", value)
          checkForCompleted();
        }
        break;
      case "2":
        if (userResponce === horse_ans) {
          request("Хорошо", value)
          setIsCompleted(true)
          checkForCompleted();
        }
        else {
          request("Плохо", value)
          checkForCompleted();
        }
        break;
      case "3":
        if (userResponce === queen_ans) {
          request("Хорошо", value)
          setIsCompleted(true)
          checkForCompleted();
        }
        else {
          request("Плохо", value)
          checkForCompleted();
        }
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
  useEffect(() => {
    if (Number(value) === 3 && isCompleted) {

      setIsOver(true)
    }
  }, [isCompleted, value])


  return (
    <div className='GameDisplay'>
      <main>
        {isOver ? (
          <GameOver />
        )
          : (
            <div>
              <div className='title'>
                Кто так ходит?
              </div>
              <div >
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
                        <div className="task">

                          <div className='task-img'>
                            <img src={img_ladya} alt="" />

                          </div>
                          <div className='Answers'>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(rook_ans)}><img src={rook_ans} alt="" /></button>
                            </div>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(pawn_ans)}><img src={pawn_ans} alt="" /></button>

                            </div>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(horse_ans)}><img src={horse_ans} alt="" /></button>

                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel value="2">
                        <div className="task">

                          <div className='task-img'>
                            <img src={img_horse} alt="" />

                          </div>
                          <div className='Answers'>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(bishop_ans)}><img src={bishop_ans} alt="" /></button>
                            </div>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(pawn_ans)}><img src={pawn_ans} alt="" /></button>
                            </div>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(horse_ans)}><img src={horse_ans} alt="" /></button>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel value="3">
                        <div className="task">
                          <div className='task-img'>
                            <img src={img_queen} alt="" />
                          </div>
                          <div className='Answers'>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(king_ans)}><img src={king_ans} alt="" /></button>
                            </div>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(queen_ans)}><img src={queen_ans} alt="" /></button>
                            </div>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(rook_ans)}><img src={rook_ans} alt="" /></button>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </div>
              </div>
              <Back />
            </div>
          )
        }
        <ToastContainer style={{ fontSize: 17 }} />
      </main>
    </div>
  )
}

export default WhosTurn;
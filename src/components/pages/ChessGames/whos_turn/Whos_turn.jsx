import React, { useEffect, useState } from 'react'
import Header from 'Layouts/LayoutsHome/Header'

import './whos_turn.css'
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
import img_horse from "assets/images/chess_games/horse_moves.jpg"
import img_queen from "assets/images/chess_games/queen_moves.jpg"


//answers-img
import horse_ans from "assets/images/chess_games/horse_ans.jpg"
import bishop_ans from "assets/images/chess_games/bishop_ans.jpg"
import queen_ans from "assets/images/chess_games/queen_ans.jpg"
import pawn_ans from "assets/images/chess_games/pawn_ans.jpg"
import rook_ans from "assets/images/chess_games/rook_ans.jpg"
import king_ans from "assets/images/chess_games/king_ans.jpg"



const Whos_turn = () => {
  const [value, setValue] = useState('1')

  const [array, setArray] = useState([img_ladya, img_horse,img_queen]);
  const [arrayAnswer, setArrayAnswers] = useState([horse_ans, bishop_ans, queen_ans, pawn_ans, rook_ans, king_ans]);
  const [userAnswer, setUserAnswer] = useState("");
  const [isOver, setIsOver] = useState("");
  const [userResponce, setUserResponce] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false)
  const [currentAnswer, setCurrentAnswer] = useState('')

  // function randomtask(arrayAnswer, array) {
  //    /*let random = Math.floor(Math.random() * array.length);*/
  //    var chosenImages = [];
  //    const count = 3;

  //  while (chosenImages.length < count) {

  //    var randomIndex = Math.floor(Math.random() * arrayAnswer.length);

  //    if (chosenImages.indexOf(arrayAnswer[randomIndex]) === -1) {
  //      chosenImages.push(arrayAnswer[randomIndex]);
  //    }
  //  }

  //  return chosenImages;
    
    
  // }


  function checkAnswer(userResponce) {
    switch (value) {
      case "1":
        if (userResponce === rook_ans) {
          toast("Молодец!");
          setIsCompleted(true)
          setCurrentAnswer("")
                
        }
        else {
          toast("Ответ неправильный");
        }
        break;
      case "2":
        if (userResponce === horse_ans) {
          toast("Молодец!");
          setIsCompleted(true)
          setCurrentAnswer("")
        }
        else {
          toast("Ответ неправильный");
        }
        break;
      case "3":
        if(userResponce === queen_ans){
          toast("Молодец!");
          setIsCompleted(true)
          setCurrentAnswer("")
        }
        else {
          toast("Ответ неправильный");
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
              <div className='title'>
                найди подходящую картинку
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
                        <div className="task">

                          <div className='task-img'>
                            <img src={img_ladya} alt="" />

                          </div>
                          <div className='Answers'>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer(rook_ans)}><img src={rook_ans} alt=""  /></button> 
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
                              <button className='Answer' onClick={() => checkAnswer()}><img src={rook_ans} alt="" /></button>
                            </div>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer()}><img src={pawn_ans} alt="" /></button>

                            </div>
                            <div className='selected-answer'>
                              <button className='Answer' onClick={() => checkAnswer()}><img src={horse_ans} alt="" /></button>

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
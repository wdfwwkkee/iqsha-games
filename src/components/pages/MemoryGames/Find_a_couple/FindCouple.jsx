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


// images-tasks
import bee from 'assets/images/memory_games/find_the_shadow/tasks/bee.jpg'
import eagle from 'assets/images/memory_games/find_the_shadow/tasks/eagle.jpg'
import cat from 'assets/images/memory_games/find_the_shadow/tasks/cat.jpg'


// images-answers
import bee_shadow from 'assets/images/memory_games/find_the_shadow/answers/bee_shadow.png'
import cat_shadow from 'assets/images/memory_games/find_the_shadow/answers/cat_shadow.jpg'
import eagle_shadow from 'assets/images/memory_games/find_the_shadow/answers/eagle_shadow.jpg'
import dog_shadow from 'assets/images/memory_games/find_the_shadow/answers/dog_shadow.jpg'
import sparrow_shadow from 'assets/images/memory_games/find_the_shadow/answers/sparrow_shadow.png'
import ant_shadow from 'assets/images/memory_games/find_the_shadow/answers/ant_shadow.jpg'





const FindCouple = () => {
  const [array, setArray] = useState([bee, cat, eagle])
  const [arrayAnswers, setArrayAnswers] = useState([bee_shadow, eagle_shadow, cat_shadow, sparrow_shadow, ant_shadow, dog_shadow])
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [value, setValue] = useState('1')
  const [isCompleted, setIsCompleted] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const [userResponce, setUserResponce] = useState(null);


  function checkForCompleted() {
    if (Number(value) < 3) {
      setValue(prev => (Number(prev) + 1).toString())
      setIsCompleted(false)
    }
  }
  function checkAnswer(userResponce) {
    switch (value) {
      case "1":
        if (userResponce === cat_shadow) {
          toast("Молодец!");
          setIsCompleted(true)
          setCurrentAnswer("")
          checkForCompleted();
        }
        else {
          toast("Ответ неправильный");
        }
        break;
      case "2":
        if (userResponce === bee_shadow) {
          toast("Молодец!");
          setIsCompleted(true)
          setCurrentAnswer("")
          checkForCompleted();
        }
        else {
          toast("Ответ неправильный");
        }
        break;
      case "3":
        if (userResponce === eagle_shadow) {
          toast("Молодец!");
          setIsCompleted(true)
          setCurrentAnswer("")
          checkForCompleted();
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
      <main>
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
              <div className="">Найди тень существа</div>
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
                          <img src={cat} alt="" />

                        </div>
                        <div className='Answers'>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(cat_shadow)}><img src={cat_shadow} alt="" /></button>
                          </div>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(dog_shadow)}><img src={dog_shadow} alt="" /></button>

                          </div>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(bee_shadow)}><img src={bee_shadow} alt="" /></button>

                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="2">
                      <div className="task">

                        <div className='task-img'>
                          <img src={bee} alt="" />

                        </div>
                        <div className='Answers'>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(sparrow_shadow)}><img src={sparrow_shadow} alt="" /></button>
                          </div>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(ant_shadow)}><img src={ant_shadow} alt="" /></button>

                          </div>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(bee_shadow)}><img src={bee_shadow} alt="" /></button>

                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="3">
                      <div className="task">

                        <div className='task-img'>
                          <img src={eagle} alt="" />

                        </div>
                        <div className='Answers'>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(sparrow_shadow)}><img src={sparrow_shadow} alt="" /></button>
                          </div>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(eagle_shadow)}><img src={eagle_shadow} alt="" /></button>

                          </div>
                          <div className='selected-answer'>
                            <button className='Answer' onClick={() => checkAnswer(cat_shadow)}><img src={cat_shadow} alt="" /></button>

                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </TabContext>
                </Box>
                <button onClick={() => checkAnswer()}>{isOver ? <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Закончить</Link> : "Проверить ответ"}</button>
              </div>
            </main >
          )
        }
      </main>
      <ToastContainer style={{ fontSize: 17 }} />
    </div>
  )
}

export default FindCouple
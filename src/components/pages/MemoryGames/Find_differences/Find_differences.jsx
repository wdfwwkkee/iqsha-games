import React, {useState, useEffect} from 'react'
import './Find_differences.css'
import Header from 'Layouts/LayoutsHome/Header'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";




const FindDifferences = () => {
  const [value, setValue] = useState('1')
    const [isCompleted, setIsCompleted] = useState(false)
    const [isOver, setIsOver] = useState(false)

    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const [userAnswer, setUserAnswer] = useState("");
    const [actions, setActions] = useState(["+", '-',]);
    const [firstSym, setFirstSym] = useState(array[Math.floor(Math.random() * array.length)]);
    const [secondSym, setSecondSym] = useState(firstSym === array[Math.floor(Math.random() * array.length)] ? array[Math.floor(Math.random() * array.length)] : array[Math.floor(Math.random() * array.length)])
    const [action, setAction] = useState(actions[Math.floor(Math.random() * actions.length)])
    const result = eval(firstSym + action + secondSym)

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
    if (userAnswer.toString() === action.toString()) {
        toast("Молодец!");
        setIsCompleted(true)
        if (Number(value) < 3) {
            setValue(prev => (Number(prev) + 1).toString())
            setArray([...array].sort(() => Math.random() - 0.5))
            setIsCompleted(false)
            setFirstSym(array[Math.floor(Math.random() * array.length)])
            setSecondSym(array[Math.floor(Math.random() * array.length)])
            setAction(actions[Math.floor(Math.random() * actions.length)])
            setUserAnswer("")
        }

    } else {
        toast("Ответ неправильный");
    }
  }    


  return (
    <div>
        <Header />
        
        </div>
  )
}

export default FindDifferences
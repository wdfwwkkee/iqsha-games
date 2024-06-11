import Games from 'components/pages/Games/Games';
// import Home from "./components/pages/Home/Home";
// import Contacts from "./components/pages/Contact/Contacts";

import 'assets/styles/index.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChessGames from 'components/pages/ChessGames/ChessGames';
import MathGames from 'components/pages/MathGames/MathGames';
// import ReadingGames from 'components/pages/ReadingGames/ReadingGames';
// import MemoryGames from 'components/pages/MemoryGames/MemoryGames';
import LogicGames from 'components/pages/LogicGames/LogicGames';
import NumberSeries from 'components/pages/MathGames/number_series/NumberSeries';
import TaskGames from 'components/pages/MathGames/tasks_games/TaskGames';
import MoreLess from 'components/pages/MathGames/MoreLess/MoreLess';
import NumberMathGame from 'components/pages/MathGames/number_game/NumberMathGame';
import MathMoneyGame from 'components/pages/MathGames/money_game/MathMoneyGame';
import WhosTurn from 'components/pages/ChessGames/whos_turn/WhosTurn';
import WhatExcess from 'components/pages/LogicGames/what_excess/WhatExcess';
import ContinueSeries from 'components/pages/LogicGames/continue_series/ContinueSeries';
import OneWord from 'components/pages/LogicGames/one_word/OneWord';
import Register from 'components/pages/Register/Register';
import Report from 'components/pages/Report/Report';



function App() {
  // const [state, setState] = useState(null);

  // const callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };
  
  // // получение GET маршрута с сервера Express, который соответствует GET из server.js 
  // useEffect(() => {
  //   callBackendAPI()
  //   .then(res => setState(res.express))
  //   .catch(err => console.log(err));
  // }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* GamePages */}
          <Route exact element={<Games />} path="/iqsha-games/" />
          <Route element={<ChessGames />} path="/iqsha-games/games/chess-games" />
          <Route element={<MathGames />} path="/iqsha-games/games/math-games" />
          {/* <Route element={<ReadingGames />} path="/games/reading-games" /> */}
          {/* <Route element={<MemoryGames />} path="/games/memory-games" /> */}
          <Route element={<LogicGames />} path="/iqsha-games/games/logic-games" />

          {/* MathGames */}
          <Route element={<MoreLess />} path="/iqsha-games/games/math-games/more_lessor" />
          <Route element={<NumberSeries />} path="/iqsha-games/games/math-games/number_series" />
          <Route element={<TaskGames />} path="/iqsha-games/games/math-games/tasks" />         
          <Route element={<NumberMathGame />} path="/iqsha-games/games/math-games/number" />
          <Route element={<MathMoneyGame />} path="/iqsha-games/games/math-games/math_game_money" />

          {/* LogicGames */}
          <Route element={<WhatExcess />} path="/iqsha-games/games/logic-games/what_excess"/>
          <Route element={<ContinueSeries />} path="/iqsha-games/games/logic-games/continue_series"/>
          <Route element={<OneWord />} path="/iqsha-games/games/logic-games/one_word"/>


          {/* ChessGames */}
          <Route element={<WhosTurn />} path="/iqsha-games/games/chess-games/whos_turn"/>

          {/* Other */}
          <Route element={<Register />} path="/iqsha-games/register" />
          <Route element={<Report />} path="/iqsha-games/report" />  

          <Route path="/*" element={<div>NotFound</div>} />

          
          {/* <Route element={<Contacts />} path="/contacts" /> */}

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
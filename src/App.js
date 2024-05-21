import Games from 'components/pages/Games/Games';
import Home from "./components/pages/Home/Home";
import Contacts from "./components/pages/Contact/Contacts";

import 'assets/styles/index.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChessGames from 'components/pages/ChessGames/ChessGames';
import MathGames from 'components/pages/MathGames/MathGames';
import ReadingGames from 'components/pages/ReadingGames/ReadingGames';
import MemoryGames from 'components/pages/MemoryGames/MemoryGames';
import LogicGames from 'components/pages/LogicGames/LogicGames';
import NumberSeries from 'components/pages/MathGames/number_series/NumberSeries';
import TaskGames from 'components/pages/MathGames/tasks_games/TaskGames';
import MoreLess from 'components/pages/MathGames/MoreLess/MoreLess';
import NumberMathGame from 'components/pages/MathGames/number_game/NumberMathGame';
import MathMoneyGame from 'components/pages/MathGames/money_game/MathMoneyGame';

import Whos_turn from 'components/pages/ChessGames/whos_turn/Whos_turn';
import FindDifferences from 'components/pages/MemoryGames/Find_differences/Find_differences';
import FindCouple from 'components/pages/MemoryGames/Find_a_couple/FindCouple';
import WhatExcess from 'components/pages/LogicGames/what_excess/WhatExcess';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />

          {/* GamePages */}
          <Route element={<Games />} path="/games" />
          <Route element={<ChessGames />} path="/games/chess-games" />
          <Route element={<MathGames />} path="/games/math-games" />
          <Route element={<ReadingGames />} path="/games/reading-games" />
          <Route element={<MemoryGames />} path="/games/memory-games" />
          <Route element={<LogicGames />} path="/games/logic-games" />

          {/* MathGames */}
          <Route element={<MoreLess />} path="/games/math-games/more_lessor" />
          <Route element={<NumberSeries />} path="/games/math-games/number_series" />
          <Route element={<TaskGames />} path="/games/math-games/tasks" />
          <Route element={<FindCouple />} path="/games/memory-games/find_couple" />
          <Route element={<FindDifferences />} path="/games/memory-games/find_differences" />

    
          <Route element={<NumberMathGame />} path="/games/math-games/number" />
          <Route element={<MathMoneyGame />} path="/games/math-games/math_game_money" />

          <Route element={<WhatExcess />} path="/games/logic-games/what_excess" />


          <Route element={<Whos_turn />} path="/games/chess-games/whos_turn"/>
          {/* Other */}
          <Route element={<Contacts />} path="/contacts" />

          <Route path="/*" element={<div>NotFound</div>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

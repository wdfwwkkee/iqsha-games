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
<<<<<<< HEAD
import FindCouple from 'components/pages/MemoryGames/Find_a_couple/FindCouple';
import Find_differences from 'components/pages/MemoryGames/Find_differences/Find_differences';
=======
import NumberMathGame from 'components/pages/MathGames/number_game/NumberMathGame';

import Whos_turn from 'components/pages/ChessGames/whos_turn/Whos_turn';
>>>>>>> 90c6d776412804f343d30141796cac3a745c4041

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
<<<<<<< HEAD
          <Route element={<FindCouple />} path="/games/memory-games/find_couple" />
          <Route element={<Find_differences />} path="/games/memory-games/find_differences" />

    
=======
          <Route element={<NumberMathGame />} path="/games/math-games/number" />

          <Route element={<Whos_turn />} path="/games/chess-games/whos_turn"/>
          {/* Other */}
>>>>>>> 90c6d776412804f343d30141796cac3a745c4041
          <Route element={<Contacts />} path="/contacts" />

          <Route path="/*" element={<div>NotFound</div>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

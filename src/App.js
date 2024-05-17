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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route element={<Games />} path="/games" />

          <Route element={<ChessGames />} path="/games/chess-games" />
          <Route element={<MathGames />} path="/games/math-games" />
          <Route element={<ReadingGames />} path="/games/reading-games" />
          <Route element={<MemoryGames />} path="/games/memory-games" />
          <Route element={<LogicGames />} path="/games/logic-games" />


          <Route element={<NumberSeries />} path="/games/math-games/number_series" />
          <Route element={<TaskGames />} path="/games/math-games/tasks" />


          <Route element={<Contacts />} path="/contacts" />

          <Route path="/*" element={<div>NotFound</div>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

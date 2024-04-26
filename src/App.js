import Games from 'components/pages/Games/Games';
import Home from "./components/pages/Home/Home";


import 'assets/styles/index.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChessGames from 'components/pages/ChessGames/ChessGames';
import MathGames from 'components/pages/MathGames/MathGames';
import ReadingGames from 'components/pages/ReadingGames/ReadingGames';
import MemoryGames from 'components/pages/MemoryGames/MemoryGames';
import LogicGames from 'components/pages/LogicGames/LogicGames';

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



          <Route path="/*" element={<div>NotFound</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

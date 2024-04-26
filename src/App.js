import Games from 'components/pages/Games/Games';
import Home from "./components/pages/Home/Home";


import './assets/styles/index.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route element={<Games />} path="/games" />


          <Route path="/*" element={<div>NotFound</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

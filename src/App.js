import Games from 'components/pages/Games/Games';
import Home from "./components/pages/Home/Home";
import Contacts from "./components/pages/Contact/Contacts";

import './assets/styles/index.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route element={<Games />} path="/games" />
          <Route element={<Contacts />} path="/contacts" />

          <Route path="/*" element={<div>NotFound</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

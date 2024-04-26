import './assets/styles/index.scss'


import Home from "./components/pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<Home />} path="/" />


          <Route path="/*" element={<div>NotFound</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

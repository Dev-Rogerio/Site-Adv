import React from "react";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

 import Home from './Componentes/Home/home.jsx';
 import Contato from '../src/Componentes/Contato/contato.jsx'

import "./style.css";

function App() {
  return (
    
    <div className="App">
       <Router>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
       </Router>
    </div> 
  )
}
export default App;

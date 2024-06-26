import { useState } from "react";


import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutusPage from "./components/pages/AboutusPage";

function App() {
  return (

    <Routes>

      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/about" element={<AboutusPage/>} ></Route>

    </Routes>
    
        
    
    
  );
}

export default App;

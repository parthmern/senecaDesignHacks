import { useState } from "react";


import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutusPage from "./components/pages/AboutusPage";
import EventsPage from "./components/pages/EventsPage";
import SingleEventPage from "./components/pages/SingleEventPage";
import ResourcesPage from "./components/pages/ResourcesPage";
import SingleCategoryPage from "./components/pages/SingleCategoryPage";
import SingleWorkshopPage from "./components/pages/SingleWorkshopPage";

function App() {
  return (

    <Routes>

      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/about" element={<AboutusPage/>} ></Route>
      <Route path="/events" element={<EventsPage />}></Route>
      <Route path="/event/:id" element={<SingleEventPage />}></Route>
      <Route path="/resources" element={<ResourcesPage />} ></Route>
      <Route path="/category/:id" element={<SingleCategoryPage />}></Route>
      <Route path="/:catName/workshop/:id" element={<SingleWorkshopPage />}></Route>

    </Routes>
    
        
    
    
  );
}

export default App;

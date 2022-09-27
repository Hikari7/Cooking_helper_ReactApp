import React, { useState } from "react";
import RecipeIdea from "./Components/RecipeIdea";
import "./App.css";
import Carolies from "./Components/Carolies";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idea" element={<RecipeIdea />} />
          <Route path="/carolies" element={<Carolies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

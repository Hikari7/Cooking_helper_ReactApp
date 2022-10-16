import React, { useState } from "react";
import RecipeIdea from "./pages/ideaComponents/RecipeIdea";
import "./App.css";
import MealMain from "./pages/searchComponents/MealMain";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroceryMain from "./pages/groceryListComponents/GroceryMain";

export const App = () => {
  return (
    <div>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/idea" element={<RecipeIdea />} />
            <Route path="/carolies" element={<MealMain />} />
            <Route path="/grocerylist" element={<GroceryMain />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;

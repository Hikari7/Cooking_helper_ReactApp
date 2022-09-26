import React, { useState } from "react";
import RecipeIdea from "./Components/RecipeIdea";
import "./App.css";
import Carolies from "./Components/Carolies";
import Home from "./Components/Home";

export const App = () => {
  return (
    <div className="App">
      {/* <RecipeIdea />
      <Carolies /> */}
      <Home></Home>
    </div>
  );
};

export default App;

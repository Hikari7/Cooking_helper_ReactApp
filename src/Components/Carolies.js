import React, { useState } from "react";
import api from "../apis/api"
import MealList from "./MealList";

function Carolies() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value); //handle changeで入力された値がsetCaloriesに更新される
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${api.key}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("err");
      });
  }

  return (
    <div className="Carolies">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />} 
    </div>
  );
}

//もしMealdataがあったらmealDataをshowする

export default Carolies;

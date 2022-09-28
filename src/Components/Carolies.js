import React, { useState } from "react";
import api from "../apis/api";
import MealList from "./MealList";
import { Link } from "react-router-dom";

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
    <div className="font-fancy  px-16 py-6 font-body  bg-gray-200 min-h-screen">
      <main className="roundedpx-16 py-16 px-10 bg-white">
        <h3 className="text-gray-800 mb-3 text-center text-3xl">
          Get healthy meals!
        </h3>
        <h2 className="text-gray-700 mb-3 text-center">
          Type your desired calories
        </h2>
        <div className="search mx-auto text-center">
          <input
            className="block shadow-md rounded px-2 pt-2 pb-2 mb-6 mt-6 container  w-1/3 text-center  mx-auto"
            type="number"
            placeholder="Carolies (e.g. 2000)"
            onChange={handleChange}
          />
        </div>
        <div className="search mx-auto text-center">
          <label className="text-gray-800 text-lg">
            <button
              className="bg-pink-400 hover:bg-pink-20 text-white font-bold py-1 px-4 rounded"
              onClick={getMealData}
            >
              Search
            </button>
            {mealData && <MealList mealData={mealData} />}
          </label>
        </div>
        <div className="bottom flex justify-center mt-5">
          <Link to="/">
            <button className="bg-transparent hover:bg-pink-200 text-pink-400 font-semibold hover:text-white py-1 px-4 border border-pink-300 hover:border-transparent rounded mt-5">
              Back
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

//もしMealdataがあったらmealDataをshowする

export default Carolies;

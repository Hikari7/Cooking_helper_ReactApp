import React from "react";
import Meal from "./Meal";

//↑子コンポーネントからimportしてそれを使うMeal.jsの関数が使えるようになる(meal)

export default function MealList({ mealData }) {
  //App.jsから取ってきたprops
  const nutrients = mealData.nutrients;

  return (
    <main>
      <h1 className="my-5 text-xl text-gray-700">
        Here's your today's meal suggestion!
      </h1>

      <ul className="text-gray-700 flex justify-between bg-pink-200 text-xs p-5 rounded-md m-auto w-2/4">
        <li>Calories: {nutrients.calories}</li>
        <li>Carbohydrates: {nutrients.carbohydrates}</li>
        <li>Fat: {nutrients.fat}</li>
        <li>Protein: {nutrients.protein}</li>
      </ul>

      <section className="container flex w-full">
        {mealData.meals.map((meal) => {
          console.log(mealData);
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}

//ここで"meal"というpropsが作られる
//App.jsの子コンポーネント

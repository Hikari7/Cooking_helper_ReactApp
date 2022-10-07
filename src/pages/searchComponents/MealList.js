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

      <ul className="text-gray-700 flex justify-around bg-pink-200 text-xs p-5 rounded-md m-auto w-2/4">
        <li>
          <p className="font-semibold">Calories</p>
          <p>{nutrients.calories}</p>
        </li>
        <li>
          <p className="font-semibold">Carbohydrates</p>
          <p>{nutrients.carbohydrates}</p>
        </li>
        <li>
          <p className="font-semibold">Fat</p>
          <p>{nutrients.fat}</p>
        </li>
        <li>
          <p className="font-semibold">Protein</p>
          <p>{nutrients.protein}</p>
        </li>
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

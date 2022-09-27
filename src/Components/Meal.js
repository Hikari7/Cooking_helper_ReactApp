import React, { useState, useEffect } from "react";
import api from "../apis/api";

//MealListを出した後に、アクセスできるようにする個々のレシピを取得
//Exportは子コンポーネント、親コンポーネントはMealList
//名前なしdefault export
//もしアロー関数で書くならば、
//const Meal = () => {} って書いた後にexport default Mealを一番最後にexportさせる

export default function Meal({ meal }) {
  //MealListから渡されたprops（propsは親から子へ渡されるので。親からもらった情報を子が使う。今回は"meal"）
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    //新しいAPIを取得する
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${api.key}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("err");
      });
  }, [meal.id]); //これが変わるたびに更新される

  return (
    <article>
      <div className=" bg-white rounded-xl shadow-lg space-y-2 p-6 items-center space-x-6 m-2 min-h-200">
        <h1 className="text-gray-800">{meal.title}</h1>
        <img className="rounded-sm  items-center" src={imageUrl} alt="recipe" />
        <ul className="text-gray-700 w-3/5 m-auto">
          <li className="">Preparation time: {meal.readyInMinutes} minuets</li>
          <li>Number of servings: {meal.servings} minuets</li>
        </ul>

        <a className="text-center" href={meal.sourceUrl}>
          Go to recipe
        </a>
      </div>
    </article>
  );
}

//MealListの子コンポーネント

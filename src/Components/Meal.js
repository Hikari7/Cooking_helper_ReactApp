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
      <div className=" bg-white rounded-xl shadow-lg  p-6 items-center  mt-10 min-h-200 mx-2">
        <h1 className="text-gray-800 my-5 text-md h-20 text-center items-center">
          {meal.title}
        </h1>
        <img
          className="rounded-sm  my-3 items-center"
          src={imageUrl}
          alt="recipe"
        />
        <ul className="text-gray-700 w-1/2 m-auto text-sm h-50">
          <li className="my-2 w-auto">
            Preparation time: {meal.readyInMinutes} minuets
          </li>
          <li className="my-2 w-auto">
            Number of servings: {meal.servings} minuets
          </li>
        </ul>
        <button className="bg-gray-400 hover:bg-pink-200 text-white hover:text-gray-400 font-bold py-1 px-4 rounded mt-4">
          <a className="text-center" href={meal.sourceUrl}>
            Go to recipe
          </a>
        </button>
      </div>
    </article>
  );
}

//MealListの子コンポーネント

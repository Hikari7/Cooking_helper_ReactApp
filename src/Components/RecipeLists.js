import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../apis/api";

const RecipeLists = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await axios.get(
        // `https://api.spoonacular.com/mealplanner/generate?apiKey=${api.key}`
        // `https://api.spoonacular.com/recipes/random?apiKey=${api.key}`
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api.key}`
      );

      console.log(datas.data.results);
      setResult(datas.data.results);
    };
    fetchDatas();
  }, []);


  const renderedResults = results.map((result) => {
    return (
      <div className="content">
          <div className="item">{result.title}</div>
          <div className="item">
          <img src={result.image}></img>
        </div>
      </div>
    );
  });
  
  
  return (
    <div>
      <form>
        <label>You can choose your today's dinner!</label>
      </form>
      <div>{renderedResults}</div>
    </div>
  );
};

export default RecipeLists;

//to do next
//fetch ingredients id api
//-> search ingredients
//-> put together with the similar ingredients
//-> Render to App JS
// is that possible???
//implement css

//食材を検索してEnterを押したら、自動でその食材を使ったレシピがランダムにピックアップされる

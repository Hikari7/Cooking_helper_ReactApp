import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../apis/api";

const RecipeLists = () => {
  const [results, setResult] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      if(results.length === 0){
        const datas = await axios.get(
  
          // `https://api.spoonacular.com/mealplanner/generate?apiKey=${api.key}`
          // `https://api.spoonacular.com/recipes/random?apiKey=${api.key}`
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api.key}`,
          {
            params: {
              query: "pasta",
            },
          }
        );
        // console.log(datas.data.results);
        //setItem = set the data (key, value )
        //Convert a JavaScript object into a string
        // localStorage.setItem("datas", JSON.stringify(datas.data));
        setResult(datas.data.results);
      }
      
    };
    fetchDatas();
  }, []);

  // useEffect(() => {
  //   //save the datas which I fetched
  //   const dataInLocalStorage = localStorage.getItem("datas");
  //   if (dataInLocalStorage) {
  //     console.log("No API call");
  //     //JSON.parse = constructing the JavaScript value or object described by the string.
  //     setResult(JSON.parse(dataInLocalStorage));
  //   }
  // }, []);

  const renderedResults = results.map((result) => {
    return (
      <div className="content" key={result.id}>
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

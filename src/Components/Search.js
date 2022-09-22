import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../apis/api";

const Search = () => {
  const [results, setResult] = useState([]);

  // console.log(results);

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await axios.get(
        // `https://api.edamam.com/search?q=chicken&app_id=${edamam.id}&app_key=${edamam.key}&from=0&to=3&calories=591-722`
        // `https://api.spoonacular.com/mealplanner/generate?apiKey=${api.key}`
        // `https://api.spoonacular.com/recipes/random?apiKey=${api.key}`
        `https://api.spoonacular.com/recipes/1003464/similar?apiKey=${api.key}`,
        {
          params: {
            number: 50,
          },
        }
      );
      console.log(datas.data);
      setResult(datas.data);
    };
    fetchDatas();
  }, []);

  // useEffect(() => console.log(results), [results]);

  const renderedResults = results.map((result) => {
    console.log(result);
    return (
      <div className="content">
        <a href={result.sourceUrl}>
          <div className="item">{result.title}</div>
        </a>
      </div>
    );
  });

  return (
    <div>
      <form>
        <label>This is your dinner tonight! </label>
      </form>
      <div>{renderedResults}</div>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import axios from "axios";
import edamam from "../apis/api";

const Search = () => {
  // const [term, setTerm] = useState("");
  const [results, setResult] = useState([]);

  // console.log(results);

  useEffect(() => {
    const fetchDatas = async () => {
      const datas = await axios.get(
        `https://api.edamam.com/search?q=chicken&app_id=${edamam.id}&app_key=${edamam.key}&from=0&to=3&calories=591-722`
      );

      // console.log(datas.data.hits);
      setResult(datas.data.hits);
    };
    fetchDatas();
  }, []);

  // useEffect(() => console.log(results), [results]);

  const renderedResults = results.map((result) => {
    console.log(result);
    return (
      <div className="content">
        <div className="item">{result.recipe.calories}</div>
        <div className="item">
          <img src={result.recipe.image}></img>
        </div>
      </div>
    );
  });

  return (
    <div>
      <form>
        <label>This is a recommended recipe! </label>
      </form>
      <div>{renderedResults}</div>
    </div>
  );
};

export default Search;

/* <input
  value={term}
  onChange={(e) => setTerm(e.target.value)}
  className="input"
/> */

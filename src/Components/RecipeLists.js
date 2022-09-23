import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import api from "../apis/api";

const RecipeLists = () => {
  const [results, setResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const ref = useRef();

  const handleRef = () => {
    console.log(ref.current.value);

    //filtering (setSearchQuery has the data only filtered)
    setSearchQuery(
      results.filter((result) =>
        result.title.toLowerCase().includes(ref.current.value)
      )
    );
  };

  useEffect(() => {
    const fetchDatas = async () => {
      if (results.length === 0) {
        const datas = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api.key}`
        );

        setResult(datas.data.results);
      }
    };
    fetchDatas();
  }, []);

  return (
    <div className="main">
      <div className="search">
        <label>Get some ideas of today's din-din!</label>
        <input type="text" ref={ref} onChange={handleRef} />
      </div>
      <div className="container">
        {searchQuery.map((result) => (
          <div className="content" key={result.id}>
            <h3>{result.title}</h3>
            <div className="item">
              <img src={result.image}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeLists;

/* <input
  value={term}
  onChange={(e) => setTerm(e.target.value)}
  className="input"
/>; */

//to do next
//fetch ingredients id api
//-> search ingredients
//-> put together with the similar ingredients
//-> Render to App JS
// is that possible???
//implement css

//食材を検索してEnterを押したら、自動でその食材を使ったレシピがランダムにピックアップされる

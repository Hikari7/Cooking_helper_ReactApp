import React, { useState, useEffect } from "react";
import axios from "axios";
import edamam from "../apis/edamam";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipes = await axios.get(
        `https://api.edamam.com/search?q=chicken&app_id=${edamam.id}&app_key=${edamam.key}&from=0&to=3&calories=591-722`
      );
      console.log(recipes.data.hits);
    };
    fetchRecipe();
  }, []);

  return (
    <div>
      <form>
        <label>Enter your favorite food! </label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        ></input>
      </form>
    </div>
  );
};

export default Search;

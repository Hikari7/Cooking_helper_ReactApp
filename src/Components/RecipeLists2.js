import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import api from "../apis/api";
// import "./App.css";

const RecipeLists2 = () => {
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
          `https://api.spoonacular.com/recipes/715538/similar?apiKey=${api.key}`
        );
        console.log(datas);

        setResult(datas.data);
      }
    };
    fetchDatas();
  }, []);

  return (
    <div className=" px-16 py-6 bg-gray-200 font-body">
      <main className="roundedpx-16 py-6 bg-white">
        <div className="search flex justify-center">
          <form
            p-3
            bg-gray-50
            rounded
            bg-opacity-30
            backdrop-filter
            backdrop-blur-md
            shadow-md
          >
            <label className="text-gray-500 text-3xl ">
              Get some ideas of today's din-din!
            </label>
            <input
              className="block shadow-md rounded px-2 pt-2 pb-2 mb-6 mt-6 container mx-auto"
              type="text"
              ref={ref}
              onChange={handleRef}
            />
          </form>
        </div>
        <div className="container mx-auto ">
          <div className="container ">
            {searchQuery.map((result) => (
              <div className="content w" key={result.id}>
                <a href={result.sourceUrl}>
                  <h1 className="text-primary m1-2">{result.title}</h1>
                </a>
                <div className="text-gray-700">
                  Ready in minuets: {result.readyInMinutes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeLists2;

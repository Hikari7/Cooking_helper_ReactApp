import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import api from "../../apis/api";
import { Link } from "react-router-dom";

const RecipeIdea = () => {
  const [results, setResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const ref = useRef();

  const handleRef = () => {
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
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api.key}`,
          {
            //axiosにparamsプロパティを用意してそれにオブジェクトを代入すると、keyとvalueはそれらを全て受け取りURLの末尾に自動的に引っ付く
            params: {
              cuisine:
                "Japanese, Italian, Korean, Mexican, American, French, Chinese, Greek, German, British,Thai, Vietnamese",
              number: 30,
            },
          }
        );

        setResult(datas.data.results);
      }
    };
    fetchDatas();
  }, [results]);

  return (
    <div className="font-fancy  px-16 py-6 font-body  bg-gray-200 min-h-screen">
      <main className="roundedpx-16 py-16 px-10 bg-white">
        <div className="search flex justify-center">
          <form>
            <label className="text-gray-800 text-3xl ">
              Get some ideas of today's din-din!
            </label>
            <input
              className="block shadow-md rounded px-2 pt-2 pb-2 mb-6 mt-6 container mx-auto"
              type="text"
              ref={ref}
              onChange={handleRef}
              placeholder="type whatever you want"
            />
          </form>
        </div>
        <div className="container mx-auto ">
          <div className=" grid grid-cols-2 gap-6">
            {searchQuery.map((result) => (
              <div
                className="content p-6 m-5 bg-gray-100 border-1 border-gray-300 drop-shadow-xl rounded-md"
                key={result.id}
              >
                <h3 className="text-orange-300 text-md mb-3 text-center h-10">
                  {result.title}
                </h3>
                <div className="items-center">
                  <img className="rounded m-auto" src={result.image}></img>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom flex justify-center mt-5">
          <Link to="/">
            <button className="bg-transparent hover:bg-pink-200 text-pink-300 font-semibold hover:text-white py-1 px-4 border border-pink-400 hover:border-transparent rounded ">
              Back
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default RecipeIdea;

import React, { useState, useEffect } from "react";
// import InputForm from "./InputForm";

//inputFormが子どもで、tobuyListが親
//inputで入力された内容を、ここにrenderingさせたい

const ToBuyList = ({ text }) => {
  // console.log(text); //文字列だけ受け取ることができたから、配列にしていくよ
  const [lists, setLists] = useState([]);

  // スプレッド構文でpushする
  useEffect(() => {
    setLists((prevState) => [...lists, text]);
  }, [text]);

  return (
    <div>
      <ul>
        {lists.map((list) => {
          return (
            <li className="mx-auto justify-center flex items-center my-2 w-2/4 ">
              <div
                key={list}
                className="bg-orange-300 p-2 w-full tracking-wider rounded-md"
              >
                {list}
              </div>
              <span className="material-symbols-outlined items-center cursor-pointer hover:opacity-30">
                delete
              </span>
              <span className="material-symbols-outlined items-center cursor-pointer hover:opacity-30">
                edit
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToBuyList;

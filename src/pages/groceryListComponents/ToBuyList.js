import React, { useState, useEffect } from "react";

//inputFormが子どもで、tobuyListが親
//inputで入力された内容を、ここにrenderingさせたい

const ToBuyList = ({ text }) => {
  // console.log(text); //文字列だけ受け取ることができたから、配列にしていくよ
  const [lists, setLists] = useState([]);

  // スプレッド構文でpushする

  //だがしかし、それぞれのlistにkeyを割り振りたい(オブジェクトの形)
  useEffect(() => {
    setLists((prevState) => [...prevState, text]);
  }, [text]);

  const handleDelete = (index) => {
    setLists((prevState) => [
      ...lists.slice(0, index),
      ...lists.slice(index + 1, lists.length),
    ]);
  };

  return (
    <div>
      <ul>
        {lists.map((list, index) => {
          return (
            <li
              className="mx-auto justify-center flex items-center my-2 w-2/4"
              key={index}
            >
              <div className="bg-orange-300 p-2 w-full tracking-wider rounded-md">
                {list}
              </div>
              <span
                className="material-symbols-outlined items-center cursor-pointer hover:opacity-30"
                onClick={(e) => handleDelete(index)}
              >
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

//※onClick={handleDelete}で、onClickしたら、handlDeleteという「関数」が呼び出されますよってこと

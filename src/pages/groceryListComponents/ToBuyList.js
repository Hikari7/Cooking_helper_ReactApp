import React, { useState, useEffect } from "react";
// import InputForm from "./InputForm";

//inputFormが子どもで、tobuyListが親
//inputで入力された内容を、ここにrenderingさせたい

const ToBuyList = ({ text }) => {
  // console.log(text); //文字列だけ受け取ることができたから、配列にしていくよ
  const [lists, setLists] = useState([]);

  // setLists(()=> {})

  useEffect(() => {
    setLists((prevState) => [...lists, text]);
  }, [text]);

  return (
    <div>
      <ul>
        {lists.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToBuyList;

import React, { useState, useEffect } from "react";
import ToBuyListItem from "./ToBuyListItem";

//inputFormが子どもで、tobuyListが親
//inputで入力された内容を、ここにrenderingさせたい

const ToBuyList = ({ text }) => {
  const [lists, setLists] = useState([]);
  // スプレッド構文でpushする

  useEffect(() => {
    if (!!text) {
      setLists((prevState) => [
        ...prevState,
        { id: Math.random(), completed: false, text },
      ]);
    }
  }, [text]);

  // useEffect(() => {
  // console.log("test");
  // console.log(lists);
  // }, [lists]);

  const handleDelete = (key) => {
    const removeItem = lists.filter((list) => {
      return list.id !== key;
    });
    setLists(removeItem);
  };

  const handleCompleted = (key) => {
    const completedItem = lists.map((list) => {
      console.log(list);
      if (key === list.id) {
        return {
          ...list,
          completed: !list.completed,
        };
      }
      return list;
    });
    setLists(completedItem);
  };

  const handleEdit = (list) => {
    console.log("edit mode");
  };

  //toBuyListItemにオブジェクトのpropsを渡す
  return (
    <div>
      <ul>
        {lists.map((list) => (
          <ToBuyListItem
            key={list.id} //key
            list={list.id} //list
            text={list.text}
            completed={list.completed}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToBuyList;

//※onClick={handleDelete}で、onClickしたら、handlDeleteという「関数」が呼び出されますよってこと

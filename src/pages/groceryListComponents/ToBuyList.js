import React, { useState, useEffect, useRef } from "react";
import ToBuyListItem from "./ToBuyListItem";

//inputFormが子どもで、tobuyListが親
//inputで入力された内容を、ここにrenderingさせたい

const ToBuyList = ({ text }) => {
  const [lists, setLists] = useState([]);
  const [currentList, setCurrentList] = useState([]);

  useEffect(() => {
    if (!!text) {
      setLists((prevState) => [
        ...prevState,
        { id: Math.random(), completed: false, text, isEditing: false },
      ]);
    }
  }, [text]);

  //setCurrentList取れてないから取る必要がある

  const handleDelete = (key) => {
    const removeItem = lists.filter((list) => {
      return list.id !== key;
    });
    setLists(removeItem);
  };

  const handleCompleted = (key) => {
    const completedItem = lists.map((list) => {
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

  //[text,id]
  const handleEdit = ({ text, id }) => {
    const editItem = lists.map((list, key) => {
      if (id === list.id) {
        // update the list state with the updated list
        list.text = text;
      }

      return list;
    });
    setLists(editItem);
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

import React, { useState, useEffect } from "react";
import ToBuyListItem from "./ToBuyListItem";
import { nanoid } from "nanoid";

//inputFormが子どもで、tobuyListが親
//inputで入力された内容を、ここにrenderingさせたい

const ToBuyList = ({ text }) => {
  const [lists, setLists] = useState([{ id: "", completed: false }]);
  // const [completed, setCompleted] = useState(false);
  // スプレッド構文でpushする

  // const newList = { id: `todo-${nanoid()}`, completed: false };

  useEffect(() => {
    setLists((prevState) => [...prevState, { text }]);
  }, [text]);

  const handleDelete = (id) => {
    // console.log(list.id);
    setLists(() => [
      ...lists.slice(0, id),
      ...lists.slice(id + 1, lists.length),
    ]);
  };

  const handleCompleted = (id) => {
    setLists(
      lists.map((list, completed) => {
        if (id === id) {
          return {
            ...list,
            completed: !list.completed,
          };
          // return list;
        }
      })
    );
  };

  // list.completed ? "completed" : ""

  // const handleCompleted = (index) => {
  //   setCompleted(
  //     lists.map((list) => {
  //       //if this task has the same ID as the edited task
  //       if (list === list) {
  //         // use object spread to make a new object
  //         // whose `completed` prop has been inverted
  //         return {
  //           ...list,
  //           completed: !list.completed,
  //         };
  //       }
  //       return list;
  //     })
  //   );
  // };

  // const handleCompleted = (index) => {
  //   setLists(
  //     lists.map((list) => {
  //       return index == index
  //         ? { ...list, complete: !list.complete }
  //         : { ...list };
  //     })
  //   );
  // };

  // const handleCompleted = (list) => {
  //   setCompleted(!completed);
  // };

  const handleEdit = (index) => {
    console.log("editはここをクリック");
  };

  //toBuyListItemにオブジェクトのpropsを渡す
  return (
    <div>
      <ul>
        {lists.map((list) => (
          <ToBuyListItem
            key={list.id}
            list={list}
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

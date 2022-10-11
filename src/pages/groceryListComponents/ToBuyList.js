import React, { useState, useEffect } from "react";
import ToBuyListItem from "./ToBuyListItem";

//inputFormが子どもで、tobuyListが親
//inputで入力された内容を、ここにrenderingさせたい

const ToBuyList = ({ text }) => {
  const [lists, setLists] = useState();
  // const [checked, setChecked] = useState(false);

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

  const handleCompleted = (index) => {
    //更新した後の値をcheckedで取り入れなきゃいけないけど、そこにそれを入れたらいいかわかりません
    //子コンポーネント作った方がよき？？
    const updatedList = lists.map((list) => {
      if (index === list) {
        return {
          ...list,
          completed: !list.completed,
        };
      }
      return list;
    });
    setLists(updatedList);
  };

  //toBuyListItemにオブジェクトのpropsを渡す
  return (
    <div>
      <ul>
        {lists.map((list, index) => {
          return (
            <ToBuyListItem
              // key={list.id}
              list={list}
              index={index}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToBuyList;

//※onClick={handleDelete}で、onClickしたら、handlDeleteという「関数」が呼び出されますよってこと

// const handleDelete = (index) => {
//   setLists((prevState) => [
//     ...lists.slice(0, index),
//     ...lists.slice(index + 1, lists.length),
//   ]);
// };

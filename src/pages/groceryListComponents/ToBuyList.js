import { list } from "postcss";
import React, { useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";

//inputFormが子どもで、tobuyListが親
//inputで入力された内容を、ここにrenderingさせたい

const ToBuyList = ({ text }) => {
  // console.log(text); //文字列だけ受け取ることができたから、配列にしていくよ
  const [lists, setLists] = useState([]);
  const [checked, setChecked] = useState(false);

  // スプレッド構文でpushする

  //だがしかし、それぞれのlistにkeyを割り振りたい(オブジェクトの形)
  useEffect(() => {
    setLists((prevState) => [...prevState, text]);
  }, [text]);

  const handleCompleted = (index) => {
    // setChecked = {
    //   completed: false,
    // };

    //更新した後の値をcheckedで取り入れなきゃいけないけど、そこにそれを入れたらいいかわかりません
    //子コンポーネント作った方がよき？？

    setChecked(
      lists.map((list) => {
        if (index === list) {
          return {
            ...list,
            completed: !list.completed,
          };
        }
        return list;
      })
    );
  };

  const handleDelete = (index) => {
    setLists((prevState) => [
      ...lists.slice(0, index),
      ...lists.slice(index + 1, lists.length),
    ]);
  };

  const handleEdit = (index) => {
    console.log("aaa");
  };

  return (
    <div>
      <ul>
        {lists.map((list, index) => {
          return (
            <div className={`${list.completed ? "completed" : ""}`} key={index}>
              <li
                className="mx-auto justify-center flex items-center my-2 w-2/4"
                key={index}
              >
                {/* {
                  <Checkbox
                    checked={checked}
                    setChecked={setChecked}
                    className="inline"
                  />
                } */}
                <span
                  className="material-symbols-outlined items-center cursor-pointer hover:opacity-30"
                  checked
                  onClick={() => handleCompleted(index)}
                >
                  done
                </span>

                <div className="bg-orange-300 p-2 w-full tracking-wider rounded-md">
                  {list}
                </div>
                <span
                  className="material-symbols-outlined items-center cursor-pointer hover:opacity-30"
                  onClick={() => handleDelete(index)}
                >
                  delete
                </span>
                <span
                  className="material-symbols-outlined items-center cursor-pointer hover:opacity-30"
                  onClick={() => handleEdit(index)}
                >
                  edit
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToBuyList;

//※onClick={handleDelete}で、onClickしたら、handlDeleteという「関数」が呼び出されますよってこと

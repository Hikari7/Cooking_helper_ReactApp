import React, { useRef, useState } from "react";
//状態が変化していくものに対してはuseStateを使っていく(状態を管理する変数)

export default function InputForm({ setText }) {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText([ref.current.value]);
    ref.current.value = "";
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setText([ref.current.value]);
    ref.current.value = "";
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex my-6 mx-0 items-center justify-center"
      >
        <input
          className="block shadow-lg rounded px-2 pt-2 pb-2 w-3/5"
          type="text"
          ref={ref}
          placeholder="Type an item"
        />
        <span
          className="material-symbols-outlined cursor-pointer hover:opacity-30"
          onClick={handleAdd}
        >
          add
        </span>
      </form>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// // import InputForm from "./InputForm";

// //inputで入力された内容を、ここにrenderingさせたい

// const ToBuyList = ({ text }) => {
//   // console.log(text); //文字列だけ受け取ることができたから、配列にしていくよ

//   // const toBuy = { id: 1, completed: false };

//   const [lists, setLists] = useState("");

//   // スプレッド構文でpushする,　textが追加されるたびに更新
//   useEffect(() => {
//     setLists((prevState) => [...prevState, text]);
//   }, [text]);

//   return (
//     <div>
//       <ul>
//         {lists.map((list) => {
//           return (
//             <li
//               className="mx-auto justify-center flex items-center my-2 w-2/4"
//               key={list}
//             >
//               <label>
//                 <input
//                   type="checkbox"
//                   // checked={list.completed}
//                   readOnly
//                 ></input>
//               </label>
//               <div className="bg-orange-300 p-2 w-full tracking-wider rounded-md">
//                 {list}
//               </div>
//               <span className="material-symbols-outlined items-center cursor-pointer hover:opacity-30">
//                 delete
//               </span>
//               <span className="material-symbols-outlined items-center cursor-pointer hover:opacity-30">
//                 edit
//               </span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default ToBuyList;

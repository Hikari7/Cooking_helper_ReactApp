import React, { useRef, useState } from "react";
//状態が変化していくものに対してはuseStateを使っていく(状態を管理する変数)

// export const InputForm = () => {
export default function InputForm({ setText }) {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    setText(ref.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex mb-6 mt-6 mx-auto w-1/2">
        <input
          className="block shadow-lg rounded px-2 pt-2 pb-2"
          type="text"
          ref={ref}
          placeholder="Type an item"
        />
        <span className="material-symbols-outlined leading-6">add</span>
      </form>
      {/* {text && <ToBuyList />} */}
    </div>
  );
}

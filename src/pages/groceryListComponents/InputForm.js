import React, { useRef, useState } from "react";
//状態が変化していくものに対してはuseStateを使っていく(状態を管理する変数)

export default function InputForm({ setText }) {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(ref.current.value);
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
          onClick={handleSubmit}
        >
          add
        </span>
      </form>
    </div>
  );
}

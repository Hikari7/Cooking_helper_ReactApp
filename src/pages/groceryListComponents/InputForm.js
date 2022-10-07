import React, { useState, useRef } from "react";
import ToBuyList from "./ToBuyList";

// export const InputForm = () => {
export default function InputForm({}) {
  const [item, setItem] = useState("");
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };

  return (
    <div>
      <form>
        <input
          className="block shadow-lg rounded px-2 pt-2 pb-2 mb-6 mt-6 mx-auto"
          type="text"
          // ref={ref}
          // value={item}
          ref={ref}
          onChange={handleSubmit}
          placeholder="Type an item"
        />
      </form>
      {/* <ToBuyList /> */}
    </div>
  );
}

import { useState } from "react";

export default function ToBuyListItem({ list, index }) {
  return (
    <div className={`${list.completed ? "completed" : ""}`} key={index}>
      <li className="mx-auto justify-center flex items-center my-2 w-2/4">
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
}

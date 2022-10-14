import React, { useState } from "react";
import EditForm from "./EditForm";
import Header from "./Header";
import InputForm from "./InputForm";
import ToBuyList from "./ToBuyList";

function GroceryMain() {
  //textをpropとして扱う,{props}の形
  //一旦ここでconstで定義しておいて、それを子コンポーネントでgenerateするイメージ
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentList, setCurrentList] = useState({});

  //propsを子供に渡す
  return (
    <div>
      <div className="font-fancy  px-16 py-6 font-body  bg-gray-200 min-h-screen">
        <main className="roundedpx-16 py-16 px-10 bg-white container text-center mx-auto w-4/5">
          <Header />
          {isEditing ? (
            <EditForm
              setCurrentList={setCurrentList}
              setIsEditing={setIsEditing}
            />
          ) : (
            <InputForm setText={setText} />
          )}

          <ToBuyList
            text={text}
            currentList={currentList}
            // isEditing={isEditing}
            // setCurrentList={setCurrentList}
            setIsEditing={setIsEditing}
          />
        </main>
      </div>
    </div>
  );
}

export default GroceryMain;

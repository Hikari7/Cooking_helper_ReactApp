import React, { useState } from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import ToBuyList from "./ToBuyList";

function GroceryMain() {
  //textをpropとして扱う,{props}の形
  //一旦ここでconstで定義しておいて、それを子コンポーネントでgenerateするイメージ
  const [text, setText] = useState("");
  return (
    <div>
      <div className="font-fancy  px-16 py-6 font-body  bg-gray-200 min-h-screen">
        <main className="roundedpx-16 py-16 px-10 bg-white container text-center mx-auto w-4/5">
          <Header />
          <InputForm setText={setText} />
          <ToBuyList text={text} />
        </main>
      </div>
    </div>
  );
}

export default GroceryMain;

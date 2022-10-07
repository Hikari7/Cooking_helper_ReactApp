import React from "react";
import { Header } from "./Header";
import { InputForm } from "./InputForm";

const GroceryMain = () => {
  return (
    <div>
      <div className="font-fancy  px-16 py-6 font-body  bg-gray-200 min-h-screen">
        <main className="roundedpx-16 py-16 px-10 bg-white container text-center  mx-auto w-7/12">
          <Header />
          <InputForm />
        </main>
      </div>
    </div>
  );
};

export default GroceryMain;


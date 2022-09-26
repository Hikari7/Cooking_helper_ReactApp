import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/?food")`,
      }}
      className="h-screen bg-cover relative backdrop-blur-md"
    >
      <main className="container w-3/4  mx-auto justify-center block h-72  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md ">
        <div className="container w-1/2 justify-center items-center bg-slate-100/50 rounded-md p-24">
          <h1 className="text-3xl mx-auto my-3 text-center text-rose-500">
            Recipe searching app
          </h1>
          <ul className=" text-center text-lg text-slate-50">
            <li className="my-3">
              <a href="#">Get random whatever meals</a>
            </li>
            <li className="">
              <a href="#">Get healthy meals</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;

import React from "react";

const Header = () => {
  return (
    <div className="w-screen h-20 bg-indigo-500 flex justify-between px-4 md:px-8 lg:px-12 shadow-lg items-center mb-10">
      <h1 className="text-white font-semibold lg:text-xl">Status dashboard</h1>
      <a href="https://linkedin/in/galfrevn" className="text-white text-xs ">Valentín Galfré</a>
    </div>
  );
};

export default Header;

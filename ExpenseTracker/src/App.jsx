import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";

const App = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-[#222] text-[#fff]">
      <Header />
      <div className="">
        <Balance />
      </div>
    </div>
  );
};

export default App;

import React from "react";
// import "./App.css";

import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";

function App() {
  const number = 3;

  return (
    <div>
      <MyHeader />
      <Counter />
      <MyFooter />
    </div>
  );
}

export default App;

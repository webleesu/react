import React from "react";
// import "./App.css";

import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function App() {
  let name = "leesu";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_txt: {
      color: "green",
    },
  };
  const number = 5;

  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <b style={style.bold_txt} id="bold_txt">
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <MyFooter />
    </div>
  );
}

export default App;

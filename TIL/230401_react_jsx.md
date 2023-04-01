# REACT_JSX

[TOC]

### js 로 작성 가능

- return 값이 있어야함



### JSX 규칙

1. 여는 태그가 있으면 반드시 닫는 태그가 있어함!

   - 단일 태그로 닫아도 됨 (self closing tag)

2. 최상위 태그(가장 밖 태그)

   - jsx의 표현식은 반드시 하나의 부모가 필요함

   - 최상위 태그로 모든 태그를 감싸야 함

   - 하나의 태그로 감싸고 싶지 않을 땐 react 기능 사용

     ```jsx
     import React from "react"; //리액트 기능이기 때문에 리액트 불러옴
     
     <React.Fragment>
         // 여기에 하위 태그 작성
     </React.Fragment>
     // 해당 태그로 감싸면 됨
     // 실제 웹 상에서는 아무것도 감싸지 않은 것처럼 보임
     
     // React.Fragment 가 귀찮다면 빈 태그도 가능
     <>
     </>
     ```

   

### 스타일

1. css는 그냥 사용 가능

2. 스타일을 하나의 객체로 사용 가능

   ```jsx
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
   
     return (
       <div style={style.App}>
         <MyHeader />
         <h2 style={style.h2}>안녕 리액트 {name}</h2>
         <b style={style.bold_txt}>React.js</b>
         <MyFooter />
       </div>
     );
   }
   ```

   

### JS 값 사용

- `{}` 변수, 문자열, 숫자 등 사용 가능

  - 함수도 가능하지만 함수의 return 값이 문자열, 숫자 등이어야 함

- 조건부 랜더링

  ```jsx
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
  ```



### State(상태)

```jsx
import React, { useState } from "react";
// 리액트 기능이기 때문에 리액트에서 불러옴

const Counter = () => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  const [count, setCount] = useState(0);
  // useState(초기값)
    
  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};
```

- 컴포넌트는 자신이 가진 상태(state)가 변할 때 다시 그림(호출)
  - 리랜더
  - 나 자신이 아닌 부모가 리랜더 되어도 자식도 리랜더 함



### Props

- 객체로 받아옴

- 혹시나 `initialValue`라는 값을 보내지 않았을때 오류를 방지하기 위해 미리 `defaultProps`로 default 값 줄 수 있음

  ```jsx
  Counter.defaultProps = {
    initialValue: 0,
  };
  ```

  

### OnChange

- 값의 변화를 감지






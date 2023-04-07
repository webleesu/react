# React Lifecycle

[toc]

## React Component Lifecycle Methods

- class형 컴포넌트에서만 사용 가능



### ComponentDidMount

- 컴포넌트가 탄생할 때 시작하는 메서드



### ComponentDidUpdate

- 컴포넌트가 업데이트 될 때 실행하는 메서드



### ComponentWillUnmount

- 컴포넌트가 종료되기(죽을때) 직전에 실행하는 메서드



## React Hooks

- `use` 붙은 친구들을 클래스형 컴포넌트가 아니더라도 사용 가능하게 함
- `useState`, `useEffect`, `uesRef` ...

### useEffect()

```jsx
import React, { useEffect } from "react";

useEffect(()=>{
    // Callback 함수
},[]); // 의존성 배열(Dependency Array) 이 배열 내에 들어있는 값이 변화하면 콜백함수가 
```


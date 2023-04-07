# React.memo

[toc]

- 고차 컴포넌트

  - 고차 컴포넌트는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수

  ```jsx
  const EnhancedComponent = higherOrderComponent(WrappedComponent);
  // WrappedComponent를 higherOrderComponent화 시켜 더 강화된 EnhancedComponent 컴포넌트로 반환
  ```

- 컴포넌트가 동일한 props로 동일한 결과를 렌더링해낸다면, `React.memo`를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우에 따라 성능 향상을 누릴 수 있음

- 똑같은 props를 받으면 똑같은 값을 전달 (리랜더X, 다시 계산 X)

  ```jsx
  const MyComponent = React.memo(function MyComponent(props) {
    /* props를 사용하여 렌더링 */
  });
  ```



```jsx
const Textview = ({ text }) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`);
  });
  return <div>{text}</div>;
};

const Countview = ({ count }) => {
  useEffect(() => {
    console.log(`Update :: Count : ${count}`);
  });
  return <div>{count}</div>;
};

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <Countview count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

// count가 변경 시 text가 변경이 되든 안되든 리랜더
// count 고정, text 변경 시에도 마찬가지
```

React.memo 사용

```jsx
const Textview = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`Update :: Text : ${text}`);
  });
  return <div>{text}</div>;
});

// text가 변할때만 랜더링

const Countview = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Update :: Count : ${count}`);
  });
  return <div>{count}</div>;
});
// count가 변할때만 랜더링

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <Countview count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};
```


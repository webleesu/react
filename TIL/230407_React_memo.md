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



`CounterA`와 `CounterB` 모두 버튼 클릭시 초기와 같은 상태로 재할당

- js가 객체, 함수, 배열과 같은 비원시 타입의 자료형 비교는 값에 의한 비교가 아닌 <b>주소에 의한 비교</b>를 함 (얕은 비교)

```jsx
const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CountA Update - count: ${count}`);
  });

  return <div>{count}</div>;
});
const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`CountB Update - count: ${obj.count}`);
  });

  return <div>{obj.count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
          // 아무리 클릭해도 변화 X
      </div>

      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
          // 클릭 시 콘솔 누적
          // 객체를 비교하기 때문
      </div>
    </div>
  );
};
```



객체 비교 시에도 리렌더 하지 않도록 최적화 하기 위해 필요한 문법

```jsx
function MyComponent(props) {
  /* props를 사용하여 렌더링 */
}
function areEqual(prevProps, nextProps) {
  /*
  nextProps가 prevProps와 동일한 값을 가지면 true를 반환하고, 그렇지 않다면 false를 반환
  */
}
```

```jsx
// 이전코드에서

// 객체인 CounterB는 React.memo 제거
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CountB Update - count: ${obj.count}`);
  });

  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  // return true; // 이전 프롭스 현재 프롭스가 같다 -> 리렌더링 하지 않게 됨
  // return false; // 이전 프롭스 현재 프롭스가 다르다 -> 리렌더링 하게 됨
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);


// ... 생략 ...
// 기존 CounerB 대신 MemoizedCounterB 사용
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
```




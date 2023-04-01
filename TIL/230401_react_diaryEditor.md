# Diary Editor

[TOC]

## input 값 변화

```jsx
const DiaryEditor = () => {
  const [author, setAuthor] = useState("이수민");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={author}
          onChange={(e) => {
            console.log("target value: ", e.target.value);
            console.log("target name: ", e.target.name);
            setAuthor(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

```



## input과 textarea

```jsx
const [author, setAuthor] = useState("이수민"); // 초기상태 "이수민"
const [content, setContent] = useState(""); // 초기상태 공백

return (
  <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input
        name="author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
    </div>
    <div>
      <textarea
        value={content}
        onChange={(e) => {
            setContent(e.target.value);
          }}
        />
    </div>
  </div>
);
```

- 같은 성질의 두 state를 하나로 관리

  ```jsx
  const DiaryEditor = () => {
    const [state, setState] = useState({
      // 초기 상태 공백
      author: "",
      content: "",
    });
  
    return (
      <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
          <input
            name="author"
            value={state.author}
            onChange={(e) => {
              setState({
                author: e.target.value, // author의 값만 변화
                content: state.content, // content의 값은 그대로 유지
              });
            }}
          />
        </div>
        <div>
          <textarea
            value={state.content}
            onChange={(e) => {
              setState({
                author: state.author,
                content: e.target.value,
              });
            }}
          />
        </div>
      </div>
    );
  };
  ```

- `state.content` , `state.author` 두개가 아닌 여러개일 경우 모든 경우에 대해 다 정의 내리기 힘들기 때문에 `...state` 사용

  - 스프레드연산자로 state가 갖고있는 객체들을 해당 열에 펼쳐줌 (위에 객체로 받았기 때문)
  - 변경될 value 보다 `...state`가 먼저 선언되어야 함!
    - 뒤에 적게 되면 변경될 값이 아닌 원래의 값이 계속 적용되어 value 값이 변하지 않음

- 같은 이벤트 핸들러 하나로 관리

  ```jsx
  const DiaryEditor = () => {
    const [state, setState] = useState({
      author: "",
      content: "",
    });
  
    const handleChangeState = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
          <input
            name="author"
            value={state.author}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <textarea
            name="content"
            value={state.content}
            onChange={handleChangeState}
          />
        </div>
      </div>
    );
  };
  ```

  

## select

```
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  
  // ... 생략
  
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
```



## input 관련 최소 글자수 제한

```jsx
  const handelSubmit = () => {
    if (state.author.length < 1) {
      alert("작성자는 최소 1글자 이상 입력해주세요");
      return; // 다시 입력할 수 있도록 돌아가기
    }
    if (state.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요");
      return;
    }
    alert("저장 성공");
  };
```



## DOM 요소에 접근

### useRef

```jsx
import React, { useRef } from "react";
```

- React.MutableRefObject
- alert 대신 focus로 변경

```jsx
	const DiaryEditor = () => {
	const authorInput = useRef();

    const handelSubmit = () => {
    if (state.author.length < 1) {
      // focus
      authorInput.current.focus(); // 가장 최근 요소에 포커스
      return;
    }
    if (state.content.length < 5) {
      // focus
      contentInput.current.focus();
      return;
    }
    alert("저장 성공");
  };
    
// 생략 ...

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput} // 해당 요소에 접근 가능하게 함
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
    </div>
  );
};
```


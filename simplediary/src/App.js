import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이수민",
    content: "hi",
    emotion: 5,
    // created_date: new Date(), //현재 시간
    created_date: new Date().getTime(), //milliseconds로 변환
  },
  {
    id: 2,
    author: "홍길동",
    content: "hello",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개",
    content: "bye",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;

# Memoization

[toc]

- 연산 결과 재사용

- 이미 계산 해 본 연산 결과를 기억 해 두었다가 

  동일한 계산을 시키면 다시 연산하지 않고 기억해두었던 데이터를 반환시키게 하는 방법

## useMemo

```jsx
useMemo(
    // 콜백 함수
, []) // 해당 배열이 변경될 때 위의 함수가 호출

const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
// data.length(갯수)가 변하지 않으면 호출되지 않음
// 일기의 내용을 수정 했을 경우는 호출 X
// 일기를 삭제 또는 추가 했을때 호출


// useMemo()를 사용하게 되면 더이상 getDiaryAnalysis은 함수가 아닌 단순 값

```


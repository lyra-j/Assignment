//<4-2> 콜백함수 제어권 1 : 콜백함수 호출 시점에 대한 제어권

// 아래 타이머 함수를 요구사항에 맞게 완성하기

let count = 0;

const timerId = setInterval(callbackFunc, 1000);

function callbackFunc() {
  // count 가 7이 되면 타이머를 멈추도록 해보세요.
  if (++count == 7) clearInterval(timerId);

  console.log(count);
}

/*
출력 결과: 확인 완료!!
1
2
3
4
5
6
7
*/

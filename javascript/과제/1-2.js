// 음양 더하기
function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++ ){
    if(signs[i] == true){
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// 삼항연산자를 써서 줄이기
function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++ ){
    signs[i] == true ? answer += absolutes[i] : answer -= absolutes[i];
    }
  return answer;
}
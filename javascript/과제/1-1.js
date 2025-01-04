// 문자열 내 p와 y의 개수

// 나의 풀이
function solution(s){
  let P = s.toUpperCase().split("P").length;
  let Y = s.toUpperCase().split("Y").length;

  return P === Y ? true : false;
}

console.log(solution("Pyy")); // false
console.log(solution("pPoooyY")); // true

// 튜터님 풀이
let str1 = "pPoooyY";
let str2 = "Pyy";

function solution(s) {
  let answer = true;
  
  // 1. 대문자로 통일
  s = s.toUpperCase();
  
  // 2. for문을 통해서 문자열의 요소 하나하나씩을 비교
  // 2-1. p, y비교
  let num = 0;
  for (let i = 0; i < s.length; i++){
    if(s[i] === 'P') num++;
    if(s[i] === 'Y') num--;  
  }

  //3. 개수 체크
  answer = (num === 0);
  
  return answer;
}

console.log(solution(str1));


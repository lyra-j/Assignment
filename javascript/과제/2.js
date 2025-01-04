// 문자열 내 마음대로 정렬하기

// 1. index 정렬 => index가 동일하면 사전 순으로 정렬
// 힌트
// ㄱ. 문자열 앞에 인덱스에 해당하는 문자를 붙인다. /
// ㄴ. 사전순으로 정렬한다.(오름차순)) / .sort((next,perv)=>next-prev)
// ㄷ. 정렬된 배열의 가장 앞 글자를 땐다. /

function solution(strings, n) {
  let answer = [];
  
    for (let i = 0; i < strings.length; i++) {
      strings[i] = strings[i][n] + strings[i]; // 문자열의 앞에 n번째 글자를 붙인다.
    }

    // console.log(strings); // ㄱ. 확인: [ 'usun', 'ebed', 'acar' ] 

    strings.sort();

    // console.log(strings); // ㄴ. 사전순 정렬 확인 : [ 'acar', 'ebed', 'usun' ]

    for(let j = 0; j < strings.length; j++){
      strings[j] = strings[j].replace(strings[j][0],""); // 문자열의 맨 앞 글자 지우기
      answer.push(strings[j]);
    }
  return answer;
  }
console.log(solution(["sun", "bed", "car"],1));

// solution(["sun", "bed", "car"],1); // 확인용
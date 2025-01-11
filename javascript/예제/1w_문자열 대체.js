// 아래 결과와 같이 출력되도록 newStr에 들어갈 코드를 작성해 보세요.

const str = "I like coffee but I don't like coffee shop.";

//  replace 메소드를 이용하여 이 부분을 완성해 보세요.
const newStr = str.replace("coffee", "tea");

console.log(newStr);
// 출력 결과: "I like tea but I don't like coffee shop."

// string.replace(searchValue, newValue)
// 원래의 문자열을 변경하지 않고, 조건에 맞는 부분에 대해서만 치환된 문자열을 리턴.
// 제공된 문자열에서 첫번째로 찾은 문자열만 치환.
// 영문 대,소 문자 구분함.

// 대소문자 구분없이 문자열 치환을 하기 위해서는 정규식을 사용한다.
// 정규식으로 찾으려는 문자열을 '/'로 감싸서 파라미터로 들어가는 값이 정규식임을 알려줌.
// '/'뒤에 'i'라는 modifier를 (플래그)붙여 대소문자를 구문하지 말라고 정의해준다.(ignore case)
// const newStr = str.replace(/coffee/i, "tea");

// 모든 문자열을 치환하기 위해서 마찬가지로 정규식을 사용해 줘야한다.
// 정규식으로 찾으려는 문자열을 '/'로 감싸서 파라미터로 들어가는 값이 정규식임을 알려줌.
// '/'뒤에 'g'라는 modifier를 (플래그)붙여 'global match' 전역검색하여 모두 찾으라고 정의해준다.
// const newStr = str.replace(/coffee/g, "tea");

// 또는 replaceAll() 사용

// 대소문자 구분 없이'i' 모든 문자열'g' 치환 하라.
// const newStr = str.replace(/coffee/gi, "tea");

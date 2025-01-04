class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

// 여기는 좀 알겠음.
// 비동기 함수인것을 알려주고
async function loadJson(url) {
  let response = await fetch(url); // fetch 요청을 await
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// 해설을 봐도 모르겠네
async function koreanMovie() {
  let res;
  while (true) {
    try {
      res = await loadJson(
        `https://klassic-quote-api.mooo.com/v1/random-quote`
      );
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("무언가 에러가 발생했군요!");
      } else {
        throw err;
      }
    }
  }

  alert(`${res.author}: ${res.quote}`);
  return res;
}

koreanMovie();

// 뭔소린지를 이해를 못하것네 알아야 리팩토링을 하지...
// .then이 나온걸 보니 여길 일단 해석해야 할듯, return문도 2개이고
// promise를 어디에 선언해야 하는지
// 비동기async 함수가 어느 부분인고 어디에(로직 앞에) await를 걸어야 하는지 찾는 거군

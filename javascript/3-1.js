// (5)불변객체 의 3.얕은 복사 ~ / 3주차 4강

var user = {
  name: "john",
  age: 20,
}

var getAged = function (user, passedTime) {
  // 여기를 작성해 주세요!
  var copyUser = {};

  for(var prop in user){
    copyUser[prop] = user[prop];
  }
  copyUser.age += passedTime;
  return copyUser;
}


var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
  // console.log(user1);
  // console.log(user2);  // user1과 user2확인해보기

  if (!user2) {
      console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) { 
      console.log("Passed! If you become older, you will be different from you in the past!")
  } else {
      console.log("Failed! User same with past one");
  }
}

agedUserMustBeDifferentFromUser(user, agedUser);
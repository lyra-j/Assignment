// 3주차 10강~ , 3. this(정의, 활용방법, 바인딩, call, apply, bind)~

// 함수 내부에서 this ⇒ 함수로써  독립적으로 호출할 때 this는 항상 전역개체를 가리킴.

var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);

// fighter.opponent.getFullname() ->  fighter.opponent객체의 메소드 함수로 호출, fighter.opponent의 fullname을 가리킴  => Francis Ngannou 

// fighter.getName() -> fighter객체의 메소드 함수로 호출, fighter의 fullname을 가리킴  => John Jones

// fighter.getFirstName() -> 화살표 함수로 this를 바인딩 하지 않음, 호출된 위치가 var fullname이 선언된 위치와 같기에 Ciryl Gane을 대상으로 해당 함수로직을 실행 => Ciryl

//fighter.getLastName -> 즉시실행 함수로 호출된 위치와 동일한 위치에 선언된 var fullname인 'Ciryl Gane'를 가리킴. 로직 수행 =>  Gane
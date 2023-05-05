// type alias에 함수 type 저장해서 쓰는 법
type 함수타입 = (a: string) => number;
// 함수의 타입지정은 반드시 화살표 함수 형식으로 작성해야한다.
// 위와 같이 작성하면 param은 반드시 string 타입이 들어가야하고 return 값은 number로 들어온다는 뜻이다.

// 함수 type alias를 함수로 가져다가 부착하려면 함수표현식을 사용해서 붙여야한다.
let 하아암수: 함수타입 = function (a) {
    return 10;
}

// object 안에 함수 type 지정은 어떻게 해야할까?
let 회원정보 = {
    name : "kim",
    pulsOne(x) { // TS에서 param에 타입이 지정되어 있지 않으면 뭐라뭐라 혼낸다.
        x + 1
    },
    changeName : () => {
        console.log("잘 되나?")
    },
}
// 여기서 plusOne이라는 함수를 꺼내쓰고 싶을 땐?
// object의 값을 뽑아 쓰는 경우와 똑같이 쓰면 된다.
//회원정보.plusOne()

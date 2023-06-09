// 숙제 1. 아래의 함수 2개를 타입 지정해보기.
type plus1 = (x: number) => number;
type changeName = (a: string) => string;

let 회에원정보 = {
    name : "kim",
    pulsOne(x) {
        x + 1
    },
    changeName : () => {
        console.log("잘 되나?")
    },
}


//숙제2.
// cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
// 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.

// cutZero함수 부터 만들어보자.
// cutZero 함수는 빈문자열이 param으로 들어가지 않는다고 가정하고 풀자
type CutType = (x : string) => string;

let cutZero :CutType = function (x){
    if (x[0] === '0') {
        return x.substring(1);
    }
}
// removeDash()도 만들어 보자.
type RmType = (x:string) => number;

let removeDash : RmType = function (x) {
    let result = x.replace(/-/g, "")
    return parseFloat(result);
}


// 숙제3.
// 숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.

// 이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
    // let thisFunction = function(a : string, b : function, c : function);
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

// 이 함수는 어떻게 만들면 될까요?

// 둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
type newType1 = (a: string) => string
type newtype2 = (a: string) => number

function newFunc(a: string, func1: newType1, func2:newtype2){
    let result1 = func1(a);
    let result2 = func2(result1)
}
newFunc('010-1111-2222', cutZero, removeDash)

// 먼저 JS로 함수를 만들고 그 후에 type 지정하는 것도 하나의 문제 풀이 방법이 되겠네...

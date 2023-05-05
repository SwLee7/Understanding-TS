// let 이름 :string ='KIM'
// let age : number  = 50;
// let GetMarriged : boolean = true;
// let members:string[]=['kim', 'park']
// let members2 : {member1:string, member2:string} = {member1 : 'kim', member2: 'park'}

//숙제
//1, 이름 나이 출쟁 지역을 변수로
let name2 = 'SeokwonLee';
let id :{나이: number, 출생지역: string} = {나이 : 1500, 출생지역: '한양'}
//Q2.
let favorite :{가수 : string, 노래 : string} = {가수:'태연', 노래:'I' }

//강의3

let 회원 :number | string = 123; // UNION TYPE: type 2개 이상 합친 새로운 타입 만들기 |(합 연산자)를 이용한다. union 타입은 새로운 타입을 만들어낸 것이기 때문에 sring|number 같은 새로운 타입에 +1하면 에러를 낸다.
let members3:(number | string)[] = [1,'2',3] // 배열을 union할 때는 배열 앞을 괄호로 묶어 주는 것이 좋다.
let obj:{a:string | number} = {a:123} // 객체를 표현할 때는 괄호로 묶지 않아도 잘 작동한다.

let 이름 :any;//말 그대로 아무거나 다 들어가도 됨 하지만 any는 타입실드 해제라서 일반 js와 다를게 없다.
let 이름2: unknown; // any보다 조금 더 안전한 타입 설정 방법이다.any랑 다르게 타입실드를 해제하지 않는다.

let age2 : string|number;
//age2 +1; => 이거 에러남. 이유는 stirng type이나 number type에만 덧셈이 가능한데 엄격한 거 좋아하는 TS는 새로운 타입인 union type에는 적용을 안시켜주기 때문임.

//강의3. 숙제1
let user :string = 'kim';
let age :undefined|number = undefined;
let married :boolean = false; 
let 철수 :unknown[]= [user, age, married];

//강의 숙제2
let 학교 :{
    score : boolean|number[],
    teacher : string,
    friend : string|string[]
}
= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]


//강의4.
function 함수(x:number) :number{
    return x*2;
}
함수(30);

function 함수2(x:number): void{ // void는 내가 return 하고 싶지 않은 함수의 값을 안나오게 해줌.
    1+1
}
// 타입지정된 파라미터는 함수를 호출할 때도 파라미터를 넣어주어야한다. 파라미터가 옵션일때는 파라미터에 ?를 넣어주면 된다. ?는 옵션임을 나타낸다.
//?연산자는 '들어올 수도 있다'는 말인데 이것은 number|undefined === number?랑 같다.

// function 함수3 (x :number|string):void{
//     if (){ // 괄호 안의 x의 타입이 숫자라면
//         console.log(x+3)
//     }
// }

// 강의4 숙제1
/*이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
파라미터와 return 타입지정도 잘 해봅시다.*/

// (2023.04.08)강의 5.
// narrowing : 어떤 변수가 있는데 이 변수의 타입이 아직 불확실해 그럼 if문으로 Narrowing해줘야 조작이 가능하다.
// Narrowing 할 때 주의할 점 if문을 썼으면 끝까지 써야 안전하다 -> 즉, else, else if 안쓰면 에러로 잡을 수 있다.
// Narrowing으로 판정해주는 문법들
// 1. typeof 변수
// 2.속성명 in object자료
// 3. 인스턴스 instanceof 부모
// 결론: Narrowing으로 판정해주는 문법들은 현재 변수 타입이 뭔지 특정 지을 수 있기만 하면 TS가 Narrowing으로 전부 인정해준다.
// 아니면 assertion(타입 덮어쓰기) 'as 타입'을 이용해서 사용한다.

// assertion 문법의 용도 
// 1. Narrowing할 때 쓴다. (특정 타입에서 다른 타입으로 바꿀 때 쓰는 것이 아니란 이야기다.)
// 2. 무슨 타입이 들어올지 100% 확실할 때 써야한다. (왜냐하면 assertion을 사용하면 TS가 버그를 캐치하지 못하기 때문이다.) -> 그래서 굳이 쓸 이유가 없긴하단다.(평소에는 쓰지마라) -> 디버깅용 비상용으로 쓰면 좋음;
//

function 내함수(x : number | string){
    if (typeof x === 'string'){
        return x + '1'
    }else{
        return x + 1;
    }
}
내함수(123)

function myFunc(x : number | string){
    let array: number[] = [];
    if (typeof x ==='number') array[0] = x;
}
myFunc(123)

//강의6.
type Animal = string| number | undefined;
let 동물 : Animal

// type alias(타입 변수)에는 별거 다 넣을 수 있다.
type Animal2 ={name : string, age : number}
let 동물2: Animal2 = {name: 'kim', age:20}

// type 변수 작명 관습
// 영어 대문자로 시작하고 뒤에 type을 붙여주면 좋다.
// const 변수 설명
const 출생지역 ={ region : 'seoul' }
// 일 때 객체 안의 값은 변경이 가능하다.
출생지역.region = 'busan'
// 하지만 TS에서는 객체 안의 값을 LOCK이 가능하다. -> readonly 기능을 이용하면 된다. 
// -> 하지만 TS에러는 에디터&터미널에서만 존재함 -> 왜냐하면 JS에서는 그딴거 안막아주고 잘 실행되기 때문이다.

const 여친 ={
    name: '없음'
}
여친.name='유라'

type Girlfriend = { 
    readonly    name : string
}
const 여친2 : Girlfriend = {
    name : '모름'
}
// object 속성 안에도 ?(option) 연산자 사용이 가능하다.(여기서는 string | undefined 겠지;)

// 당연히 union type으로 두 alias를 합칠 수 있다.
type Name = string;
type Age = number;
type Person = Name | Age;
//  &연산자로 object 합치기가 가능하다.
type PositionX = {x : number };
type PositionY = {y : number};
//{x : number, y : number }로 만들고 싶으면??? ==> 이걸 개발자들은 extend라고 함...
// &기호를 만들면된다.
type Newtype = PositionX & PositionY;

let position : Newtype ={ x : 20, y : 10 }

// type 키워드는 변수로 재정의할 수 없다.(따라서 엄격하게 사용할 수 있다.)

// 강의 7.
// 더 엄격한 타입 지정이 가능하다. => 자동완성 힌트 굳
// Literal Types
// let 이름: 123;
// L>이름 =123으로 만들 수 있다.
let 접니다:'대머리' | '솔로';
접니다 ="대머리"

function 하암수(a : 'hello'){

}하암수 ('hello')


// 7강 연습 문제
// 1. 가위, 바위, 보 중 1개 입력이 가능
// 2. 가위, 바위, 보만 들어올 수 있는 array를 return 해야함
function RSP (a: '가위' | '바위' | '보')  : ('가위' | '바위' | '보')[] {
    return ['가위']
}
RSP('가위')

//const변수의 한계
// 그래서 Literal Type은 const 변수와 유사하게 사용이 가능하다.(업글 버전 느낌임)
// Litaral Type의 문제점
var 자료 :{name:"kim"}= { // solution 1. :{name:"kim"}=를 통해 타입 구분을 확실히 해줌
    name : 'kim'
} // solution 3. as const 붙이는 거
function 내애함수(a : 'kim'){

}
내애함수(자료.name)

// 에러가 나는 이유 : 내애함수의 파라미터에 'kim'이라는 타입이 들어올 수 있다고 한거지 'kim'이라는 자료가 들어올 수 있다고 말하는 것이 아니다.
// solution 1. object 만들 때 타입 지정을 확실히 하면된다.
// solution 2. assertion 문법으로 type을 구라를 치면 된다.
// solution 3. as const라는 키워드를 쓰면된다. --이 object는 literal type 지정 알아서 해달라는 뜻이다.
// --> as const의 효과
// 1. object value 값을 그대로 타입으로 지정해준다.
// 2. object 속성들에 모두 readonly를 붙여주는 효과가 있다. => readonly: object 속성을 마음대로 못바꾸게 하는 거
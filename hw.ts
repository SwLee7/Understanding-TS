// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

// 1. 함수의 파라미터로 월소득(만원단위) rev, 집보유여부(true/false)house, 매력점수 ('상' or '중' or '하') charm 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

function propability (rev:number, hou:boolean, cha:string) :string|void {
    let pass = '결혼 가능';
    let point:number = 0;
    // 월소득이 만원당 1점, hou가 true면 500점, false면 0점, cha가 '상'이면 100점 '중','하'는 0점
    point+=rev;
    if (hou === true) point += 500;
    if (cha = '상') point += 100;
    if (point >= 600){
        return pass;
    }
}

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 

// 1. 이 타입은 object 자료형이어야합니다.

// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  

// type alias로 만들어보셈 

type a ={ color? : string};
type b ={size : number};
type c ={readonly position : number[]}; // 변경 불가능하게 만드려면 readonly! 항상 떠올리자!!!

type d = a&b&c

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type IsValid = {
    name : string,
    phone : number,
    email? : string
}

// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.

type IsAdult ={over19 : boolean}

type NewValid = IsValid & IsAdult;

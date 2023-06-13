let 제목 = document.querySelector('#title');
if (제목 instanceof Element){
제목.innerHTML='반가워요'
}

//Ts에서 링크 변경하는 방법
let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement){
링크.href = 'https://kakao.com'
}
//href = HTMLAnchorElement가 타입
//button = HTMLButtonElement가 타입

// TS에서 eventListener 부착하는 방법
let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function(){
//?의 역할 : 버튼에 addEventListener가 가능하면 해주고 아니면 undefined를 뱉어내라.
})

